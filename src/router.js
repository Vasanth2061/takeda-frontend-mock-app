import { createRouter, createWebHistory } from 'vue-router';
import TrainingActivitiesPage from './views/TrainingActivitiesPage.vue';
import TrainingActivityDetail from './views/TrainingActivityDetail.vue';
import EditTrainingActivity from './views/EditTrainingActivity.vue';
import ColleaguesList from './views/ColleaguesList.vue';
import ColleagueDetail from './views/ColleagueDetail.vue';
import EditColleague from './views/EditColleague.vue';
import AddColleague from './views/AddColleague.vue';
import TeamMembersList from './views/TeamMembersList.vue';
import TeamMemberDetail from './views/TeamMemberDetail.vue';
import EditTeamMember from './views/EditTeamMember.vue';
import AddTeamMember from './views/AddTeamMember.vue';
import AddMember from './views/AddMember.vue';
import EditMember from './views/EditMember.vue';
import MembersAndTechnologies from './views/MembersAndTechnologies.vue';
import AddPersonalImage from './views/AddPersonalImage.vue';
import EditPersonalImage from './views/EditPersonalImage.vue';
import AddTechnology from './views/AddTechnology.vue';
import EditTechnology from './views/EditTechnology.vue';
import AddHobby from './views/AddHobby.vue';
import EditHobby from './views/EditHobby.vue';
import AddTrainingActivityPage from '@/views/AddTrainingActivityPage.vue';

const routes = [
  { path: '/training-activities', component: TrainingActivitiesPage },
  { path: '/training-activities/:id', component: TrainingActivityDetail },
  { path: '/training-activities/edit/:id', component: EditTrainingActivity },
  { path: '/colleagues', component: ColleaguesList },
  { path: '/colleagues/add', component: AddColleague },
  { path: '/colleagues/:id', component: ColleagueDetail },
  { path: '/colleagues/edit/:id', component: EditColleague },
  { path: '/team-members', component: TeamMembersList },
  { path: '/team-members/add', component: AddTeamMember },
  { path: '/team-members/:id', component: TeamMemberDetail },
  { path: '/team-members/edit/:id', component: EditTeamMember },
  { path: '/', component: MembersAndTechnologies },
  { path: '/members/add', component: AddMember },
  { path: '/members/edit/:id', component: EditMember },
  { path: '/personal-images/add', component: AddPersonalImage },
  { path: '/personal-images/edit/:id', component: EditPersonalImage },
  { path: '/technologies/add', component: AddTechnology },
  { path: '/technologies/edit/:id', component: EditTechnology },
  { path: '/hobbies/add', component: AddHobby },
  { path: '/hobbies/edit/:id', component: EditHobby },
  { path: '/training-activities/add', component: AddTrainingActivityPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;