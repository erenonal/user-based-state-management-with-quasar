<template>
  <q-toolbar>
    <q-toolbar-title>Simularge Case</q-toolbar-title>
    <q-btn-group>
      <router-link to="/login" class="q-btn"> Login </router-link>
      <router-link to="/selection" class="q-btn"> Selection </router-link>
      <router-link to="/ui-wizard" class="q-btn"> UI Wizard </router-link>
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
