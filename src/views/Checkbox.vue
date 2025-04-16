<template>
  <v-container>
    <v-checkbox color="#44225A"  class="custom-checkbox" v-model="checked1" label="Label"></v-checkbox>
    <v-checkbox color="#44225A" class="custom-checkbox"  v-model="checked2" label="Label"></v-checkbox>
    <v-checkbox color="#44225A" class="custom-checkbox" v-model="checked3" label="Label" disabled></v-checkbox>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: false,
      checked2: false,
    };
  }
};
</script>