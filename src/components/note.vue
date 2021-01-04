<template>

    <div>
        <h3>留言板</h3>

        <input type="text" v-model="note">
        <button @click="add_note">发表留言</button>

        <hr>
        <ul>
            <li v-for="(value,index) in note_list" :key="index">
                <span>{{ value }}</span><a href="javascript:" @click="del_note(index)">删除</a>
            </li>
        </ul>
        <h4 v-show="note_list.length!=0">总数量：{{note_list.length}}条</h4>
        <input type="button" value="清空" @click="del_all" v-show="note_list.length!=0">

    </div>

</template>

<script>
export default {
    name: "note",
    data() {
        return {
            note_list: localStorage.note_list ? JSON.parse(localStorage.note_list) : [],
            note: '',
        }
    },
    methods: {
        add_note() {
            if (this.note) {
                this.note_list.push(this.note);
                localStorage.note_list = JSON.stringify(this.note_list);
                this.note = '';
            }
        },
        del_note(index) {
            this.note_list = JSON.parse(localStorage.note_list);
            this.note_list.splice(index,1);
            localStorage.note_list = JSON.stringify(this.note_list);
        },
        del_all(){
            // 1,赋值给一个空数组
            // localStorage.note_list = JSON.stringify([]);
            // this.note_list = JSON.parse(localStorage.note_list);

            // 2.移除对应键，给vue的note_list数据赋值为空
            localStorage.removeItem('note_list');
            this.note_list = [];
        },
    }
}
</script>

<style scoped>

</style>
