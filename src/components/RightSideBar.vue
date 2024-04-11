<template>
  <v-navigation-drawer
    v-model="drawer1"
    app

    mini-variant
    mini-variant-width="110"
    right
  >
    <router-link to="/adminPost">
      <v-avatar class="d-block text-center mx-auto mt-4 mb-10" size="80">
      <v-btn class="ma-2" outlined large fab color="#FFCC66"> 
        <v-icon class="mdi mdi-pen"> </v-icon>
      </v-btn>
    </v-avatar>
    </router-link>
    <div
      style="
        position: absolute;
        bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      "
    >
      <v-btn color="#FFCC66" class="changewith mb-3">
        <v-icon class="">mdi-bell</v-icon> </v-btn
      ><br />
      <v-badge bordered dot overlap>
        <v-btn color="#FFCC66" class="changewith">
          <v-icon class="">mdi mdi-message-outline</v-icon>
        </v-btn>
      </v-badge>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    drawer1: null,
  }),
};
</script>

<style>
.v-btn:not(.v-btn--round).v-size--default.changewith {
  height: 45px !important;
  min-width: 30px !important;
  padding: 0 12px;
}
.top {
  margin-top: 150px;
}
</style>
