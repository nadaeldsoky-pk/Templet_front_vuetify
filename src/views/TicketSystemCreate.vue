<template>
    <v-container class="new-ticket-container">
      <div class="d-flex justify-space-between align-center mb-6">
        <h2 class="text-h5 font-weight-medium">Add New Ticket</h2>
        <v-text-field
          density="compact"
          variant="outlined"
          placeholder="Search by name, department, Issue ID or any related keywords"
          prepend-inner-icon="mdi-magnify"
          hide-details
          class="search-field"
          style="max-width: 400px;"
        ></v-text-field>
      </div>
  
      <div class="mb-6">
        <h3 class="text-subtitle-1 font-weight-medium mb-4">Select Category</h3>
        <div class="d-flex flex-wrap gap-3">
          <v-card
            v-for="category in categories"
            :key="category.id"
            :color="selectedCategory === category.id ? category.color : ''"
            :class="[
              'category-card',
              'pa-4',
              selectedCategory === category.id ? 'selected-card' : ''
            ]"
            @click="selectCategory(category.id)"
            width="120"
            height="120"
            variant="outlined"
          >
            <div class="d-flex flex-column align-center justify-center h-100">
              <v-icon
                :color="selectedCategory === category.id ? 'white' : category.color"
                size="large"
                class="mb-2"
              >
                {{ category.icon }}
              </v-icon>
              <span :class="selectedCategory === category.id ? 'text-white' : ''">
                {{ category.name }}
              </span>
            </div>
          </v-card>
        </div>
      </div>
  
      <div v-if="selectedCategory && subcategories.length > 0">
        <h3 class="text-subtitle-1 font-weight-medium mb-4">Select Subcategory</h3>
        <div class="d-flex flex-wrap gap-3">
          <v-card
            v-for="subcategory in subcategories"
            :key="subcategory.id"
            :color="selectedSubcategory === subcategory.id ? subcategory.color : ''"
            :class="[
              'category-card',
              'pa-4',
              selectedSubcategory === subcategory.id ? 'selected-card' : ''
            ]"
            @click="selectSubcategory(subcategory.id)"
            width="120"
            height="140"
            variant="outlined"
          >
            <div class="d-flex flex-column align-center justify-center h-100">
              <v-icon
                :color="selectedSubcategory === subcategory.id ? 'white' : subcategory.color"
                size="large"
                class="mb-2"
              >
                {{ subcategory.icon }}
              </v-icon>
              <span 
                :class="selectedSubcategory === subcategory.id ? 'text-white' : ''"
                class="text-center mb-1"
              >
                {{ subcategory.name }}
              </span>
              <span 
                :class="selectedSubcategory === subcategory.id ? 'text-white text-caption' : 'text-caption text-grey'"
                class="text-center" 
                style="font-size: 10px; line-height: 1.2;"
              >
                {{ subcategory.description }}
              </span>
            </div>
          </v-card>
        </div>
      </div>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCategory: 'it',
        selectedSubcategory: 'tech-support',
        categories: [
          { id: 'it', name: 'IT', icon: 'mdi-laptop', color: 'deep-purple' },
          { id: 'hr', name: 'Human Resource', icon: 'mdi-account-group', color: 'deep-purple' },
          { id: 'facilities', name: 'Facilities', icon: 'mdi-domain', color: 'deep-purple' }
        ],
        allSubcategories: {
          it: [
            { 
              id: 'tech-support', 
              name: 'Tech Support', 
              icon: 'mdi-desktop-classic',
              color: 'deep-purple',
              description: 'Ask for help with IT or other technology related issues'
            },
            { 
              id: 'equipment', 
              name: 'Request Equipment', 
              icon: 'mdi-desktop-tower-monitor',
              color: 'deep-purple',
              description: 'Request computer hardware, peripherals or other office equipment'
            }
          ],
          hr: [
            // HR subcategories would go here
          ],
          facilities: [
            // Facilities subcategories would go here
          ]
        }
      };
    },
    computed: {
      subcategories() {
        return this.allSubcategories[this.selectedCategory] || [];
      }
    },
    methods: {
      selectCategory(categoryId) {
        this.selectedCategory = categoryId;
        this.selectedSubcategory = null;
      },
      selectSubcategory(subcategoryId) {
        this.selectedSubcategory = subcategoryId;
      }
    }
  };
  </script>
  
  <style scoped>
  .new-ticket-container {
    max-width: 900px;
  }
  
  .category-card {
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 8px;
  }
  
  .category-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .selected-card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .gap-3 {
    gap: 12px;
  }
  </style>