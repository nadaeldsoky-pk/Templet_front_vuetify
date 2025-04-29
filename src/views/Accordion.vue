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

