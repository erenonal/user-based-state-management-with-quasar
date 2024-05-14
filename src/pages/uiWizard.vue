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
const usersStore = useUsersStore();
const user = usersStore.userType;

const userLayoutClass = () => {
  if (user === "user2") {
    return "two-column";
  } else {
    return "one-column";
  }
};
// usersStore.updateMailAddress("new@example.com");

console.log(usersStore.userType);
const props = defineProps({
  label: String,
});

</script>

<style scoped></style>
