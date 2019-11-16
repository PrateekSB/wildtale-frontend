import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Landing from '@/views/Landing.vue';
import PostStory from '@/views/PostStory.vue';
import CreateStory from '@/views/CreateStory.vue';
import ReadStory from '@/views/ReadStory.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/post-story',
    name: 'post-story',
    component: PostStory,
  },
  {
    path: '/create-story',
    name: 'create-story',
    component: CreateStory,
  },
  {
    path: '/read-story',
    name: 'read-story',
    component: ReadStory,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
