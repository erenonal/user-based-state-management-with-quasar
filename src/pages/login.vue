<template>
  <div>
    <input v-model="email" placeholder="Enter your email" />
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUsersStore } from "../stores/UsersStore"; // Import the Pinia store
const email = ref("");
const usersStore = useUsersStore();
const login = () => {
  usersStore.updateMailAddress(email);
  console.log(email.value)
  // Add your login logic here (e.g., redirect to the dashboard)
};
</script>
