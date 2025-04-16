<template>
  <v-container>
    <v-tabs v-model="tab" class="custom-tabs">
      <v-tab class="text-capitalize" value="tab1">tab1</v-tab>
      <v-tab class="text-capitalize" value="tab2">tab2 </v-tab>
      <v-tab class="text-capitalize" value="tab3" disabled>tab3 </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="tab1">
        <v-card flat>
          <v-card-text>  tab1</v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item value="tab2">
        <v-card flat>
          <v-card-text>tab2  </v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item value="tab3">
        <v-card flat>
          <v-card-text>tab3</v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: "tab1",
    };
  },
};
</script>

<style scoped>
/* Remove all underline and bottom border effects */
.v-tabs{
  border-bottom: none !important;
}
.v-tabs-slider{
  display: none !important;
}

.v-tab{
  text-decoration: none !important;
  background: var(--white) !important;
  border-radius: 5px;
  padding: 10px 15px;
  border-bottom: none !important;
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-800);
}
.v-tab::before,
.v-tab::after{
  display: none !important;
}
.v-tab.v-tab--selected{
  border-bottom: none !important;
  text-decoration: none !important;
  color: var(--hover-purple) !important;
  font-weight: bold;
}
.v-slide-group__content {
  border-bottom: none !important;
}
.v-tab:hover{
  color: var(--hover-purple) !important;
  background-color: var(--white) !important;
  text-decoration: none !important;
}
.v-tab[disabled]{
  color: var(--gray-500) !important;
  opacity: 0.5;
  pointer-events: none;
  text-decoration: none !important;
}
</style>