import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/TheHome.vue';
import Work from './views/TheWork.vue';
import About from './views/TheAbout.vue';
import Contact from './views/TheContact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;