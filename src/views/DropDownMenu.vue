<template>
  <div class="dropdown-container">
    <button 
      ref="dropdownBtn" 
      class="custom-dropdown-btn"
      :class="{
        'custom-focus': isFocused,
        'custom-hover': isHovered
      }"
      @click="toggleDropdown"
      @focus="isFocused = true"
      @blur="closeDropdownAndBlur"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      Dropdown btn
      <span class="icon-wrapper">
        <i class="chevron-down"></i>
      </span>
    </button>
    
    <div 
      v-show="isOpen" 
      class="dropdown-menu"
      ref="dropdownMenu"
    >
      <div 
        v-for="(item, index) in items" 
        :key="index"
        class="menu-item"
        :class="{ 'selected': selectedIndex === index }"
        @click="selectItem(index)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFocused: false,
      isHovered: false,
      isOpen: false,
      selectedIndex: null,
      items: ["select 1", "select 2", "select 3"]
    };
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdownAndBlur() {
      this.isFocused = false;
      setTimeout(() => {
        if (!this.isFocused) {
          this.isOpen = false;
        }
      }, 200);
    },
    handleOutsideClick(event) {
      const dropdown = this.$refs.dropdownBtn;
      const menu = this.$refs.dropdownMenu;
      
      if (dropdown && menu && 
          !dropdown.contains(event.target) && 
          !menu.contains(event.target) && 
          this.isOpen) {
        this.isOpen = false;
      }
    },
    selectItem(index) {
      this.selectedIndex = index;
      this.isOpen = false;
      this.$emit('item-selected', this.items[index], index);
    }
  }
};
</script>