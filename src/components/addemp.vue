<template>

    <div>
        <h3>添加用户</h3>
        <table>
            <tr>
                <td>id:</td>
                <td><input type="text" v-model="id"></td>
            </tr>
            <tr>
                <td>角色名称：</td>
                <td><input type="text" v-model="name"></td>
            </tr>
            <tr>
                <td>年龄：</td>
                <td><input type="text" v-model="age"></td>
            </tr>
            <tr>
                <td>个人宣言：</td>
                <td><input type="text" v-model="msg"></td>
            </tr>
            <tr>


                <td>职业:</td>
                <td><select v-model="job">
                    <option selected="selected">射手</option>
                    <option>法师</option>
                    <option>游走</option>
                    <option>战士</option>
                    <option>打野</option>
                </select></td>
            </tr>

        </table>
        <button @click="add_emp">添加角色</button>


    </div>

</template>

<script>
export default {
    name: "addemp",
    data() {
        return {
            id: '',
            name: '',
            age: '',
            msg: '',
            job: '',
        }
    },
    methods: {
        add_emp() {
            if (this.id === '' && this.name === '' && this.age === '' && this.msg === '' && this.job === '') {
                alert('不能为空');
            } else {
                let emp0 = {
                    id: this.id, name: this.name, age: this.age, msg: this.msg, job: this.job
                };
                console.log(emp0);
                let emp_list = JSON.parse(localStorage.getItem('emp_list'));
                emp_list.push(emp0);
                console.log(emp_list);
                localStorage.emp_list = JSON.stringify(emp_list);
            }
        },
    }
}
</script>

<style scoped>

</style>
