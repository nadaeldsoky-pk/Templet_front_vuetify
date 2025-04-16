<template>
  <v-container>
    <v-radio-group v-model="selectedColor" row>
      <v-radio color="#44225A" class="custom-radio"  label="Label" value="Label1"></v-radio>
      <v-radio color="#44225A" class="custom-radio" label="Label" value="Label2"></v-radio>
      <v-radio color="#44225A" class="custom-radio" label="Label" value="Label2" disabled></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedColor: 'Label1' 
    };
  }
};
</script>
