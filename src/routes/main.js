import { createRouter, createWebHistory } from 'vue-router'
import Candidates from '../views/Candidates'
import PoliticalParties from '../views/PoliticalParties'
import Reports from '../views/Resports'
import Results from '../views/Results'
import VotingTables from '../views/VotingTables'

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
        path: '/votingTables/',
        children: [
            {
                path: '',
                component: () => import(VotingTables + 'VotingTables.vue')
            },
            {
                path: 'votingTable-add/:_id',
                name: 'votingTable-add',
                component: () => import(VotingTables,'VotingTable.vue')
            },
            {
                path: 'votingTable-detail/:_id',
                name: 'votingTable-detail',
                component: () => import(VotingTables,'VotingTableDetail.vue')
            }
        ]
    },
    {
        path: '/candidates/',
        children: [
            {
                path: '',
                component: () => import(Candidates,'Candidates.vue')
            },
            {
                path: 'candidate-add/:_id',
                name: 'candidate-add',
                component: () => import(Candidates,'Candidate.vue')
            },
            {
                path: 'candidate-detail/:_id',
                name: 'candidate-detail',
                component: () => import(Candidates,'CandidateDetail.vue')
            }
        ]
    },
    {
        path: '/politicalParties/',
        children: [
            {
                path: '',
                component: () => import(PoliticalParties,'PoliticalParties.vue')
            },
            {
                path: 'politicalParty-add/:_id',
                name: 'politicalParty-add',
                component: () => import(PoliticalParties,'PoliticalParty.vue')
            },
            {
                path: 'politicalParty-detail/:_id',
                name: 'politicalParty-detail',
                component: () => import(PoliticalParties,'PoliticalPartyDetail.vue')
            }
        ]
    },
    {
        path: '/results/',
        children: [
            {
                path: '',
                component: () => import(Results,'Results.vue')
            },
            {
                path: 'result-add/:_id',
                name: 'result-add',
                component: () => import(Results,'Result.vue')
            },
            {
                path: 'result-detail/:_id',
                name: 'result-detail',
                component: () => import(Results,'ResultDetail.vue')
            }
        ]
    },
    {
        path: '/reports/',
        children: [
            {
                path: 'percentage',
                component: () => import(Reports,'Percentage.vue')
            },
            {
                path: 'politicalParties',
                component: () => import(Reports,'PoliticalParties.vue')
            },
            {
                path: 'votingParties',
                component: () => import(Reports,'VotingParties.vue')
            },
            {
                path: 'votes',
                component: () => import(Reports,'Votes.vue')
            },
     
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
