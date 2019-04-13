import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../views/Home'
import Lab1Page from '../views/Lab1Page'

import BootstrapVue from 'bootstrap-vue/src/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const index = new Router({
    mode: 'history',
    routes: [
        {path: '/', component: HomePage},
        {path: '/lab1', component: Lab1Page},
    ]
});

Vue.use(Router);
Vue.use(BootstrapVue);
export default index;