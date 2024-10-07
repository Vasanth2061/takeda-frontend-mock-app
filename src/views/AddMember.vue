<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Add Member</h1>
    <form @submit.prevent="addMember" class="space-y-4">
      <div class="form-group">
        <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
        <input type="text" v-model="member.name" id="name" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="dateOfBirth" class="block text-sm font-medium text-gray-700">Date of Birth:</label>
        <input type="date" v-model="member.dateOfBirth" id="dateOfBirth" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone Number:</label>
        <input type="text" v-model="member.phoneNumber" id="phoneNumber" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="streetAddress" class="block text-sm font-medium text-gray-700">Street Address:</label>
        <input type="text" v-model="member.streetAddress" id="streetAddress" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="city" class="block text-sm font-medium text-gray-700">City:</label>
        <input type="text" v-model="member.city" id="city" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="state" class="block text-sm font-medium text-gray-700">State:</label>
        <input type="text" v-model="member.state" id="state" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="pinCode" class="block text-sm font-medium text-gray-700">Pin Code:</label>
        <input type="text" v-model="member.pinCode" id="pinCode" required class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="form-group">
        <label for="backGround" class="block text-sm font-medium text-gray-700">Background:</label>
        <textarea v-model="member.backGround" id="backGround" class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
      </div>
      <div class="form-group">
        <label for="univEducation" class="block text-sm font-medium text-gray-700">University Education:</label>
        <input type="text" v-model="member.univEducation" id="univEducation" class="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
const API_URL = "https://localhost:7019/";

export default {
  name: 'AddMember',
  data() {
    return {
      member: {
        name: '',
        dateOfBirth: '',
        phoneNumber: '',
        streetAddress: '',
        city: '',
        state: '',
        pinCode: '',
        backGround: '',
        univEducation: '',
      },
    };
  },
  methods: {
    async addMember() {
      try {
        await axios.post(`${API_URL}api/Members`, this.member);
        this.$router.push('/members');
      } catch (error) {
        console.error('Error adding member:', error);
      }
    },
  },
};
</script>

