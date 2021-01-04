<template>
    <div>

        <h2>个人宣言:</h2>
        <h3>"{{emp_list[emp].msg}}"</h3>
        <ul v-for="(value,key,index) in emp_list[emp]" :key="index">
            <li>{{key}}==>{{value}}</li>
        </ul>

    </div>
</template>

<script>
export default {
    name: "intro",
    data() {
        return {
            emp_list: [{id: 1, name: '伽罗', age: 18, msg: '华山如立，不可摧折。', job: '射手'},
                {id: 2, name: '甄姬', age: 28, msg: '恒山如行，御风绝顶。', job: '法师'},
                {id: 3, name: '韩信', age: 38, msg: '衡山如飞，俯临万物。', job: '打野'},
                {id: 4, name: '庄周', age: 48, msg: '嵩山如卧，万物一府。', job: '游走'},
                {id: 5, name: '典韦', age: 58, msg: '泰山如坐，五岳独尊。', job: '战士'}],
            emp:this.$route.query.index ? this.$route.query.index : 0,
        }
    },
    methods:{

    }
}
</script>

<style scoped>
h3{
    color:#99CCFF;
}
</style>
