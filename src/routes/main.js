import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/logIn',
    name: 'LogIn',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/votingTables',
    name: 'VotingTables',
    component: () => import('../views/VotingTables.vue')
  },
  {
    path: '/candidates',
    name: 'Candidates',
    component: () => import('../views/Candidates.vue')
  },
  {
    path: '/results',
    name: 'Results',
    component: () => import('../views/Results.vue')
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('../views/Reports.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
