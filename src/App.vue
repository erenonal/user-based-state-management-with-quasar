<template>
  <div id="app">
    <div>
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Navbar from "./components/Navbar.vue";
import db from "./firebase/init.js";
import { collection, getDocs } from "firebase/firestore";
import router from "./router";

console.log(db);
const items = ref([]);
onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "components"));
    items.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(items.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style scoped></style>
