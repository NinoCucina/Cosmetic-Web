<template>
    <v-navigation-drawer
    v-model="drawerValue"
    app
    color="#33FFFF"
    mini-variant
    mini-variant-width="110"
  >
    <router-link to="/">
        <v-avatar class="d-block text-center mx-auto mt-4 mb-10" size="80">
      <v-btn class="ma-2" outlined large fab color="white" >
        <v-icon x-large>mdi-home</v-icon>
      </v-btn>
    </v-avatar>
  </router-link>
    <router-link to="/adminPost">
        <v-avatar class="d-block text-center mx-auto mt-4 mb-10" size="80">
      <v-btn class="ma-2" outlined large fab color="white" >
        <v-icon x-large>mdi mdi-post</v-icon>
      </v-btn>
    </v-avatar>
    </router-link>
  </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    data() {
      return {   
    }
  }
}

  </script>
  
  <style>
