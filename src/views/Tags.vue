<template>
  <v-container>

    <v-row>
      <!-- Disabled -->
      <v-col cols="6" class="d-flex justify-space-between">
        <v-chip disabled variant="outlined" class="chips chips-with-icon chips-text disable">
          Tag <v-icon class="ml-1">mdi-heart-outline</v-icon>
        </v-chip>
        <v-chip class="chips chips-without-icon chips-text disable" disabled>
          Tag
        </v-chip>
      </v-col>

      <!-- Active -->
      <v-col cols="6" class="d-flex justify-space-between">
        <v-chip color="#44225A" variant="outlined" class="chips chips-with-icon chips-text active">
          Tag <v-icon class="ml-1">mdi-heart-outline</v-icon>
        </v-chip>
        <v-chip class="chips chips-without-icon chips-text active">Tag</v-chip>
      </v-col>

      <!-- Danger -->
      <v-col cols="6" class="d-flex justify-space-between">
        <v-chip variant="outlined" class="chips chips-with-icon chips-text  danger">
          Tag <v-icon class="ml-1">mdi-heart-outline</v-icon>
        </v-chip>
        <v-chip class="chips chips-without-icon chips-text danger">Tag</v-chip>
      </v-col>

      <!-- Info -->
      <v-col cols="6" class="d-flex justify-space-between">
        <v-chip variant="outlined" class="chips chips-with-icon chips-text info">
          Tag <v-icon class="ml-1" color="#0647A9">mdi-heart-outline</v-icon>
        </v-chip>
        <v-chip class="chips chips-without-icon chips-text info" color="#0647A9">Tag</v-chip>
      </v-col>

      <!-- Success -->
      <v-col cols="6" class="d-flex justify-space-between">
        <v-chip variant="outlined" class="chips chips-with-icon chips-text success">
          Tag <v-icon class="ml-1">mdi-heart-outline</v-icon>
        </v-chip>
        <v-chip class="chips chips-without-icon chips-text success">Tag</v-chip>
      </v-col>

      <!-- Warning -->
      <v-col cols="6" class="d-flex justify-space-between">
        <v-chip variant="outlined" class="chips chips-with-icon chips-text warning">
          Tag <v-icon class="ml-1">mdi-heart-outline</v-icon>
        </v-chip>
        <v-chip class="chips chips-without-icon chips-text warning">Tag</v-chip>
      </v-col>
    </v-row>

  </v-container>
</template>
