import { createRouter, createWebHistory } from 'vue-router'
import Candidates from '../views/Candidates/Candidates.vue'
import Candidate from '../views/Candidates/Candidate.vue'
import CandidateDetail from '../views/Candidates/CandidateDetail.vue'


import PoliticalParties from '../views/PoliticalParties/PoliticalParties.vue'
import PoliticalParty from '../views/PoliticalParties/PoliticalParty.vue'
import PoliticalPartyDetail from '../views/PoliticalParties/PoliticalPartyDetail.vue'

import ReportPercentage from '../views/Reports/Percentage.vue'
import ReportVotingTables from '../views/Reports/VotingTables.vue'
import ReportPoliticalParties from '../views/Reports/PoliticalParties.vue'
import ReportVotes from '../views/Reports/Votes.vue'


import Results from '../views/Results/Results.vue'
import Result from '../views/Results/Result.vue'
import ResultDetail from '../views/Results/ResultDetail.vue'

import VotingTables from '../views/VotingTables/VotingTables.vue'
import VotingTable from '../views/VotingTables/VotingTable.vue'
import VotingTableDetail from '../views/VotingTables/VotingTableDetail.vue'

const routes = [
    {
        path: '/',
        name: 'LogIn',
        component: () => import('../views/LogIn.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
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
                component: VotingTables
            },
            {
                path: 'votingTable-add/:_id',
                name: 'votingTable-add',
                component: VotingTable
            },
            {
                path: 'votingTable-detail/:_id',
                name: 'votingTable-detail',
                component: VotingTableDetail
            }
        ]
    },
    {
        path: '/candidates/',
        children: [
            {
                path: '',
                component: Candidates
            },
            {
                path: 'candidate-add/:_id',
                name: 'candidate-add',
                component: () => Candidate
            },
            {
                path: 'candidate-detail/:_id',
                name: 'candidate-detail',
                component: () => CandidateDetail
            }
        ]
    },
    {
        path: '/politicalParties/',
        children: [
            {
                path: '',
                component:PoliticalParties
            },
            {
                path: 'politicalParty-add/:_id',
                name: 'politicalParty-add',
                component: PoliticalParty
            },
            {
                path: 'politicalParty-detail/:_id',
                name: 'politicalParty-detail',
                component: PoliticalPartyDetail
            }
        ]
    },
    {
        path: '/results/',
        children: [
            {
                path: '',
                component: Results
            },
            {
                path: 'result-add/:_id',
                name: 'result-add',
                component: Result
            },
            {
                path: 'result-detail/:_id',
                name: 'result-detail',
                component: ResultDetail
            }
        ]
    },
    {
        path: '/reports/',
        children: [
            {
                path: 'percentage',
                component: ReportPercentage
            },
            {
                path: 'politicalParties',
                component:ReportPoliticalParties
            },
            {
                path: 'votingParties',
                component:ReportVotingTables
            },
            {
                path: 'votes',
                component:ReportVotes
            },
     
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
