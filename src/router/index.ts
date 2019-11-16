import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Landing.vue';
import PostStory from '../views/PostStory.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/post-story',
    name: 'post-story',
    component: PostStory,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
