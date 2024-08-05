import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/views/Home.vue";
import About from '@/views/About.vue';
import Events from '@/views/Events.vue';
import Contact from '@/views/Contact.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Salijel from '@/views/Salijel.vue';
import UserDashboard from '@/views/UserDashboard.vue';
import AdminDashboard from '@/views/AdminDashboard.vue';

Vue.useAttrs(Router);

export default new Router ({
    node: 'history',
    routers: [
        {
            path: '/',
            name: 'Home',
            component:Home
        },
        {
            path:'/about',
            name: 'About',
            component: About
        },
        {
            path: '/events',
            name: 'Events',
            component:Events
        },
        {
            path:'/contact',
            name:'Contact',
            component: Contact
        },
        {
            path:'/Register',
            name:'Register',
            component: Register
        },
        {
            path:'/Login',
            name:'Login',
            component:Login
        },
        {
            path:'/Salijel',
            name:'Salijel',
            component:Salijel
        },
        {
            path:'/dashoard/user',
            name:'UserDashboard',
            component:UserDashboard
        },
        {
            path:'/dashboard/admin',
            name:'AdminDashboard',
            component:AdminDashboard
        }
    ]
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    const isAuth = !!token;
    const isAdmin = JSON.parse(atob(token.split('.')[1])).role === 'admin';
  
    if (to.path.startsWith('/dashboard')) {
      if (!isAuth) {
        next('/login');
      } else if (to.path === '/dashboard/admin' && !isAdmin) {
        next('/dashboard/user');
      } else {
        next();
      }
    } else {
      next();
    }
  });