<template>
  <div :class="userLayoutClass">
    <div v-if="user === 'user1'" class="two-column-container">
      <FirstUserPage></FirstUserPage>
    </div>
    <div v-else-if="user === 'user2'" class="one-column-container">
      <SecondUserPage></SecondUserPage>
    </div>
    <div v-else-if="user === 'user3'" class="two-column-container">
      <ThirdUserPage></ThirdUserPage>
    </div>
    <div v-else-if="user === 'user4'" class="two-column-container">
      <FourthUserPage></FourthUserPage>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FirstUserPage from "../components/screens/FirstUserPage.vue";
import SecondUserPage from "../components/screens/SecondUserPage.vue";
import ThirdUserPage from "../components/screens/ThirdUserPage.vue";
import FourthUserPage from "../components/screens/FourthUserPage.vue";
import { defineProps } from "vue";
import { useUsersStore } from "../stores/UsersStore.js";
import {setCookie, getCookie} from '../stores/cookie'

const usersStore = useUsersStore();
const user = getCookie("mailAddress");
const userLayoutClass = () => {
  if (user === "user2") {
    return "two-column";
  } else {
    return "one-column";
  }
};

const props = defineProps({
  label: String,
});


</script>

<style scoped></style>
