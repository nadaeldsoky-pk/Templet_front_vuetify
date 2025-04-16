<!-- MyTextarea.vue -->
<template>
  <v-container>
    <v-row>
      <v-col col="3">
        <div class="custom-width xlg ">
    <label :for="id1">Label</label>
    <div 
      class="custom-textarea-wrapper"
      :class="[{ 'focused': isFocused, 'hovered': isHovered }]"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <textarea
        id="id1"
        placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      ></textarea>
    </div>
    <div class="helper-text">helperText</div>
  </div>
      </v-col>
      <v-col col="3">
        <div class="custom-width lg ">
    <label :for="id1">Label</label>
    <div 
      class="custom-textarea-wrapper"
      :class="[{ 'focused': isFocused, 'hovered': isHovered }]"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <textarea
        id="id1"
        placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      ></textarea>
    </div>
    <div class="helper-text">helperText</div>
  </div>
      </v-col>
      <v-col col="3">
        <div class="custom-width md ">
    <label :for="id1">Label</label>
    <div 
      class="custom-textarea-wrapper"
      :class="[{ 'focused': isFocused, 'hovered': isHovered }]"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <textarea
        id="id1"
        placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      ></textarea>
    </div>
    <div class="helper-text">helperText</div>
  </div>
      </v-col>
      <v-col col="3">
        <div class="custom-width sm ">
    <label :for="id1">Label</label>
    <div 
      class="custom-textarea-wrapper"
      :class="[{ 'focused': isFocused, 'hovered': isHovered }]"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <textarea
        id="id1"
        placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      ></textarea>
    </div>
    <div class="helper-text">helperText</div>
  </div>
      </v-col>
      <v-col col="3">
        <div class="custom-width sm ">
    <label :for="id2">Label</label>
    <div 
      class="custom-textarea-wrapper"
    >
      <textarea
      disabled
        id="id2"
        placeholder="placeholder"
        color="#B1B1B1"
      ></textarea>
    </div>
    <div class="helper-text">helperText</div>
  </div>
      </v-col>
    </v-row>
  </v-container>
 
</template>

<script>
export default {
  name: 'MyTextarea',

  data() {
    return {
      isFocused: false,
      isHovered: false
    }
  }
}
</script>