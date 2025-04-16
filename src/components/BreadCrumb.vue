<template>
    <v-app>
      <!-- <v-app-bar app clipped-left color="white" elevation="1"> -->
        <v-container class="d-flex align-center py-0">
          <!-- icon drawer -->
          <!-- <v-app-bar-nav-icon @click="$emit('update:drawer', !drawer)" /> -->

          
          <!-- Star icon -->
          <v-btn
            icon
            variant="text"
            size="small"
            class="mr-3"
          >
            <v-icon>mdi-star-outline</v-icon>
          </v-btn>
          
          <!-- Breadcrumbs text -->
         <v-breadcrumbs :items="items">
            <template v-slot:prepend>
            </template>
          </v-breadcrumbs>
  
          <v-spacer></v-spacer>
          
          <!-- Search field -->
          <v-text-field
  prepend-inner-icon="mdi-magnify"
  hide-details
  variant="outlined"
  density="compact"
  placeholder="Search..."
  class="max-width-200 mr-3"
  bg-color="grey-lighten-4"
>
  <template v-slot:append-inner>
    <span class="text-caption grey--text" style="color: #0000001A;">⌘/</span>
  </template>
</v-text-field>
          
          <!-- Right icons -->
          <v-btn
            icon
            variant="text"
            size="small"
            class="mr-2"
          >
            <v-icon>mdi-brightness-6</v-icon>
          </v-btn>
          
          <v-btn
            icon
            variant="text"
            size="small"
            class="mr-2"
          >
            <v-icon>mdi-history</v-icon>
          </v-btn>
          
          <v-btn
            icon
            variant="text"
            size="small"
          >
            <v-icon>mdi-bell-outline</v-icon>
             
          </v-btn>
        </v-container>
      <!-- </v-app-bar> -->
      
      <v-main>
        <!-- Content goes here -->
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
    props: {
    drawer: {
      type: Boolean,
      required: true
    }
    },
    emits: ['update:drawer'],
    data() {
      return {
        items: [
          {
            title: 'Dashboard',
            disabled: false,
            href: 'breadcrumbs_dashboard',
          },
          {
            title: 'Link 1',
            disabled: false,
            href: 'breadcrumbs_link_1',
          },
          {
            title: 'Link 2',
            disabled: true,
            href: 'breadcrumbs_link_2',
          },
        ]
      }
    }
  }
  </script>
  
  <style>
  .max-width-200 {
    max-width: 200px;
  }
  .v-text-field{
    color: #0000001A !important;
  }
  .v-text-field .v-field__outline {
    opacity: 0 !important;
  }
  
  .v-text-field .v-field--focused .v-field__outline {
    opacity: 0 !important;
    border: none !important;
  }
  
  .v-text-field .v-field__field {
    box-shadow: none !important;
  }
  
  .v-text-field .v-field--focused {
    box-shadow: none !important;
  }
  
  .v-text-field .v-field {
    box-shadow: none !important;
    border-color: transparent !important;
  }
  .v-text-field input:focus {
    outline: none !important;
  }
  .v-field--variant-outlined.v-field--focused .v-field__outline {
    opacity: 0 !important;
  }

/* Target the search icon */
.v-text-field .v-field__prepend-inner i.mdi-magnify {
  color: #0000001A !important;
}

/* Target the placeholder text */
.v-text-field input::placeholder {
  color: #0000001A !important;
  opacity: 1 !important;
}
  </style>
  