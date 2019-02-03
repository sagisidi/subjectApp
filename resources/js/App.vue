<template>
  <div id="app">
    <div class="container">
    <Navbar/>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "app",
  components: {
    Navbar
  },

};
</script>


