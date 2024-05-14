<template>
  <div class="centered-component">
    <input v-model="email" placeholder="Enter your email" />
    <router-link to="/selection">
      <button @click="login">Login</button>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router"; // Import useRoute hook from vue-router

import { useUsersStore } from "../stores/UsersStore"; // Import the Pinia store
const email = ref("");
const usersStore = useUsersStore();
const login = () => {
  usersStore.updateMailAddress(email);
};
</script>
