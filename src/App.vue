<!-- src/App.vue -->
<template>
  <v-app>
    <div class="bg-logo w-100 position-fixed top-0">
      <v-img :src="logo" max-width="150" max-height="100" contain />
    </div>

    <v-app-bar app :style="{ left: drawerWidth + 'px' }" clipped-left color="white" elevation="1">
      <div class="ml-6" @click="toggleDrawerWidth">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6.875 3.75V16.25H3.125C2.95924 16.25 2.80027 16.1842 2.68306 16.0669C2.56585 15.9497 2.5 15.7908 2.5 15.625V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H6.875Z" fill="black" fill-opacity="0.04"/>
          <path d="M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM3.125 11.875H4.375C4.54076 11.875 4.69973 11.8092 4.81694 11.6919C4.93415 11.5747 5 11.4158 5 11.25C5 11.0842 4.93415 10.9253 4.81694 10.8081C4.69973 10.6908 4.54076 10.625 4.375 10.625H3.125V9.375H4.375C4.54076 9.375 4.69973 9.30915 4.81694 9.19194C4.93415 9.07473 5 8.91576 5 8.75C5 8.58424 4.93415 8.42527 4.81694 8.30806C4.69973 8.19085 4.54076 8.125 4.375 8.125H3.125V6.875H4.375C4.54076 6.875 4.69973 6.80915 4.81694 6.69194C4.93415 6.57473 5 6.41576 5 6.25C5 6.08424 4.93415 5.92527 4.81694 5.80806C4.69973 5.69085 4.54076 5.625 4.375 5.625H3.125V4.375H6.25V15.625H3.125V11.875ZM16.875 15.625H7.5V4.375H16.875V15.625Z" fill="black"/>
        </svg>
      </div>

      <BreadCrumb />
    </v-app-bar>

    <v-main :style="{ paddingLeft: drawerWidth + 'px' }">
      <Sidebar :width="drawerWidth" v-model:drawer="drawer" />
      <v-container fluid>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>

    <v-footer app>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Advanced Controls</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import logo from "@/assets/logo.png";

export default {
  name: "App",
  data() {
    return {
      logo,
      drawer: true,
      drawerWidth: 56
    };
  },
  methods: {
    toggleDrawerWidth() {
      this.drawerWidth = this.drawerWidth === 56 ? 280 : 56; 
    }
  },
  components: {
    Sidebar,
    BreadCrumb
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.primary-bg {
  background-color: #673AB7 !important;
  color: white !important;
}

.bg-logo {
  z-index: 1000;
}
</style>