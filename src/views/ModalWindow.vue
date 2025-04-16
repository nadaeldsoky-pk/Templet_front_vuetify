<template>
    <v-container>
     
      <v-btn color="primary" @click="dialog1 = true" class="mr-2">Open Modal 1</v-btn>
  
     
      <v-btn color="primary" @click="dialog2 = true" class="mr-2">Open Modal 2</v-btn>
      <v-btn color="primary" @click="dialog3 = true" class="mr-2">Open Modal 3</v-btn>
      <v-btn color="primary" @click="dialog4 = true" class="mr-2">Open Modal 4</v-btn>
      <v-btn color="primary" @click="dialog5 = true" class="mr-2">Open Modal 5</v-btn>
  
     
      <v-dialog v-model="dialog1" max-width="500px" >
        <v-card class="card-modal">
          <v-card-title class="d-flex align-center">
            <v-icon  class="mr-2 modal-icon warning-icon">mdi-check-circle-outline</v-icon>
            <span class="modal-title">Modal Window 1</span>
          </v-card-title>
          <v-card-text class="modal-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </v-card-text>
          <v-card-actions class="d-flex justify-space-between">
            <v-btn  class="btn-cancel modal-btn-success " variant="elevated" @click="dialog1 = false">
              Cancel
            </v-btn>
            <v-btn class="btn-okay modal-btn-success-okay" variant="elevated" @click="dialog1 = false">Okay</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  
      <v-dialog v-model="dialog2" max-width="500px" >
        <v-card class="card-modal">
          <v-card-title class="d-flex justify-space-between">
            <span class="modal-title modal-title-main">Modal Window 2</span>
              <v-icon class="modal-icon main-icon">mdi-close</v-icon>
          </v-card-title>
          <v-card-text class="modal-text-main">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </v-card-text>
          <v-card-actions class="d-flex justify-space-between">
            <v-btn  class="btn-cancel modal-btn-main-cance " variant="elevated" @click="dialog2 = false">
              Cancel
            </v-btn>
            <v-btn class="btn-okay modal-btn-main-okay" variant="elevated" @click="dialog2 = false">Okay</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog3" max-width="500px" >
        <v-card class="card-modal">
          <v-card-title class="d-flex  align-center">
              <v-icon  class="mr-2 modal-icon danger-icon">mdi-alert-outline</v-icon>
      <span class="modal-title">Modal Window</span>
          </v-card-title>
          <v-card-text class="modal-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </v-card-text>
          <v-card-actions class="d-flex justify-space-between">
            <v-btn  class="btn-cancel modal-btn-danger-cancel " variant="elevated" @click="dialog3 = false">
              Cancel
            </v-btn>
            <v-btn class="btn-okay modal-btn-danger-okay" variant="elevated" @click="dialog3 = false">Okay</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog4" max-width="500px" >
        <v-card class="card-modal">
          <v-card-title class="d-flex  align-center">
            <v-icon  class="mr-2 modal-icon warning-icon">mdi-alert-outline</v-icon>
            <span class="text-h6 font-weight-bold">Modal Window</span>
          </v-card-title>
          <v-card-text class="modal-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </v-card-text>
          <v-card-actions class="d-flex justify-space-between">
            <v-btn  class="btn-cancel modal-btn-warning-cancel " variant="elevated" @click="dialog4 = false">
              Cancel
            </v-btn>
            <v-btn class="btn-okay modal-btn-warning-okay" variant="elevated" @click="dialog4 = false">Okay</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog5" max-width="500px" >
        <v-card class="card-modal">
          <v-card-title class="d-flex  align-center">
            <v-icon :style="{color:'#0647A9'}" class="mr-2 modal-icon">mdi-information-outline</v-icon>
            <span class="text-h6 font-weight-bold">Modal Window</span>
          </v-card-title>
          <v-card-text class="modal-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </v-card-text>
          <v-card-actions class="d-flex justify-space-between">
            <v-btn  class="btn-cancel  ":style="{ backgroundColor: '#e1effe',color:'#0647A9'}" variant="elevated" @click="dialog5 = false">
              Cancel
            </v-btn>
            <v-btn class="btn-okay " :style="{ backgroundColor: '#0647A9',color:'#ffffff'}" variant="elevated" @click="dialog5 = false">Okay</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const dialog1 = ref(false);
  const dialog2 = ref(false);
  const dialog3 = ref(false);
  const dialog4 = ref(false);
  const dialog5 = ref(false);
  </script>
