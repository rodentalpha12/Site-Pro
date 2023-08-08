import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from './components/profil/Home.vue';
import Pro from './components/profil/Pro.vue';
import Projects from './components/profil/Projects.vue';
import Skill from './components/profil/Skill.vue';
import Training from './components/profil/Training.vue';
import Contact from './components/Contact.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: Home },
  { path: '/formation', name: 'training', component: Training },
  { path: '/projets', name: 'projects', component: Projects },
  { path: '/comptetence', name: 'skill', component: Skill },
  { path: '/experience', name: 'pro', component: Pro },
  { path: '/contact', name: 'contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
