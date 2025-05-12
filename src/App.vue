<!-- src/App.vue -->
<template>
  <v-app>
    <Sidebar v-model:drawer="drawer" />
    <!-- <BreadCrumb  v-model:drawer="drawer" /> -->


    <v-app-bar app clipped-left color="white" elevation="1">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

    <BreadCrumb/>
    </v-app-bar>

    <v-main>
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

export default {
  name: "App",
  components: {
    Sidebar,
    BreadCrumb
  },
  data: () => ({
    drawer: true,
  }),
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
</style>
