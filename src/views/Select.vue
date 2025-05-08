<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <!-- Single Select -->
      <v-col cols="12" md="6" class="pr-2">
        <v-select
          v-model="selectedColor"
          label="Select"
          variant="solo"
          menu-icon="mdi-chevron-down"
          color="#44225A"
          :menu-props="{
            contentClass: 'custom-select-menu',
            maxHeight: '200px'
          }"
          class="custom-select"
        >
          <template v-slot:prepend-item>
            <v-list density="compact" class="py-0"> 
              <v-list-item  
                v-for="(color, index) in colors" 
                :key="index" 
                @click="selectColor(color)"
                class="px-2 py-0 my-0"
                style="min-height: 36px;"
              >
                <template v-slot:prepend>
                  <v-checkbox 
                    :model-value="selectedColor === color"
                    color="#44225A"
                    density="compact"
                    class="mr-2"
                    hide-details
                  ></v-checkbox>
                </template>
                <v-list-item-title class="text-sm">{{ color }}</v-list-item-title>
              </v-list-item>
            </v-list> 
          </template>
        </v-select>
      </v-col>
      <!-- multiple Select -->
  
      <v-col cols="12" md="6" class="pl-2">
        <v-select
          v-model="selectedColors"
          :items="colors"
          label="Multiple Select"
          multiple
          variant="solo"
          menu-icon="mdi-chevron-down"
          color="#44225A"
          item-title="color"
          item-value="color"
          class="custom-select"
        >

          <template v-slot:selection></template>
        </v-select>
      </v-col>

      <!-- Disabled Select -->
      <v-col cols="12" md="6" class="pl-2">
        <v-select
          disabled
          label="Multiple Select"
          multiple
          variant="solo"
          menu-icon="mdi-chevron-down"
          color="#44225A"
          item-title="color"
          item-value="color"
          class="custom-select"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
export default {
  data() {
    return {
      colors: ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Black', 'Light'],
      selectedColors: [],
      selectedColor: null,
    };
  },
  methods: {
    selectColor(color) {
      this.selectedColor = this.selectedColor === color ? null : color;
    },
  },
};
</script>

