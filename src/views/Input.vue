<template>
    <v-container>
      <v-row>
        <!-- Default Input -->

        <v-col cols="12" sm="4">
            <label for="test" class="label-inputs">Label_text_input</label>
          <v-text-field id="test" 
          disabled
           placeholder="Placeholder_input" variant="outlined"
            messages="Helper_text_input" 
            class="custom-text-field custom-border-color"/>
        </v-col>
   <!-- Error Input -->
   <v-col cols="12" sm="4">
            <label for="test">Label_text_input</label>
          <v-text-field 
            placeholder="Placeholder_input" 
            variant="outlined"  
            messages="Helper_text_input"
            append-inner-icon="mdi-alert"
            class="custom-text-field custom-border-color custom-border-color-error custom-error-style "
          />
        </v-col>
   <v-col cols="12" sm="4">
            <label for="test">Label_text_input</label>
          <v-text-field 
            placeholder="Placeholder_input" 
            variant="outlined"  
            messages="Helper_text_input"
            class="custom-text-field custom-border-color custom-border-color-error custom-error-style "
          />
        </v-col>
       <!-- Success Input -->
       <v-col cols="12" sm="4">
            <label for="test">Label_text_input</label>
          <v-text-field 
            placeholder="Placeholder_input" 
            variant="outlined" 
            messages="Helper_text_input"
            append-inner-icon="mdi-alert"
            class="custom-text-field  custom-border-color custom-border-color-success  custom-success-style"
          />
        </v-col>
       <v-col cols="12" sm="4">
            <label for="test">Label_text_input</label>
          <v-text-field 
            placeholder="Placeholder_input" 
            variant="outlined" 
            messages="Helper_text_input"
            append-inner-icon="mdi-check-circle"
            class="custom-text-field  custom-border-color custom-border-color-success  custom-success-style"
          />
        </v-col>
      </v-row>
      
    </v-container>
  </template>
  <style scoped>
  /* start input */
  .label-inputs{
  color: var(--gray-800);
}
.v-input__control {
   max-width: 256px;
   border-radius: 8px !important;
   height: 32px !important;
}
.custom-text-field .v-field__input{
   padding-top: 6px !important;
   padding-bottom: 6px !important;
   padding-left: 12px !important;
   padding-right: 12px !important;
   font-size: 14px;
   min-height: 32px !important;
   color: var(--light-gray-700);
}
/* Default border */
.custom-border-color .v-input__control {
   border: 1px solid var(--light-gray-400) !important; 
   border-radius: 8px !important;
}
.custom-border-color:hover .v-input__control {
   border: 1px solid var(--hover-purple) !important;
   border-radius: 8px !important;
}

/* Focus state - remove existing border and apply focus style */
.custom-border-color .v-field--focused {
   border: none !important; /* Remove existing border */
   outline: 3px solid var(--hover-purple) !important; /* Apply focus outline */
   border-radius: 8px !important;
}

.custom-text-field .v-messages__message {
   color: var(--light-gray-700) !important;
   font-size: 12px;
}
.custom-error-style .v-messages__message {
   color: var(--main-danger) !important;
}
.custom-error-style .v-icon {
  color: var(--main-danger) !important;
}
.custom-border-color-error:hover .v-input__control{
   border: 1px solid var(--main-danger) !important;
   border-radius: 8px !important;
}
.custom-success-style .v-messages__message {
   color: var(--main-success)!important;  
}
.custom-success-style .v-icon{
   color:var(--main-success) !important; 
}
.custom-border-color-success:hover .v-input__control {
   border: 1px solid var(--main-success) !important; 
   border-radius: 8px !important;
}
  /* end input */
  </style>