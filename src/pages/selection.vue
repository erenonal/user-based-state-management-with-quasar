<template>
  <div class="selection-grid">
    <FirstUserPage label="GO LAYOUT 1"></FirstUserPage>
    <SecondUserPage label="GO LAYOUT 2"></SecondUserPage>
    <ThirdUserPage label="GO LAYOUT 3"></ThirdUserPage>
    <FourthUserPage label="GO PRO LAYOUT"></FourthUserPage>
  </div>
</template>
<script setup>
import { ref } from "vue";
import FirstUserPage from "../components/screens/FirstUserPage.vue";
import SecondUserPage from "../components/screens/SecondUserPage.vue";
import ThirdUserPage from "../components/screens/ThirdUserPage.vue";
import FourthUserPage from "../components/screens/FourthUserPage.vue";
</script>
