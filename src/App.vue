<template>
  <div id="app">
    <nav class="p-4 bg-gray-800 text-white">
      <router-link to="/" class="mr-4">Home</router-link>
      <router-link to="/training-activities" class="mr-4">Training Activities</router-link>
      <router-link to="/colleagues" class="mr-4">People Met</router-link>
      <router-link to="/team-members" class="mr-4">Team Members</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Add your styles here */
</style>