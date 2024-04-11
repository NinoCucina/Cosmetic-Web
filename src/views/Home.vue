<template>
  <v-app >
    <SideBar :drawer="drawer" />
    <RightSideBar />
    <v-container>
      <v-toolbar flat color="rgba(0,0,0,0)">
        <v-btn
          icon
          
          class="d-lg-none d-xl-flex"
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-text-field
          label="Tìm kiếm "
          class="pt-5 d-none d-sm-flex"
          filled
          prepend-inner-icon="mdi-magnify"
          solo
          background-color="transparent"
          rounded
          outlined
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-toolbar>
      <h1>Beauty Room</h1>
      <p>
        Ai cũng xứng đáng được xinh đẹp
      </p>
      <v-app-bar  class="">
        <v-tabs color="#FFCC66">
          <v-tabs-slider color="#FFCC66"></v-tabs-slider>
          <v-tab class="withoutupercase" color = "black">Tất cả mục</v-tab>
          <v-tab class="withoutupercase">Da</v-tab>
          <v-tab class="withoutupercase">Tóc</v-tab>
          <v-tab class="withoutupercase">Móng</v-tab>
          <v-tab class="withoutupercase">Mặt</v-tab>
          <v-tab class="withoutupercase">Cơ thể</v-tab>
          <v-tab class="withoutupercase">...</v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
        <v-btn black text class="d-none d-sm-flex">
          <v-icon left>mdi-magnify</v-icon>
          Tìm kiếm
        </v-btn>
        <v-btn rounded color="white" class="black--text">
          Danh sách
          <v-icon right>mdi-format-list-bulleted</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>
      </v-app-bar>
      <br>
      <v-row class="mt-n14">
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(LD, i) in LD"
          :key="i"
        >
          <v-card
            class="mx-auto my-12 rounded-xl"
            max-width="374"
            color="#FFFFCC"
          >
            <v-img height="100" :src="LD.image"></v-img>
            <v-toolbar color="transparent" class="mt-n7" flat>
              <v-avatar color="white" rounded class="mr-2">
                <v-img :src="LD.pic" contain></v-img>
              </v-avatar>
              <v-spacer></v-spacer>
              <v-avatar color="black" rounded class="mr-2" dark>
                <div class="three">
                  <div class="four">
                    <span class="white--text caption">{{ LD.step }}</span>
                  </div>
                  <div class="five">
                    <span class="white--text caption">Bước</span>
                  </div>
                </div>
              </v-avatar>
            </v-toolbar>
            <v-card-title class="black--text caption">{{
              LD.id
            }}</v-card-title>
            <v-card-text class="black--text text-grey-darken-1 mt-n2">{{
              LD.marque
            }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import RightSideBar from "../components/RightSideBar.vue";
import SideBar from "../components/SideBar";

export default {
  name: "HomeView",
  data: () => ({
    selection: 1,
    drawer: true,
    LD: [
      {
        image: "nền da mặt.jpg",
        pic: "da-matong.jpg",
        step: "2",
        id: "ID: 1",
        marque: "Cách làm đẹp da mặt bằng mật ong",
      },
      
    ],
    
  }),
  components: {
    SideBar,
    RightSideBar,
  },
  methods: {},
};
</script>
<style scoped>
.v-tab.withoutupercase {
  text-transform: none !important;
}
.v-tabs {
  width: 50% !important;
}
.v-btn.withoutupercase {
  text-transform: none !important;
}


.three {
  width: 50px;
  height: 50px;
}

.four {
  width: 50px;
  height: 25px;
  background: black;
}
.five {
  width: 50px;
  height: 25px;
  background: #042a0f;
}
.six {
  width: 50px;
  height: 25px;
  background: #2c2107;
}
</style>
