import Vue from "vue";
import VueRouter from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import DashBoard from '../components/dash/DashBoard.vue';
import EmpDashBoard from '../components/dash/EmployeeDashBoard.vue';
import ManDashBoard from '../components/dash/ManagerDashBoard.vue';
// import EmployeePage from '../views/EmployeePage'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashBoard
    },
    {
        path: '/employeedashboard',
        name: 'EmployeeDashboard',
        component: EmpDashBoard
    },
    {
        path: '/managerdashboard',
        name: 'ManagerDashboard',
        component: ManDashBoard
    }
    // {
    //     path: '/:id',
    //     name: 'Employee',
    //     component: EmployeePage
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
export default router
