<template>
    <div>
        <vue-nav v-if="isAuthenticated"></vue-nav>
        <vue-aside v-if="isAuthenticated"></vue-aside>
        <router-view></router-view>
        <vue-footer v-if="isAuthenticated"></vue-footer>

    </div>
</template>


<script>
import VueNav from './Nav';
import VueAside from './Aside';
import VueFooter from './Footer';

export default {
    name: 'App',
    components: {
        VueNav,
        VueAside,
        VueFooter,
    },
   data(){
       return {
           isAuthenticated: false // this state only maintain by authentication
       }
   },
}
</script>
