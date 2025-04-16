<template>
  <v-container>
    <!-- btn1-->
    <v-row>
      <v-col cols="12">
        <h3>btn1</h3>
      </v-col>

      <v-col cols="2">
        <v-row>
          <v-col cols="12">
            <v-btn class="btn text-capitalize btn-md" :class="buttonClassPrimary(1)" :color="buttonColorPrimary(1)"
              :disabled="buttonsPrimary[1].isDisabled" @mouseover="setHover(1, 'primary')"
              @mouseleave="setDefault(1, 'primary')" @mousedown="setClicked(1, 'primary')"
              @mouseup="setHover(1, 'primary')" @focus="setFocused(1, 'primary')" @blur="setDefault(1, 'primary')">
              Button
            </v-btn>
          </v-col>

          <v-col cols="12">
            <v-btn class="btn text-capitalize" :class="buttonClassPrimary(2)" :color="buttonColorPrimary(2)"
              :disabled="buttonsPrimary[2].isDisabled" @mouseover="setHover(2, 'primary')"
              @mouseleave="setDefault(2, 'primary')" @mousedown="setClicked(2, 'primary')"
              @mouseup="setHover(2, 'primary')" @focus="setFocused(2, 'primary')" @blur="setDefault(2, 'primary')">
              Button
              <v-icon class="ml-2">mdi-arrow-right-circle-outline</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12">
            <v-btn class="btn-icon text-capitalize" icon :class="buttonClassPrimary(3)" :color="buttonColorPrimary(3)"
              :disabled="buttonsPrimary[3].isDisabled" @mouseover="setHover(3, 'primary')"
              @mouseleave="setDefault(3, 'primary')" @mousedown="setClicked(3, 'primary')"
              @mouseup="setHover(3, 'primary')" @focus="setFocused(3, 'primary')" @blur="setDefault(3, 'primary')">
              <v-icon>mdi-arrow-right-circle-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- btn-2 hover -->
    <v-row class="mt-8">
      <v-col cols="12">
        <h3>btn2</h3>
      </v-col>

      <v-col cols="2">
        <v-row>
          <v-col cols="12">
            <v-btn class="btn text-capitalize btn-md" elevation="0" :class="buttonClassSecondary(1)"
              :color="buttonColorSecondary(1)" :disabled="buttonsSecondary[1].isDisabled"
              @mouseover="setHover(1, 'secondary')" @mouseleave="setDefault(1, 'secondary')"
              @mousedown="setClicked(1, 'secondary')" @mouseup="setHover(1, 'secondary')"
              @focus="setFocused(1, 'secondary')" @blur="setDefault(1, 'secondary')">
              Button
            </v-btn>
          </v-col>

          <v-col cols="12">
            <v-btn class="btn text-capitalize" elevation="0" :class="buttonClassSecondary(2)"
              :color="buttonColorSecondary(2)" :disabled="buttonsSecondary[2].isDisabled"
              @mouseover="setHover(2, 'secondary')" @mouseleave="setDefault(2, 'secondary')"
              @mousedown="setClicked(2, 'secondary')" @mouseup="setHover(2, 'secondary')"
              @focus="setFocused(2, 'secondary')" @blur="setDefault(2, 'secondary')">
              Button
              <v-icon class="ml-2">mdi-arrow-right-circle-outline</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12">
            <v-btn class="btn-icon" elevation="0" icon :class="buttonClassSecondary(3)" :color="buttonColorSecondary(3)"
              :disabled="buttonsSecondary[3].isDisabled" @mouseover="setHover(3, 'secondary')"
              @mouseleave="setDefault(3, 'secondary')" @mousedown="setClicked(3, 'secondary')"
              @mouseup="setHover(3, 'secondary')" @focus="setFocused(3, 'secondary')"
              @blur="setDefault(3, 'secondary')">
              <v-icon>mdi-arrow-right-circle-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- btn3 border  -->
    <v-row class="mt-8">
      <v-col cols="12">
        <h3>btn3</h3>
      </v-col>

      <v-col cols="2">
        <v-row>
          <v-col cols="12">
            <v-btn class="btn text-capitalize btn-md" :class="buttonClassTertiary(1)" :color="buttonColorSecondary(1)"
              :disabled="buttonsTertiary[1].isDisabled" @mouseover="setHover(1, 'tertiary')"
              @mouseleave="setDefault(1, 'tertiary')" @mousedown="setClicked(1, 'tertiary')"
              @mouseup="setHover(1, 'tertiary')" @focus="setFocused(1, 'tertiary')" @blur="setDefault(1, 'tertiary')">
              Button
            </v-btn>
          </v-col>

          <v-col cols="12">
            <v-btn  class="btn text-capitalize" :class="buttonClassTertiary(2)" :color="buttonColorSecondary(2)"
              :disabled="buttonsTertiary[2].isDisabled" @mouseover="setHover(2, 'tertiary')"
              @mouseleave="setDefault(2, 'tertiary')" @mousedown="setClicked(2, 'tertiary')"
              @mouseup="setHover(2, 'tertiary')" @focus="setFocused(2, 'tertiary')" @blur="setDefault(2, 'tertiary')">
              Button
              <v-icon class="ml-2">mdi-arrow-right-circle-outline</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12">
            <v-btn class="btn-icon" icon :class="buttonClassTertiary(3)" :color="buttonColorTertiary(3)"
              :disabled="buttonsTertiary[3].isDisabled" @mouseover="setHover(3, 'tertiary')"
              @mouseleave="setDefault(3, 'tertiary')" @mousedown="setClicked(3, 'tertiary')"
              @mouseup="setHover(3, 'tertiary')" @focus="setFocused(3, 'tertiary')" @blur="setDefault(3, 'tertiary')">
              <v-icon>mdi-arrow-right-circle-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- btn4 text-->
    <v-row class="mt-8">
      <v-col cols="12">
        <h3>btn4</h3>
      </v-col>

      <v-col cols="2">
        <v-row>
          <v-col cols="12">
            <v-btn class="btn text-capitalize btn-md" elevation="0" variant="outline" :class="buttonClassQuaternary(1)"
              :color="buttonColorQuaternary(1)" :disabled="buttonsQuaternary[1].isDisabled"
              @mouseover="setHover(1, 'quaternary')" @mouseleave="setDefault(1, 'quaternary')"
              @mousedown="setClicked(1, 'quaternary')" @mouseup="setHover(1, 'quaternary')"
              @focus="setFocused(1, 'quaternary')" @blur="setDefault(1, 'quaternary')">
              Button
            </v-btn>
          </v-col>

          <v-col cols="12">
            <v-btn class="btn text-capitalize" elevation="0" variant="outline" :class="buttonClassQuaternary(2)"
              :color="buttonColorQuaternary(2)" :disabled="buttonsQuaternary[2].isDisabled"
              @mouseover="setHover(2, 'quaternary')" @mouseleave="setDefault(2, 'quaternary')"
              @mousedown="setClicked(2, 'quaternary')" @mouseup="setHover(2, 'quaternary')"
              @focus="setFocused(2, 'quaternary')" @blur="setDefault(2, 'quaternary')">
              Button
              <v-icon class="ml-2">mdi-arrow-right-circle-outline</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12">
            <v-btn class="btn-icon" elevation="0" icon variant="outline" :class="buttonClassQuaternary(3)"
              :color="buttonColorQuaternary(3)" :disabled="buttonsQuaternary[3].isDisabled"
              @mouseover="setHover(3, 'quaternary')" @mouseleave="setDefault(3, 'quaternary')"
              @mousedown="setClicked(3, 'quaternary')" @mouseup="setHover(3, 'quaternary')"
              @focus="setFocused(3, 'quaternary')" @blur="setDefault(3, 'quaternary')" color="transparent">
              <v-icon>mdi-arrow-right-circle-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      buttonsPrimary: {
        1: { state: "default", isDisabled: false },
        2: { state: "default", isDisabled: false },
        3: { state: "default", isDisabled: true },
      },
      buttonsSecondary: {
        1: { state: "default", isDisabled: false },
        2: { state: "default", isDisabled: false },
        3: { state: "default", isDisabled: true },
      },
      buttonsTertiary: {
        1: { state: "default", isDisabled: false },
        2: { state: "default", isDisabled: false },
        3: { state: "default", isDisabled: true },
      },
      buttonsQuaternary: {
        1: { state: "default", isDisabled: false },
        2: { state: "default", isDisabled: false },
        3: { state: "default", isDisabled: true },
      },
    };
  },
  methods: {
    // btn1
    buttonClassPrimary(id) {
      if (this.buttonsPrimary[id].isDisabled) return "btn-disabled text-gray";
      switch (this.buttonsPrimary[id].state) {
        case "hover":
          return "btn-hover";
        case "clicked":
          return "btn-clicked";
        case "focus":
          return "btn-focus";
        default:
          return "btn-default";
      }
    },
    buttonColorPrimary(id) {
      if (this.buttonsPrimary[id].isDisabled) return "#F5F5F5";
      return {
        default: "#44225A",
        hover: "#A16BC7",
        clicked: "#6E3894",
        focus: "#43235C",
      }[this.buttonsPrimary[id].state];
    },

    // btn2
    buttonClassSecondary(id) {
      if (this.buttonsSecondary[id].isDisabled) return "text-disabled";

      switch (this.buttonsSecondary[id].state) {
        case "hover":
          return "btn-hover-secondary";
        case "clicked":
          return "btn-primary-pressed-secondary";
        case "focus":
          return "btn-light-main-focas border-light-main-focas";
        default:
          return "btn-main-secondary";
      }
    },
    buttonColorSecondary(id) {
      if (this.buttonsSecondary[id].isDisabled) return "#F5F5F5";

      return "#F3EDF8";
    },

    // btn3
    buttonClassTertiary(id) {
      if (this.buttonsTertiary[id].isDisabled) return "btn-disabled text-gray";

      switch (this.buttonsTertiary[id].state) {
        case "hover":
          return "btn-hover-secondary outline-hover-secondary";
        case "clicked":
          return "btn-primary-pressed-secondary outline-primary-pressed";
        case "focus":
          return "btn-main-secondary border-focus-main";
        default:
          return "btn-main-secondary";
      }
    },
    buttonColorTertiary(id) {
      if (this.buttonsTertiary[id].isDisabled) return "#F5F5F5";

      return "#F3EDF8";
    },
    buttonClassQuaternary(id) {
      if (this.buttonsQuaternary[id].isDisabled) return "btn-disabled text-gray";

      switch (this.buttonsQuaternary[id].state) {
        case "hover":
          return "btn-hover-secondary";
        case "clicked":
          return "btn-primary-pressed-secondary";
        case "focus":
          return "btn-main-secondary text-btn-focus";
        default:
          return "btn-main-secondary";
      }
    },
    buttonColorQuaternary(id) {
      if (this.buttonsQuaternary[id].isDisabled) return "#F5F5F5";

      return null;
    },

    // btn4
    setHover(id, type) {
      const buttons = this.getButtonsForType(type);
      if (!buttons[id].isDisabled) buttons[id].state = "hover";
    },
    setClicked(id, type) {
      const buttons = this.getButtonsForType(type);
      if (!buttons[id].isDisabled) buttons[id].state = "clicked";
    },
    setFocused(id, type) {
      const buttons = this.getButtonsForType(type);
      if (!buttons[id].isDisabled) {
        buttons[id].state = "focus";
      }
    },
    setDefault(id, type) {
      const buttons = this.getButtonsForType(type);
      setTimeout(() => {
        if (buttons[id].state !== "clicked") {
          buttons[id].state = "default";
        }
      }, 200);
    },
    getButtonsForType(type) {
      switch (type) {
        case 'primary':
          return this.buttonsPrimary;
        case 'secondary':
          return this.buttonsSecondary;
        case 'tertiary':
          return this.buttonsTertiary;
        case 'quaternary':
          return this.buttonsQuaternary;
        default:
          return this.buttonsPrimary;
      }
    }
  },
};
</script>
