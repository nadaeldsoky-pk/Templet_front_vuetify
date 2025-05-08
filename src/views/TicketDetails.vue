<template>
  <v-app class="bg-content">
        <v-card  class="details-card ml-2 mt-2 px-4" elevation="0">
        <v-card-text>
          <v-row>
              <v-col cols="5">
                <span class="ticket-text">Ticket# 2023-CS123</span>
                <v-icon color="#E9C300">mdi-flag-outline</v-icon>
                <v-icon small class="mr-1 " color="#425166">mdi-autorenew</v-icon>
                <span class="details-text">1 Hour ago</span>
            </v-col>
            <v-col cols="2">Resolution</v-col>
            <v-col cols="2">
                <v-chip class="chip-service">
              Service Request
            </v-chip>
            </v-col>
           
                 <v-col cols="3">    
              <v-avatar size="32" class="ml-6">
                <v-img :src="require('@/assets/profile-image.jpg')" alt="User Profile"></v-img>
              </v-avatar>
              <span class="ml-2 details-text">David Coverdale</span>
              </v-col>
              </v-row>
                <v-row class="mt-0">
           <v-col cols="5">
            <span class=" mr-2">IT</span>
            <v-icon small>mdi-chevron-double-right</v-icon>
            <span class="mx-2">Tech Support</span>
            <v-icon small>mdi-chevron-double-right</v-icon>
            <span class="mx-2">Software</span>
            <v-icon small>mdi-chevron-double-right</v-icon>
            <span class="mx-2">Database</span>
           </v-col >
            <v-col cols="2">2 Working Days</v-col>
           <v-col cols="2">
            <v-chip class="chip-service">
            web
            </v-chip>
           </v-col>
            
            </v-row>
        </v-card-text>
      </v-card>
   <v-row class="d-flex align-center ml-2 mt-4" dense>
    <!-- Open Button -->
    <v-btn class="btn-open">
      Open
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
  <path d="M15.3988 7.58542L10.5428 12.7471C9.96929 13.3567 9.03085 13.3567 8.45736 12.7471L3.60132 7.58542" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </v-btn>

    <!-- Internal Comments with Badge -->
    <v-btn outlined  class="mx-2 btn-comments">
      <div class="position-relative">
        <span class="position-absolute num-comments" >5</span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_936_614)">
    <path d="M13.5 10.5C13.5 11.328 12.828 12 12 12C11.172 12 10.5 11.328 10.5 10.5C10.5 9.672 11.172 9 12 9C12.828 9 13.5 9.672 13.5 10.5ZM17 9C16.172 9 15.5 9.672 15.5 10.5C15.5 11.328 16.172 12 17 12C17.828 12 18.5 11.328 18.5 10.5C18.5 9.672 17.828 9 17 9ZM7.00002 9C6.17202 9 5.50002 9.672 5.50002 10.5C5.50002 11.328 6.17202 12 7.00002 12C7.82802 12 8.50002 11.328 8.50002 10.5C8.50002 9.672 7.82802 9 7.00002 9ZM24 4V16C24 18.206 22.206 20 20 20H17.148L13.3 23.18C12.939 23.502 12.476 23.664 12.008 23.664C11.532 23.664 11.053 23.496 10.671 23.157L6.92202 20H3.99902C1.79302 20 -0.000976562 18.206 -0.000976562 16V4C2.34377e-05 1.794 1.79402 0 4.00002 0H20C22.206 0 24 1.794 24 4ZM22 4C22 2.897 21.103 2 20 2H4.00002C2.89702 2 2.00002 2.897 2.00002 4V16C2.00002 17.103 2.89702 18 4.00002 18H7.28802C7.52302 18 7.75202 18.083 7.93302 18.235L11.981 21.645L16.152 18.229C16.331 18.081 16.556 18 16.789 18H20.001C21.104 18 22.001 17.103 22.001 16L22 4Z" fill="#6E3894"/>
  </g>
  <defs>
    <clipPath id="clip0_936_614">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
      </div>
      
      Internal comments
    </v-btn>
 <!-- Omyrobson Button -->
 <v-btn class="btn-omyrobson ">
  Omyrobson
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M15.7311 7.08542L10.8751 12.2471C10.3016 12.8567 9.36313 12.8567 8.78964 12.2471L3.93359 7.08542" stroke="#84818A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </v-btn>
  </v-row>
  <!-- content -->
  <v-row>
    <v-col cols="8" >
  
    <div class="border rounded pl-2 py-2 pr-0 mb-4 ">
      <div  class="pa-0 mb-2 bg-des ">
    <!-- Title -->
    <p class="title-des mb-3">Can't connect to remote MySQL</p>

    <!-- Description -->
    <p class="mb-4 des-color">
      I have added (% wildcard is allowed, My local Static IP is allowed, Allowed a server IP as well)
      access the tool via cPanel → Databases → Remote MySQL:
      Remote Database Access Hosts
      But still i am getting the same error
      MySQL Query Browser Error Number : 1045
      Could not connect to the specified instance
      MySQL Error Number 1045
      Access Denied for user 'user_nilesh'@'xx.xx.209.216' (using password : YES) (comment
      xx.xx.209.216 is local ISP)
    </p>
  </div>
    <!-- Attachments -->
    <v-row class="pt-2" dense>
      <v-col cols="6">
        <div class="pa-2 d-flex align-center " outlined>
         <div class="position-relative mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
  <g clip-path="url(#clip0_1364_826)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.8335 0C1.28121 0 0.833496 0.447715 0.833496 1V27C0.833496 27.5523 1.28121 28 1.8335 28H23.1668C23.7191 28 24.1668 27.5523 24.1668 27V4.66667L19.5002 0H1.8335Z" fill="#E9F0FA"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5002 0V4.66667H24.1669L19.5002 0Z" fill="#C2CDDE"/>
  </g>
  <defs>
    <clipPath id="clip0_1364_826">
      <rect width="23.3333" height="28" fill="white" transform="translate(0.833496)"/>
    </clipPath>
  </defs>
</svg>
<p class="position-absolute png">PNG</p>
         </div>
          <div class="flex-grow-1">
            <div class="file-title font-weight-medium">File Title.pdf</div>
            <div class="text-caption grey--text">313 KB 31 Aug, 2024</div>
          </div>
          <v-btn icon flat color="transparent">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99992 9.33331C2.36811 9.33331 2.66659 9.63179 2.66659 9.99998V12.6666C2.66659 12.8435 2.73682 13.013 2.86185 13.1381C2.98687 13.2631 3.15644 13.3333 3.33325 13.3333H12.6666C12.8434 13.3333 13.013 13.2631 13.138 13.1381C13.263 13.013 13.3333 12.8435 13.3333 12.6666V9.99998C13.3333 9.63179 13.6317 9.33331 13.9999 9.33331C14.3681 9.33331 14.6666 9.63179 14.6666 9.99998V12.6666C14.6666 13.1971 14.4559 13.7058 14.0808 14.0809C13.7057 14.4559 13.197 14.6666 12.6666 14.6666H3.33325C2.80282 14.6666 2.29411 14.4559 1.91904 14.0809C1.54397 13.7058 1.33325 13.1971 1.33325 12.6666V9.99998C1.33325 9.63179 1.63173 9.33331 1.99992 9.33331Z" fill="#71839B"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" fill="#71839B"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99992 1.33331C8.36811 1.33331 8.66659 1.63179 8.66659 1.99998V9.99998C8.66659 10.3682 8.36811 10.6666 7.99992 10.6666C7.63173 10.6666 7.33325 10.3682 7.33325 9.99998V1.99998C7.33325 1.63179 7.63173 1.33331 7.99992 1.33331Z" fill="#71839B"/>
</svg>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="pa-2 d-flex align-center " outlined>
         <div class="position-relative mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
  <g clip-path="url(#clip0_1364_826)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.8335 0C1.28121 0 0.833496 0.447715 0.833496 1V27C0.833496 27.5523 1.28121 28 1.8335 28H23.1668C23.7191 28 24.1668 27.5523 24.1668 27V4.66667L19.5002 0H1.8335Z" fill="#E9F0FA"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5002 0V4.66667H24.1669L19.5002 0Z" fill="#C2CDDE"/>
  </g>
  <defs>
    <clipPath id="clip0_1364_826">
      <rect width="23.3333" height="28" fill="white" transform="translate(0.833496)"/>
    </clipPath>
  </defs>
</svg>
<p class="position-absolute pdf">PDF</p>
         </div>
          <div class="flex-grow-1">
            <div class="file-title font-weight-medium">File Title.pdf</div>
            <div class="text-caption grey--text">313 KB 31 Aug, 2024</div>
          </div>
          <v-btn icon flat color="transparent">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99992 9.33331C2.36811 9.33331 2.66659 9.63179 2.66659 9.99998V12.6666C2.66659 12.8435 2.73682 13.013 2.86185 13.1381C2.98687 13.2631 3.15644 13.3333 3.33325 13.3333H12.6666C12.8434 13.3333 13.013 13.2631 13.138 13.1381C13.263 13.013 13.3333 12.8435 13.3333 12.6666V9.99998C13.3333 9.63179 13.6317 9.33331 13.9999 9.33331C14.3681 9.33331 14.6666 9.63179 14.6666 9.99998V12.6666C14.6666 13.1971 14.4559 13.7058 14.0808 14.0809C13.7057 14.4559 13.197 14.6666 12.6666 14.6666H3.33325C2.80282 14.6666 2.29411 14.4559 1.91904 14.0809C1.54397 13.7058 1.33325 13.1971 1.33325 12.6666V9.99998C1.33325 9.63179 1.63173 9.33331 1.99992 9.33331Z" fill="#71839B"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21106 10.7318 7.78894 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526Z" fill="#71839B"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99992 1.33331C8.36811 1.33331 8.66659 1.63179 8.66659 1.99998V9.99998C8.66659 10.3682 8.36811 10.6666 7.99992 10.6666C7.63173 10.6666 7.33325 10.3682 7.33325 9.99998V1.99998C7.33325 1.63179 7.63173 1.33331 7.99992 1.33331Z" fill="#71839B"/>
</svg>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
  
  <v-card flat class="pa-4 border">
    <!-- Original Comment -->
    <v-row no-gutters>
      <div>
        <div class="d-flex align-center mb-1">
          <v-avatar size="42" class="ml-6">
                        <v-img :src="require('@/assets/profile-image.jpg')" alt="User Profile"></v-img>
                      </v-avatar>
          <span class="font-weight-medium mr-2" style="color:#334253">amyrobson</span>
          <span class="text-caption ">1 month ago</span>
        </div>
        <div class="text-caption">
          Impressive! Though it seems the drag feature could be improved. But overall it looks
          incredible. You've nailed the design and the responsiveness at various breakpoints works
          really well.
        </div>
      </div>
    </v-row>

    <!-- Reply Comment -->
    <v-row  class="mt-4">
      <v-col>
        <v-sheet
          class="pa-3"
          color="#F8FAFE"
          rounded
          elevation="0"
        >
              <div class="d-flex align-center mb-1">
                <v-avatar size="42" class="ml-6">
                        <v-img :src="require('@/assets/profile-image.jpg')" alt="User Profile"></v-img>
                      </v-avatar>
                <span class="font-weight-medium mr-2">amyrobson</span>
                <span class="text-caption grey--text mr-2">1 month ago</span>
                <v-chip class="chip-you" x-small label> you </v-chip>
              </div>
              <div class="text-caption">
                Impressive! Though it seems the drag feature could be improved. But overall it looks
                incredible. You've nailed the design and the responsiveness at various breakpoints
                works really well.
              </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>

    <div class="d-flex pa-3 replay-commit mt-4 rounded">
      <v-avatar size="52" class="align-self-start">
        <v-img :src="require('@/assets/profile-image.jpg')" alt="User Profile"></v-img>
      </v-avatar>
    <div class="d-flex mx-4 border rounded commit-field"> 
      <v-text-field v-model="comment"
      placeholder="Add a new comment..."
    color="transparent"
      class="flex-grow-1 commit-input"
    
    >
      <template #append-inner>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0648 2.77126C12.6593 2.23264 13.4381 1.94324 14.24 1.96298C15.042 1.98273 15.8056 2.3101 16.3728 2.87733C16.94 3.44455 17.2674 4.20818 17.2872 5.01012C17.3069 5.81205 17.0175 6.59087 16.4789 7.18532C16.473 7.19184 16.4669 7.19824 16.4607 7.2045L8.70293 15.0717C8.69471 15.08 8.68625 15.0881 8.67757 15.096C8.32089 15.4192 7.8536 15.5928 7.37244 15.581C6.89128 15.5691 6.4331 15.3727 6.09277 15.0324C5.75243 14.692 5.55601 14.2339 5.54416 13.7527C5.53231 13.2715 5.70595 12.8042 6.02913 12.4476C6.03485 12.4413 6.0407 12.4351 6.04667 12.429L12.5545 5.8118C12.7965 5.56569 13.1922 5.5624 13.4383 5.80443C13.6844 6.04647 13.6877 6.44218 13.4457 6.68828L6.9484 13.2948C6.8452 13.4126 6.78992 13.5651 6.79378 13.7219C6.79773 13.8823 6.86321 14.035 6.97665 14.1485C7.0901 14.2619 7.24282 14.3274 7.40321 14.3314C7.55874 14.3352 7.70992 14.2809 7.82735 14.1793L15.5608 6.3369C15.8787 5.9814 16.0493 5.51796 16.0375 5.04089C16.0257 4.55973 15.8293 4.10155 15.4889 3.76121C15.1486 3.42088 14.6904 3.22445 14.2093 3.21261C13.7335 3.20089 13.2714 3.3705 12.9163 3.68667L5.16861 11.5436C4.58341 12.1288 4.25464 12.9224 4.25464 13.75C4.25464 14.5776 4.5834 15.3713 5.1686 15.9565C5.7538 16.5417 6.5475 16.8705 7.3751 16.8705C8.20269 16.8705 8.99639 16.5417 9.58159 15.9565L15.9962 9.55756C16.2406 9.31378 16.6363 9.31426 16.8801 9.55864C17.1239 9.80301 17.1234 10.1987 16.879 10.4425L10.4655 16.8404C9.64586 17.66 8.53421 18.1205 7.3751 18.1205C6.21598 18.1205 5.10434 17.66 4.28472 16.8404C3.4651 16.0208 3.00464 14.9092 3.00464 13.75C3.00464 12.5917 3.46449 11.4807 4.2831 10.6613L12.0394 2.79558C12.0477 2.78724 12.0561 2.77913 12.0648 2.77126Z" fill="#5F5F5F"/>
</svg>
        <span class="text-caption grey--text">Attach</span>
      </template>
    </v-text-field>
      <!-- <v-text-field v-model="comment" placeholder="Add a new comment..."  outlined></v-text-field>
      <v-btn icon variant="text" class="mx-2 align-self-end" @click="handleAttach">
        <v-icon>mdi-paperclip</v-icon>
        <p class="mx-2">Attach</p>
      </v-btn> -->
    </div>
      
      <v-btn
        color="#6e3894"
        class="white--text align-self-end w-send"
        @click="sendComment">Send</v-btn>
    </div>

 
    </v-col>

<!-- side right -->
    <v-col>
      <v-card class="customer-info-card pa-0" outlined>
   <div class="border-b mb-2 pa-4">
    <h3 class="text-subtitle-2 font-weight-bold mb-3">Customer information</h3>
    
    <div class="d-flex align-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
  <path d="M5.625 8C6.36668 8 7.0917 7.78007 7.70839 7.36801C8.32507 6.95596 8.80572 6.37029 9.08955 5.68506C9.37338 4.99984 9.44764 4.24584 9.30295 3.51841C9.15825 2.79098 8.8011 2.1228 8.27665 1.59835C7.7522 1.0739 7.08402 0.716751 6.35659 0.572057C5.62916 0.427362 4.87516 0.501625 4.18994 0.785453C3.50471 1.06928 2.91904 1.54993 2.50699 2.16661C2.09493 2.7833 1.875 3.50832 1.875 4.25C1.87599 5.24426 2.2714 6.19751 2.97445 6.90056C3.67749 7.6036 4.63074 7.99901 5.625 8ZM5.625 1.75C6.11945 1.75 6.6028 1.89662 7.01393 2.17133C7.42505 2.44603 7.74548 2.83648 7.9347 3.29329C8.12392 3.75011 8.17343 4.25277 8.07696 4.73773C7.9805 5.22268 7.7424 5.66814 7.39277 6.01777C7.04314 6.3674 6.59768 6.6055 6.11273 6.70197C5.62777 6.79843 5.12511 6.74892 4.66829 6.5597C4.21148 6.37048 3.82103 6.05005 3.54633 5.63893C3.27162 5.2278 3.125 4.74445 3.125 4.25C3.125 3.58696 3.38839 2.95108 3.85723 2.48223C4.32607 2.01339 4.96196 1.75 5.625 1.75Z" fill="#2E2C34"/>
  <path d="M5.625 9.25C4.13367 9.25165 2.70389 9.84482 1.64935 10.8994C0.594818 11.9539 0.00165428 13.3837 0 14.875C0 15.0408 0.065848 15.1997 0.183058 15.3169C0.300268 15.4342 0.45924 15.5 0.625 15.5C0.79076 15.5 0.949731 15.4342 1.06694 15.3169C1.18415 15.1997 1.25 15.0408 1.25 14.875C1.25 13.7147 1.71094 12.6019 2.53141 11.7814C3.35188 10.9609 4.46468 10.5 5.625 10.5C6.78532 10.5 7.89812 10.9609 8.71859 11.7814C9.53906 12.6019 10 13.7147 10 14.875C10 15.0408 10.0658 15.1997 10.1831 15.3169C10.3003 15.4342 10.4592 15.5 10.625 15.5C10.7908 15.5 10.9497 15.4342 11.0669 15.3169C11.1842 15.1997 11.25 15.0408 11.25 14.875C11.2483 13.3837 10.6552 11.9539 9.60065 10.8994C8.54611 9.84482 7.11633 9.25165 5.625 9.25Z" fill="#2E2C34"/>
</svg>
      <span class="ml-2">{{ customer.name }}</span>
    </div>
    
    <div class="d-flex align-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
  <path d="M9.34375 20H3.65625C1.64044 20 0 18.3175 0 16.25V3.75C0 1.6825 1.64044 0 3.65625 0H9.34375C11.3596 0 13 1.6825 13 3.75V16.25C13 18.3175 11.3596 20 9.34375 20ZM3.65625 0.833333C2.08812 0.833333 0.8125 2.14167 0.8125 3.75V16.25C0.8125 17.8583 2.08812 19.1667 3.65625 19.1667H9.34375C10.9119 19.1667 12.1875 17.8583 12.1875 16.25V3.75C12.1875 2.14167 10.9119 0.833333 9.34375 0.833333H3.65625ZM8.125 17.0833C8.125 16.8533 7.943 16.6667 7.71875 16.6667H5.28125C5.057 16.6667 4.875 16.8533 4.875 17.0833C4.875 17.3133 5.057 17.5 5.28125 17.5H7.71875C7.943 17.5 8.125 17.3133 8.125 17.0833Z" fill="#2E2C34"/>
</svg>
      <span class="ml-2" style="color:#3B8AFF">{{ customer.phone }}</span>
    </div>
    
    <div class="d-flex align-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M12.7487 5.03212L8.79346 1.24317C8.31462 0.764333 7.67763 0.5 7 0.5C6.32237 0.5 5.68538 0.763792 5.21088 1.23883L1.25129 5.03212C0.773542 5.48929 0.5 6.13117 0.5 6.792V11.0625C0.5 12.4064 1.59363 13.5 2.9375 13.5H11.0625C12.4064 13.5 13.5 12.4064 13.5 11.0625V6.792C13.5 6.13117 13.2265 5.48929 12.7487 5.03212ZM1.62558 5.42321L5.5895 1.62612C5.96596 1.24967 6.467 1.04167 7 1.04167C7.533 1.04167 8.0335 1.24913 8.41429 1.62992L12.3744 5.42321C12.415 5.46221 12.4535 5.50283 12.4903 5.54508L8.34063 9.69479C7.62454 10.4109 6.376 10.4109 5.65992 9.69479L1.50967 5.54508C1.5465 5.50283 1.58496 5.46221 1.62558 5.42321ZM12.9583 11.0625C12.9583 12.1079 12.1079 12.9583 11.0625 12.9583H2.9375C1.89208 12.9583 1.04167 12.1079 1.04167 11.0625V6.792C1.04167 6.52171 1.10071 6.25521 1.21067 6.01146L5.27696 10.0778C5.73738 10.5382 6.34892 10.7917 7.00054 10.7917C7.65217 10.7917 8.26371 10.5382 8.72412 10.0778L12.7904 6.01146C12.9004 6.25521 12.9594 6.52117 12.9594 6.792V11.0625H12.9583Z" fill="#2E2C34"/>
</svg>
      <span class="ml-2">{{ customer.email }}</span>
    </div>
    
   
   </div>

    
    <div class="d-flex flex-wrap gap-2 pa-4">
      <v-btn color="#6E3894" class="white--text mb-2 mr-2" width="142">
        Send Email
      </v-btn>
      <v-btn color="#6E3894" class="white--text mb-2" width="142">
        Send SMS
      </v-btn>
      <v-btn color="#6E3894" class="white--text" width="142">
        WhatsApp
      </v-btn>
    </div>
  </v-card>
  <v-card class="recent-activity pa-4" outlined>
    <h3 class="text-h6 font-weight-medium mb-4">Recent Activity</h3>
    
    <div class="timeline">
      <div v-for="(activity, index) in activities" :key="index" class="timeline-item mb-4">
        <div class="d-flex">
          <div class="icon-container mr-3" >
              <!-- SVG will be inserted here -->
            </div>
          
          <div class="flex-grow-1">
            <div class="d-flex justify-space-between align-start">
              <div class="activity-text">
                <span class="font-weight-medium">{{ activity.actor }}</span>
                <span > {{ activity.action }} </span>
              </div>
              
              <v-btn
                v-if="activity.hasView"
                variant="text"
                density="compact"
                class="view-btn pa-0 text-caption text-decoration-underline"
                color="primary"
                x-small
              >
                View
              </v-btn>
            </div>
            
            <div class="text-caption text-grey">
              {{ activity.date }}, {{ activity.time }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-card>
    </v-col>
  </v-row>
</v-app>
</template>
<script>
export default {
  data() {
    return {
      comment: '',
      attachment: null,
      customer: {
        name: 'Susan Soprano',
        phone: '05444558886',
        email: 'SusanSoprano@gmail.com'
      },
      activities: [
        {
          type: 'email',
          actor: 'Yara',
          action: 'Sent an email to the customer',
          date: '14 Nov 2022',
          time: '1:40 PM',
          hasView: true
        },
        {
          type: 'reassign',
          actor: 'Mohamed ahmed',
          action: 'Reassigned the issue to yara',
          date: '14 Nov 2022',
          time: '3:26 PM',
          hasView: false
        },
        {
          type: 'comment',
          actor: 'customer',
          action: 'added a new comment',
          date: '14 Nov 2022',
          time: '5:20 PM',
          hasView: false
        },
        {
          type: 'message',
          actor: 'sara',
          action: 'send a text message to the customer',
          date: '14 Nov 2022',
          time: '5:26 PM',
          hasView: true
        },
        {
          type: 'message',
          actor: 'sara',
          action: 'send a text message to the customer',
          date: '14 Nov 2022',
          time: '5:26 PM',
          hasView: true
        },
        {
          type: 'message',
          actor: 'sara',
          action: 'send a text message to the customer',
          date: '14 Nov 2022',
          time: '6:28 PM',
          hasView: true
        }
      ],
    };
  },
  methods: {
    getIconForType(type) {
      // Return SVG markup based on the activity type
      switch (type) {
        case 'email':
          return `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <g clip-path="url(#clip0_936_741)">
    <path d="M15.0417 0.791687H3.95833C2.9089 0.792944 1.90282 1.21039 1.16076 1.95244C0.418698 2.6945 0.00125705 3.70059 0 4.75002L0 14.25C0.00125705 15.2994 0.418698 16.3055 1.16076 17.0476C1.90282 17.7897 2.9089 18.2071 3.95833 18.2084H15.0417C16.0911 18.2071 17.0972 17.7897 17.8392 17.0476C18.5813 16.3055 18.9987 15.2994 19 14.25V4.75002C18.9987 3.70059 18.5813 2.6945 17.8392 1.95244C17.0972 1.21039 16.0911 0.792944 15.0417 0.791687ZM3.95833 2.37502H15.0417C15.5157 2.37595 15.9786 2.51872 16.3708 2.78495C16.7631 3.05118 17.0666 3.42869 17.2425 3.8689L11.1799 9.93227C10.7338 10.3766 10.1297 10.6261 9.5 10.6261C8.8703 10.6261 8.26624 10.3766 7.82008 9.93227L1.7575 3.8689C1.93337 3.42869 2.23694 3.05118 2.62916 2.78495C3.02138 2.51872 3.4843 2.37595 3.95833 2.37502ZM15.0417 16.625H3.95833C3.32844 16.625 2.72435 16.3748 2.27895 15.9294C1.83356 15.484 1.58333 14.8799 1.58333 14.25V5.93752L6.70067 11.0517C7.44375 11.7929 8.45045 12.2091 9.5 12.2091C10.5495 12.2091 11.5563 11.7929 12.2993 11.0517L17.4167 5.93752V14.25C17.4167 14.8799 17.1664 15.484 16.721 15.9294C16.2756 16.3748 15.6716 16.625 15.0417 16.625Z" fill="#202020"/>
  </g>
  <defs>
    <clipPath id="clip0_936_741">
      <rect width="19" height="19" fill="white"/>
    </clipPath>
  </defs>
</svg>`;
        case 'reassign':
          return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5C8.20435 5 7.44129 5.31607 6.87868 5.87868C6.31607 6.44129 6 7.20435 6 8C6 8.79565 6.31607 9.55871 6.87868 10.1213C7.44129 10.6839 8.20435 11 9 11C9.79565 11 10.5587 10.6839 11.1213 10.1213C11.6839 9.55871 12 8.79565 12 8C12 7.20435 11.6839 6.44129 11.1213 5.87868C10.5587 5.31607 9.79565 5 9 5ZM4 8C4 6.67392 4.52678 5.40215 5.46447 4.46447C6.40215 3.52678 7.67392 3 9 3C10.3261 3 11.5979 3.52678 12.5355 4.46447C13.4732 5.40215 14 6.67392 14 8C14 9.32608 13.4732 10.5979 12.5355 11.5355C11.5979 12.4732 10.3261 13 9 13C7.67392 13 6.40215 12.4732 5.46447 11.5355C4.52678 10.5979 4 9.32608 4 8ZM21.707 9.293C21.8945 9.48053 21.9998 9.73484 21.9998 10C21.9998 10.2652 21.8945 10.5195 21.707 10.707L17.707 14.707C17.5195 14.8945 17.2652 14.9998 17 14.9998C16.7348 14.9998 16.4805 14.8945 16.293 14.707L14.293 12.707C14.1108 12.5184 14.01 12.2658 14.0123 12.0036C14.0146 11.7414 14.1198 11.4906 14.3052 11.3052C14.4906 11.1198 14.7414 11.0146 15.0036 11.0123C15.2658 11.01 15.5184 11.1108 15.707 11.293L17 12.586L20.293 9.293C20.4805 9.10553 20.7348 9.00021 21 9.00021C21.2652 9.00021 21.5195 9.10553 21.707 9.293ZM4.203 15.34C5.474 14.492 7.173 14 9 14C10.827 14 12.526 14.492 13.797 15.34C15.062 16.183 16 17.457 16 19C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20C14.7348 20 14.4804 19.8946 14.2929 19.7071C14.1054 19.5196 14 19.2652 14 19C14 18.334 13.595 17.608 12.688 17.004C11.788 16.404 10.487 16 9 16C7.513 16 6.212 16.404 5.312 17.004C4.405 17.608 4 18.334 4 19C4 19.2652 3.89464 19.5196 3.70711 19.7071C3.51957 19.8946 3.26522 20 3 20C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19C2 17.457 2.938 16.183 4.203 15.34Z" fill="#202020"/>
</svg>`;
        case 'comment':
        case 'message':
          return `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <g clip-path="url(#clip0_936_730)">
    <path d="M11.8124 9.1875C11.8124 9.912 11.2244 10.5 10.4999 10.5C9.7754 10.5 9.1874 9.912 9.1874 9.1875C9.1874 8.463 9.7754 7.875 10.4999 7.875C11.2244 7.875 11.8124 8.463 11.8124 9.1875ZM14.8749 7.875C14.1504 7.875 13.5624 8.463 13.5624 9.1875C13.5624 9.912 14.1504 10.5 14.8749 10.5C15.5994 10.5 16.1874 9.912 16.1874 9.1875C16.1874 8.463 15.5994 7.875 14.8749 7.875ZM6.1249 7.875C5.4004 7.875 4.8124 8.463 4.8124 9.1875C4.8124 9.912 5.4004 10.5 6.1249 10.5C6.8494 10.5 7.4374 9.912 7.4374 9.1875C7.4374 8.463 6.8494 7.875 6.1249 7.875ZM20.9999 3.5V14C20.9999 15.9303 19.4301 17.5 17.4999 17.5H15.0044L11.6374 20.2825C11.3215 20.5643 10.9164 20.706 10.5069 20.706C10.0904 20.706 9.67127 20.559 9.33702 20.2624L6.05665 17.5H3.49902C1.56877 17.5 -0.000976562 15.9303 -0.000976562 14V3.5C-0.000101562 1.56975 1.56965 0 3.4999 0H17.4999C19.4301 0 20.9999 1.56975 20.9999 3.5ZM19.2499 3.5C19.2499 2.53487 18.465 1.75 17.4999 1.75H3.4999C2.53477 1.75 1.7499 2.53487 1.7499 3.5V14C1.7499 14.9651 2.53477 15.75 3.4999 15.75H6.3769C6.58252 15.75 6.7829 15.8226 6.94127 15.9556L10.4833 18.9394L14.1329 15.9504C14.2895 15.8209 14.4864 15.75 14.6903 15.75H17.5008C18.4659 15.75 19.2508 14.9651 19.2508 14L19.2499 3.5Z" fill="#202020"/>
  </g>
  <defs>
    <clipPath id="clip0_936_730">
      <rect width="21" height="21" fill="white"/>
    </clipPath>
  </defs>
</svg>`;
        default:
          return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>`;
      }
    },
    viewActivity(activity) {
      console.log('Viewing activity:', activity);
      // Implement view action here
    },
    sendComment() {
      if (this.comment.trim() || this.attachment) {
        console.log('Sending comment:', this.comment);
        console.log('Attachment:', this.attachment);
        // Here you would typically emit an event with the comment data
        this.$emit('send-comment', {
          text: this.comment,
          attachment: this.attachment
        });
        
        // Reset form
        this.comment = '';
        this.attachment = null;
      }
    },
    handleAttach() {
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      this.attachment = event.target.files[0];
    }
  }

};
</script>