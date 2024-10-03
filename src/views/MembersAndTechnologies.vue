<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Members, Technologies, and Hobbies</h1>
    <router-link to="/members/add" class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
      <i class="fas fa-plus mr-2"></i>Add Member
    </router-link>
    <div class="card bg-white shadow-md rounded-lg p-4 mb-4" v-for="member in members" :key="member.id">
      <table class="w-full">
        <tbody>
          <tr>
            <td class="font-semibold">Name</td>
            <td>{{ member.name }}</td>
          </tr>
          <tr>
            <td class="font-semibold">Date of Birth</td>
            <td>{{ member.dateOfBirth }}</td>
          </tr>
          <tr>
            <td class="font-semibold">Phone Number</td>
            <td>{{ member.phoneNumber }}</td>
          </tr>
          <tr>
            <td class="font-semibold">Address</td>
            <td>{{ member.streetAddress }}, {{ member.city }}, {{ member.state }}, {{ member.pinCode }}</td>
          </tr>
          <tr>
            <td class="font-semibold">Background</td>
            <td>{{ member.backGround }}</td>
          </tr>
          <tr>
            <td class="font-semibold">University Education</td>
            <td>{{ member.univEducation }}</td>
          </tr>
        </tbody>
      </table>
      <div class="actions flex gap-4 mt-4 justify-center">
        <router-link :to="`/members/edit/${member.id}`" class="btn bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          <i class="fas fa-pencil-alt mr-2"></i>Edit
        </router-link>
        <button @click="deleteMember(member.id)" class="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <i class="fas fa-trash mr-2"></i>Delete
        </button>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-4">Personal Images</h2>
      <router-link to="/personal-images/add" class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
        <i class="fas fa-plus mr-2"></i>Add Personal Image
      </router-link>
      <div class="carousel-container">
        <button class="carousel-button prev" @click="prevSlide">‹</button>
        <div class="carousel" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div class="carousel-slide" v-for="image in personalImages" :key="image.id">
            <div class="card bg-white shadow-md rounded-lg p-4 mb-4">
              <img :src="`https://localhost:7019/${image.imageURL}`" alt="Personal Image" v-if="image.imageURL" class="w-full h-48 object-contain rounded-md shadow-md mt-2 mb-4">
              <div class="actions flex gap-4 mt-4 justify-center">
                <router-link :to="`/personal-images/edit/${image.id}`" class="btn bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  <i class="fas fa-pencil-alt mr-2"></i>
                </router-link>
                <button @click="deletePersonalImage(image.id)" class="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  <i class="fas fa-trash mr-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-button next" @click="nextSlide">›</button>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-4">Technologies</h2>
      <router-link to="/technologies/add" class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
        <i class="fas fa-plus mr-2"></i>Add Technology
      </router-link>
      <table class="w-full bg-white shadow-md rounded-lg mb-4">
        <thead>
          <tr>
            <th class="p-4 text-left">Name</th>
            <th class="p-4 text-left">Proficiency</th>
            <th class="p-4 text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tech in technologies" :key="tech.id">
            <td class="p-4">{{ tech.name }}</td>
            <td class="p-4"><span v-html="generateStars(tech.proficiency)"></span></td>
            <td class="p-4">
              <div class="actions flex gap-4 justify-center">
                <router-link :to="`/technologies/edit/${tech.id}`" class="btn bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  <i class="fas fa-pencil-alt mr-2"></i>
                </router-link>
                <button @click="deleteTechnology(tech.id)" class="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  <i class="fas fa-trash mr-2"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-4">Hobbies</h2>
      <router-link to="/hobbies/add" class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
        <i class="fas fa-plus mr-2"></i>Add Hobby
      </router-link>
      <table class="w-full bg-white shadow-md rounded-lg mb-4">
        <thead>
          <tr>
            <th class="p-4 text-left">Name</th>
            <th class="p-4 text-left">Description</th>
            <th class="p-4 text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hobby in hobbies" :key="hobby.id">
            <td class="p-4">{{ hobby.name }}</td>
            <td class="p-4">{{ hobby.description }}</td>
            <td class="p-4">
              <div class="actions flex gap-4 justify-center">
                <router-link :to="`/hobbies/edit/${hobby.id}`" class="btn bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  <i class="fas fa-pencil-alt mr-2"></i>
                </router-link>
                <button @click="deleteHobby(hobby.id)" class="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  <i class="fas fa-trash mr-2"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = "https://localhost:7019/";

export default {
  name: 'MembersAndTechnologies',
  data() {
    return {
      members: [],
      personalImages: [],
      technologies: [],
      hobbies: [],
      currentSlide: 0,
    };
  },
  created() {
    this.fetchMembers();
    this.fetchPersonalImages();
    this.fetchTechnologies();
    this.fetchHobbies();
  },
  methods: {
    async fetchMembers() {
      try {
        const response = await axios.get(`${API_URL}api/Members/GetAll`);
        this.members = response.data;
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    },
    async fetchPersonalImages() {
      try {
        const response = await axios.get(`${API_URL}api/PersonalImages/GetAll`);
        this.personalImages = response.data;
      } catch (error) {
        console.error('Error fetching personal images:', error);
      }
    },
    async fetchTechnologies() {
      try {
        const response = await axios.get(`${API_URL}api/Technologies/GetAll`);
        this.technologies = response.data;
      } catch (error) {
        console.error('Error fetching technologies:', error);
      }
    },
    async fetchHobbies() {
      try {
        const response = await axios.get(`${API_URL}api/Hobbies/GetAll`);
        this.hobbies = response.data;
      } catch (error) {
        console.error('Error fetching hobbies:', error);
      }
    },
    async deleteMember(id) {
      try {
        await axios.delete(`${API_URL}api/Members/${id}`);
        this.fetchMembers(); // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting member:', error);
      }
    },
    async deletePersonalImage(id) {
      try {
        await axios.delete(`${API_URL}api/PersonalImages/${id}`);
        this.fetchPersonalImages();
      } catch (error) {
        console.error('Error deleting personal image:', error);
      }
    },
    async deleteTechnology(id) {
      try {
        await axios.delete(`${API_URL}api/Technologies/${id}`);
        this.fetchTechnologies();
      } catch (error) {
        console.error('Error deleting technology:', error);
      }
    },
    async deleteHobby(id) {
      try {
        await axios.delete(`${API_URL}api/Hobbies/${id}`);
        this.fetchHobbies();
      } catch (error) {
        console.error('Error deleting hobby:', error);
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.personalImages.length - 1) {
        this.currentSlide++;
      }
    },
    generateStars(proficiency) {
      const fullStar = '<span class="text-yellow-500">&#9733;</span>';
      const emptyStar = '<span class="text-gray-300">&#9733;</span>';
     
      let stars = '';
      for (let i = 0; i < 5; i++) {
        stars += i < proficiency ? fullStar : emptyStar;
      }
      return stars;
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
}
.actions {
  display: flex;
  gap: 8px;
  justify-content: center; /* Center the buttons */
}
.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.carousel {
  display: flex;
  transition: transform 0.5s ease
}
.carousel-slide {
  min-width: 33.33%; /* Show 3 slides at a time */
  box-sizing: border-box;
}
.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}
.carousel-button.prev {
  left: 0;
}
.carousel-button.next {
  right: 0;
}
</style>