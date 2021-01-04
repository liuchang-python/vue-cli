import Vue from 'vue'
import Router from 'vue-router'
import emplist from "../components/emplist";
import intro from "../components/intro";
import note from "../components/note";
import addemp from "../components/addemp";

Vue.use(Router)

export default new Router({
    routes: [
        {path:'/emplist',component:emplist},
        {path:'/intro',component:intro},
        {path:'/addemp',component:addemp},


        {path:'/note',component:note},


        {path:'/',redirect:'/emplist'}
    ]
})
