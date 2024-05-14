<template>
    <Navbar />
    <router-view></router-view>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Navbar from "./components/Navbar.vue";
import db from "./firebase/init.js";
import { collection, getDocs } from "firebase/firestore";
import router from "./router";

const items = ref([]);
onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "components"));
    items.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style scoped></style>
