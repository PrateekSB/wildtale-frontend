import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Landing from '@/views/Landing.vue';
import PostStory from '@/views/PostStory.vue';
import CreateStory from '@/views/CreateStory.vue';
import StoryList from '@/views/StoryList.vue';
import Landingv2 from '@/views/Landingv2.vue';
import SelectedList from "@/views/SelectedList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landingv2,
  },
  {
    path: '/landingv2',
    name: 'landingv2',
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
    path: '/story-list',
    name: 'story-list',
    component: StoryList,
  },
  {
    path: '/selected-list',
    name: 'selected-list',
    component: SelectedList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
