<template>
  <v-container>
    <v-col class="d-flex align-center ga-4">
      <!-- Switch -->
      <v-switch
        v-model="isChecked"
        ref="customSwitch"
        class="switch-main"
        @focus="handleFocus"
        @blur="handleBlur"
        @mouseenter="handleHover"
        @mouseleave="handleUnhover"
      ></v-switch>
      <v-sheet class="mb-4">Enabled</v-sheet>
    </v-col>

    <v-col class="d-flex align-center ga-4">
      <!-- Switch disabled -->
      <v-switch
        v-model="disabledValue"
        disabled
        class="switch-label"
      ></v-switch>
      <v-sheet class="mb-4">Disabled</v-sheet>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
      disabledValue: false,
      hoverColor: '#A16BC7' // Purple hover color
    };
  },
  watch: {
    isChecked(newVal) {
      this.updateSwitchStyle(newVal);
    }
  },
  mounted() {
    this.updateSwitchStyle(this.isChecked);
  },
  methods: {
    updateSwitchStyle(isChecked) {
      const track = this.$refs.customSwitch?.$el.querySelector('.v-switch__track');
      if (track) {
        track.style.backgroundColor = isChecked ? '#44225A' : '#E0E0E0';
      }
    },
    handleFocus() {
      const track = this.$refs.customSwitch?.$el.querySelector('.v-switch__track');
      if (track) {
        track.style.border = '2px solid #A16BC7';
      }
    },
    handleBlur() {
      const track = this.$refs.customSwitch?.$el.querySelector('.v-switch__track');
      if (track) {
        track.style.border = 'none';
      }
    },
    handleHover() {
      const track = this.$refs.customSwitch?.$el.querySelector('.v-switch__track');
      if (track) {
        // Save the original color to restore later
        this._originalColor = track.style.backgroundColor;
        // Apply hover color regardless of switch state
        track.style.backgroundColor = this.hoverColor;
      }
    },
    handleUnhover() {
      // Restore appropriate color based on switch state
      this.updateSwitchStyle(this.isChecked);
    }
  }
};
</script>

