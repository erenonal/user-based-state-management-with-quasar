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
import FirstUserPage from "../screens/FirstUserPage.vue";
import SecondUserPage from "../screens/SecondUserPage.vue";
import ThirdUserPage from "../screens/ThirdUserPage.vue";
import FourthUserPage from "../screens/FourthUserPage.vue";
import { defineProps } from "vue";

const props = defineProps({
  label: String,
});
const user = "user4";

// Computed property to determine layout class based on user type
const userLayoutClass = () => {
  if (user === "user1" || user === "user3" || user === "user4") {
    return "two-column";
  } else {
    return "one-column";
  }
};
</script>

<style scoped></style>
