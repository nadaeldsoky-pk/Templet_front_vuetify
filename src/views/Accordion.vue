<template>
  <v-container>
    <v-expansion-panels multiple elevation="0" class="accordion">
      <v-expansion-panel
        v-for="(item, index) in panels"
        :key="index"
        class="accordion-item"
        :class="{ 'no-border': index === panels.length - 1 }"
      >
        <v-expansion-panel-title class="accordion-title">
          Accordion title
        </v-expansion-panel-title>
        <v-expansion-panel-text class="accordion-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      panels: [1, 2, 3]
    };
  }
};
</script>

<style scoped>
.v-expansion-panel-text__wrapper {
    padding: 0px !important;
}
.v-expansion-panels{
background-color: var(--gray-100) !important;
width: 440px !important;
}
.accordion-item.no-border {
  border-bottom: none;
}
.v-expansion-panel-title{
height: 40px !important;
font-size: 14px !important;
font-weight: 500px !important;
color: var(--light-gray-800) !important;
border-bottom: 1px solid var(--light-gray-200)!important; 
box-shadow: var(--light-gray-200) !important;
}
.v-expansion-panel-text{
  font-size: 14px !important;
  font-weight: 400 !important;
  color: var(--gray-800);
  border-left: 0px;
  background-color: var(--gray-100);
}
.v-expansion-panel-title__overlay {
    background-color: transparent !important;
}
.v-expansion-panel-title {
    border-bottom: 1px solid transparent!important;
    box-shadow: transparent !important;
}
.accordion {
  background-color: var( --gray-100);
  width: 440px;
  border-radius: 4px;
}
.accordion-item {
  background-color: var( --gray-100);
  border-bottom: 1px solid var(--white); 
}
.accordion-item.no-border {
  border-bottom: none;
}
.accordion-title {
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: var(--light-gray-800);
  padding: 0 16px;
}
.accordion-text {
  font-size: 14px;
  font-weight: 400;
  color: var( --gray-800);
  background-color: var( --gray-100);
  padding: 8px 16px;
}
.v-expansion-panel-title__overlay {
  background-color: transparent !important;
}
</style>
