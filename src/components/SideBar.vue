<template>
  <v-navigation-drawer
    v-model="drawerValue"
    app
    mini-variant
    mini-variant-width="110"
  >
    <v-card  class="rounded-xl mx-4 py-10">
      <v-list flat >
        <v-list-item-group v-model="selectedItem">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            active-class="border"
          >
            <v-list-item-content>
              <v-icon
                v-text="item.icon"  
                :color="selectedItem === i ? 'white' : 'grey lighten-1'"
              ></v-icon>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
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
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 0,
      items: [
        { icon: "mdi-home-outline" },
        { icon: "mdi-store-outline" },
        { icon: "mdi-calendar-check-outline" },
        { icon: "mdi-apps" },
      ],
    };
  },
  props: ["drawer"],
  computed: {
    drawerComputed: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$emit("update:drawer", value);
      },
    },
  },
  watch: {
    drawer(newValue) {
      this.drawerValue = newValue;
    },
    drawerValue(newValue) {
      this.drawerComputed = newValue;
    },
  },
};
</script>

<style>
.border {
  margin: 0px 8px;
  background: #FFCCCC;
  border-radius: 15px;
  text-decoration: none;
  width: 60px;
  height: 60px;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
}
.v-list-item__content {
  padding: 20px 0 !important;
}
.image {
  border: 1px solid white;
}
</style>
