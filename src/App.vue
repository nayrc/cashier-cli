<template>
  <div
    id="nav"
    class="d-flex flex-column justify-content-center align-items-center"
  >
    <router-link to="/" class="link my-2">Home</router-link>
    <router-link to="/Items" class="link my-2">Items</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss"></style>
