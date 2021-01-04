<template>

    <div>
        <h3>五岳皮肤介绍</h3>
        <hr>
        <table>
            <tr>
                <td>ID</td>
                <td>角色名称</td>
                <td>大概年龄</td>
                <td>职业</td>
                <td>操作</td>
            </tr>
            <tr v-for="(user,index) in emp_list" :key="index">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
                <td>{{ user.job }}</td>
                <td>
                    <button @click="to_intro(index)">个人宣言</button>
                    |
                    <button @click="del_emp(index)">删除</button>
                </td>
            </tr>
        </table>


    </div>

</template>

<script>
export default {
    name: "emplist",
    data() {
        return {
            emp_list: localStorage.emp_list ? JSON.parse(localStorage.emp_list) : [],
        }
    },
    methods: {

        to_intro(index) {
            // alert(index);
            this.$router.push('/intro?index=' + index);
        },
        del_emp(index) {
            if (confirm('确认删除')) {
                this.emp_list.splice(index, 1);
                console.log(this.emp_list);
            }
        },
    },
    mounted() {
        let emp_list1 = [{id: 1, name: '伽罗', age: 18, msg: '华山如立，不可摧折。', job: '射手'},
            {id: 2, name: '甄姬', age: 28, msg: '恒山如行，御风绝顶。', job: '法师'},
            {id: 3, name: '韩信', age: 38, msg: '衡山如飞，俯临万物。', job: '打野'},
            {id: 4, name: '庄周', age: 48, msg: '嵩山如卧，万物一府。', job: '游走'},
            {id: 5, name: '典韦', age: 58, msg: '泰山如坐，五岳独尊。', job: '战士'}];
        // let emp_list1 = [];
        localStorage.setItem('emp_list', JSON.stringify(emp_list1))
    },
}
</script>

<style scoped>

</style>
