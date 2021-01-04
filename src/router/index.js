import Vue from 'vue'
import Router from 'vue-router'
import emplist from "../components/emplist";
import intro from "../components/intro";
import note from "../components/note";

Vue.use(Router)

export default new Router({
    routes: [
        {path:'/emplist',component:emplist},
        {path:'/intro',component:intro},
        {path:'/note',component:note},


        {path:'/',redirect:'/emplist'}
    ]
})
