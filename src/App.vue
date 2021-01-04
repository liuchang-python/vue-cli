<template>
    <div id="app">

        <h3>欢迎访问五岳皮肤介绍</h3>
        <router-link to="/emplist">五岳角色列表</router-link>
        <router-link to="/note">留言板</router-link>
        <router-link to="/addemp">添加角色</router-link>
        <hr>
        <router-view></router-view>

    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style>
table {
    text-align: center;
    border: 1px;
}

div {
    background: linear-gradient(to right, #FFFFCC, #CCFFFF, #CCFF99);
}
</style>
