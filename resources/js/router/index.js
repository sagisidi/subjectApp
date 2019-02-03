import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard'
import NewSubject from '../components/NewSubject'
import Subject from '../components/Subject'
import EditSubject from '../components/EditSubject'
import ViewSubject from '../components/ViewSubject'
import Login from '../components/Login.vue'

import axios from 'axios';
import VueAxios from 'vue-axios';
import Register from '../components/Register.vue'
import VeeValidate from 'vee-validate'
Vue.use(Router)
Vue.use(require('vue-resource'))

window.axios = require('axios');
Vue.axios = axios;
axios.defaults.baseURL = 'http://localhost:8000/api';
const router = new Router({
    routes: [{
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                auth: false
            }
        }, {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                auth: false
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {

                auth: true
            }
        }, {
            path: '/new',
            name: 'new-subject',
            component: NewSubject,
            meta: {

                auth: true
            }
        }, {
            path: '/subject/:subject_id',
            name: 'subject',
            component: Subject,
            meta: {

                auth: true
            },
            children: [{
                    path: 'view',
                    name: 'view-subject',
                    component: ViewSubject,

                },
                {
                    path: 'edit',
                    name: 'edit-subject',
                    component: EditSubject,

                },

            ]
        },


    ]
})



Vue.router = router;
Vue.use(VeeValidate);
Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});


export default router
