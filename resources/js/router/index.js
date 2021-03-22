import Vue from 'vue'
import Router from 'vue-router'

/** Login Section */
import Login from '../views/auth/Login'

/** Live Chat Section */
import Dashboard from '../views/dashboard/Dashboard'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/login',
            component: Login,
            name: 'login',
            meta: {
                title: 'Login - Rental',
                description: 'Login panel',
                requiresAuth: false,

            }
        },
        /** Product */
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'Dashboard',
            meta: {
                title: 'Dashboard',
                description: 'Dashboard module',
                requiresAuth: true,

            }
        }
    ]
})
