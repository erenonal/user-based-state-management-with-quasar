<template>
  <q-toolbar>
    <q-toolbar-title>Simularge Case</q-toolbar-title>
    <q-btn-group>
      <router-link to="/login" class="q-btn"> Login </router-link>
      <router-link to="/selection" class="q-btn"> Selection </router-link>
      <router-link to="/calculation-page" class="q-btn"> Calculation Page </router-link>
    </q-btn-group>
  </q-toolbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
