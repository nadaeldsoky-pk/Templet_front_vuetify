<template>
  <v-container>
    <v-expansion-panels  multiple color="#ECECEC" elevation="0">
      <v-expansion-panel  v-for="(item, index) in panels" :key="index">
        <v-expansion-panel-title>
          Accordion title
        </v-expansion-panel-title>
        <v-expansion-panel-text >

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
.v-expansion-panels{
background-color: var(--gray-100) !important;
width: 440px !important;
padding: 8px 16px !important;
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
}

</style>
