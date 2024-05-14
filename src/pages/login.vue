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
import { useUsersStore } from "../stores/UsersStore";
import { setCookie, getCookie } from "../stores/cookie";
const email = ref(""); // Initialize the ref with an empty string
const usersStore = useUsersStore();
const login = () => {
  const domain = email.value.split("@")[0];
  usersStore.updateMailAddress(email.value);
  setCookie("mailAddress", domain);
};
</script>
