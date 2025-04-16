<template>
  <div class="d-flex flex-column align-center">
    <h3 class="mb-4">Menu Button States</h3>
    <div>
      <!-- First row of menus -->
      <div v-for="(menu, index) in menus.slice(0,4)" :key="index" class="menu-state-wrapper">
        <v-menu 
          v-model="menu.isOpen" 
          transition="slide-y-transition" 
          :disabled="menu.state === 'click'"
        >
          <template v-slot:activator="{ props, isActive }">
            <v-btn 
              class="position-relative menu-btn"
              :width="menu.width"
              height="36"
              v-bind="props"
              :disabled="menu.state === 'click'"
              :class="{ 
                'default-state': menu.state === 'default',
                'hover-state': menu.state === 'hover',
                'focus-state': menu.state === 'focus',
                'disabled-state': menu.state === 'click',
                'active-state': menu.state === 'active' || isActive
              }"
              @mouseenter="() => handleMouseEnter(index)"
              @mouseleave="() => handleMouseLeave(index)"
              @focus="() => menu.state = 'focus'"
              @click="() => handleClick(index, isActive)"
              @blur="() => handleBlur(index)"
            >
              <div class="d-flex align-center">
                <v-icon v-if="menu.hasIcon" size="22" class="mr-2" :class="{
                  'plane-icon-hover': menu.state === 'hover' || menu.state === 'focus'
                }">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                      d="M22,12L13,7V3.5C13,3.22 12.78,3 12.5,3H11.5C11.22,3 11,3.22 11,3.5V7L2,12V13L11,11V16L9,17V18L12,19L15,18V17L13,16V11L22,13V12Z" />
                  </svg>
                </v-icon>
                <span>Menu item</span>
              </div>
              
              <v-icon class="chevron-icon">
                {{ isActive ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
              </v-icon>
            </v-btn>
          </template>
          
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="i"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div>
      <!-- Second row of menus -->
      <div v-for="(menu, index) in menus.slice(4,8)" :key="index + 4" class="menu-state-wrapper">
        <v-menu 
          v-model="menu.isOpen" 
          transition="slide-y-transition" 
          :disabled="menu.state === 'click'"
        >
          <template v-slot:activator="{ props, isActive }">
            <v-btn
            
              class="position-relative custom-btn"
              :width="menu.width"
              height="36"
              v-bind="props"
              :disabled="menu.state === 'click'"
              :class="{ 
                'default-state': menu.state === 'default',
                'hover-state': menu.state === 'hover',
                'focus-state': menu.state === 'focus',
                'disabled-state': menu.state === 'click',
                'active-state': menu.state === 'active' || isActive
              }"
              @mouseenter="() => handleMouseEnter(index + 4)"
              @mouseleave="() => handleMouseLeave(index + 4)"
              @focus="() => menu.state = 'focus'"
              @click="() => handleClick(index + 4, isActive)"
              @blur="() => handleBlur(index + 4)"
            >
             
                <v-icon v-if="menu.hasIcon" size="14" class="mr-2" :class="{
                  'plane-icon-hover': menu.state === 'hover' || menu.state === 'focus'
                }">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                      d="M22,12L13,7V3.5C13,3.22 12.78,3 12.5,3H11.5C11.22,3 11,3.22 11,3.5V7L2,12V13L11,11V16L9,17V18L12,19L15,18V17L13,16V11L22,13V12Z" />
                  </svg>
                </v-icon>
                <p>Menu item</p>
                <v-icon class="icon-min" >
                {{ isActive ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
              </v-icon>
             
              
             
            </v-btn>
          </template>
          
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="i"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div>
      <!-- Third row of menus with location="right" -->
      <div v-for="(menu, index) in menus.slice(8,10)" :key="index + 8" class="menu-state-wrapper">
        <v-menu 
          v-model="menu.isOpen" 
          location="right"
          transition="slide-y-transition" 
          :disabled="menu.state === 'click'"
        >
          <template v-slot:activator="{ props, isActive }">
            <v-btn
              class="position-relative menu-btn"
              :width="menu.width"
              height="36"
              v-bind="props"
              :disabled="menu.state === 'click'"
              :class="{ 
                'default-state': menu.state === 'default',
                'hover-state': menu.state === 'hover',
                'focus-state': menu.state === 'focus',
                'disabled-state': menu.state === 'click',
                'active-state': menu.state === 'active' || isActive
              }"
              @mouseenter="() => handleMouseEnter(index + 8)"
              @mouseleave="() => handleMouseLeave(index + 8)"
              @focus="() => menu.state = 'focus'"
              @click="() => handleClick(index + 8, isActive)"
              @blur="() => handleBlur(index + 8)"
            >
              <div class="d-flex align-center">
                <v-icon v-if="menu.hasIcon" size="22" class="mr-2" :class="{
                  'plane-icon-hover': menu.state === 'hover' || menu.state === 'focus'
                }">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                      d="M22,12L13,7V3.5C13,3.22 12.78,3 12.5,3H11.5C11.22,3 11,3.22 11,3.5V7L2,12V13L11,11V16L9,17V18L12,19L15,18V17L13,16V11L22,13V12Z" />
                  </svg>
                </v-icon>
                <span>Menu item</span>
              </div>
              
              <v-icon class="chevron-icon">
                {{ isActive ? 'mdi-chevron-right' : 'mdi-chevron-down' }}
              </v-icon>
            </v-btn>
          </template>
          
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="i"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Array of menu configurations to make each one independent
const menus = ref([
  // First row
  { isOpen: false, state: 'default', width: 256, hasIcon: true },
  { isOpen: false, state: 'default', width: 232, hasIcon: false },
  { isOpen: false, state: 'default', width: 232, hasIcon: true },
  { isOpen: false, state: 'default', width: 208, hasIcon: false },
  
  // Second row
  { isOpen: false, state: 'default', width: 151, hasIcon: true },
  { isOpen: false, state: 'default', width: 127, hasIcon: false },
  { isOpen: false, state: 'default', width: 127, hasIcon: true },
  { isOpen: false, state: 'default', width: 103, hasIcon: false },
  
  // Third row (right-aligned)
  { isOpen: false, state: 'default', width: 256, hasIcon: true },
  { isOpen: false, state: 'default', width: 256, hasIcon: false }
])

const items = [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
]

// Event handler functions for individual menus
const handleMouseEnter = (index) => {
  if (!menus.value[index].isOpen && menus.value[index].state !== 'click') {
    menus.value[index].state = 'hover'
  }
}

const handleMouseLeave = (index) => {
  if (!menus.value[index].isOpen && menus.value[index].state !== 'click') {
    menus.value[index].state = 'default'
  }
}

const handleClick = (index, isActive) => {
  if (menus.value[index].state !== 'click') {
    menus.value[index].state = isActive ? 'active' : 'default'
  }
}

const handleBlur = (index) => {
  if (!menus.value[index].isOpen && menus.value[index].state !== 'click') {
    menus.value[index].state = 'default'
  }
}
</script>