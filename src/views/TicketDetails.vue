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
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(file, index) in files"
        :key="index"
      >
        <v-card class="pa-2 d-flex align-center" outlined>
          <v-icon color="red" class="mr-2">mdi-file-pdf-box</v-icon>
          <div class="flex-grow-1">
            <div class="text-body-2 font-weight-medium">{{ file.title }}</div>
            <div class="text-caption grey--text">{{ file.size }} • {{ file.date }}</div>
          </div>
          <v-btn icon>
            <v-icon>mdi-download</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
  
  <v-card flat class="pa-4 border">
    <!-- Original Comment -->
    <v-row no-gutters>
      <div>
        <div class="d-flex align-center mb-1">
          <v-avatar size="44" class="ml-6">
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
                <v-avatar size="32" class="ml-6">
                        <v-img :src="require('@/assets/profile-image.jpg')" alt="User Profile"></v-img>
                      </v-avatar>
                <span class="font-weight-medium mr-2">amyrobson</span>
                <span class="text-caption grey--text mr-2">1 month ago</span>
                <v-chip
                class="chip-you"
                  x-small
                  label
                >
                  you
                </v-chip>
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
  <v-card flat class="pa-0 comment-input-container">
    <div class="d-flex align-center">
      <v-avatar size="52" class="ml-6">
        <v-img :src="require('@/assets/profile-image.jpg')" alt="User Profile"></v-img>
      </v-avatar>
      
      <v-text-field
        v-model="comment"
        placeholder="Add a new comment..."
        density="comfortable"
        outlined
        hide-details
        class="flex-grow-1 mx-4"
      ></v-text-field>
      
      <v-btn
        icon
        variant="text"
        class="mr-2"
        @click="handleAttach"
      >
        <v-icon>mdi-paperclip</v-icon>
      </v-btn>
      
      <v-btn
        color="deep-purple"
        class="white--text mr-6"
        @click="sendComment"
      >
        Send
      </v-btn>
    </div>
    <input
      type="file"
      ref="fileInput"
      style="display: none"
      @change="onFileSelected"
    />
  </v-card>
 
    </v-col>

















    <v-col>
      <v-card class="customer-info-card pa-4" outlined>
    <h3 class="text-subtitle-1 font-weight-medium mb-3">Customer information</h3>
    
    <div class="d-flex align-center mb-2">
      <v-icon size="small" class="mr-2">mdi-account</v-icon>
      <span>{{ customer.name }}</span>
    </div>
    
    <div class="d-flex align-center mb-2">
      <v-icon size="small" class="mr-2">mdi-phone</v-icon>
      <span>{{ customer.phone }}</span>
    </div>
    
    <div class="d-flex align-center mb-4">
      <v-icon size="small" class="mr-2">mdi-email</v-icon>
      <span>{{ customer.email }}</span>
    </div>
    
    <v-divider class="mb-4"></v-divider>
    
    <div class="d-flex flex-wrap gap-2">
      <v-btn color="deep-purple" class="white--text mb-2 mr-2" width="115">
        Send Email
      </v-btn>
      <v-btn color="deep-purple" class="white--text mb-2" width="115">
        Send SMS
      </v-btn>
      <v-btn color="deep-purple" class="white--text" width="115">
        WhatsApp
      </v-btn>
    </div>
  </v-card>
  <v-card class="recent-activity pa-4" outlined>
    <h3 class="text-h6 font-weight-medium mb-4">Recent Activity</h3>
    
    <div class="timeline">
      <div v-for="(activity, index) in activities" :key="index" class="timeline-item mb-4">
        <div class="d-flex">
          <div class="icon-container mr-3">
            <v-icon :icon="getIconForType(activity.type)" size="small"></v-icon>
          </div>
          
          <div class="flex-grow-1">
            <div class="d-flex justify-space-between align-start">
              <div class="activity-text">
                <span class="font-weight-medium">{{ activity.actor }}</span>
                <span> {{ activity.action }} </span>
              </div>
              
              <v-btn
                v-if="activity.hasView"
                variant="text"
                density="compact"
                class="view-btn pa-0 text-caption"
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
      files: [
        {
          title: 'File Title.pdf',
          size: '313 KB',
          date: '31 Aug, 2024',
        },
        {
          title: 'File Title.pdf',
          size: '313 KB',
          date: '31 Aug, 2024',
        },
      ],
    };
  },
  methods: {
    getIconForType(type) {
      switch (type) {
        case 'email':
          return 'mdi-email-outline';
        case 'reassign':
          return 'mdi-account-switch';
        case 'comment':
          return 'mdi-comment-outline';
        case 'message':
          return 'mdi-message-text-outline';
        default:
          return 'mdi-help-circle-outline';
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
<style>
.details-card{
    border-bottom:4px solid #000CE9;
}
.v-btn {
  text-transform: none;
  font-weight: 500;
}
.chip-you{
background:#6E3894;
color:#ffffff;
width:45px
}
.comment-input-container {
  border-radius: 8px;
  background-color: white;
}
.btn-open{
display: flex;
width: 157px;
height: 44px;
padding: 15px 10px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 4px;
background:var( --pressed-purple);
color:var(--white);
}
.text-caption{
  color:#67727E;
}
.btn-comments{
display: flex;
width: 192px;
height: 44px;
padding: 15px 7px;
justify-content: center;
align-items: center;
gap: 7px;
border-radius: 4px;
border: 1px solid #6E3894;
color: #6E3894;
font-size: 14px;
font-weight: 600;
}
.num-comments{
    display: flex;
    align-items: center;
    justify-content: center;
    top:-6px;
    right:-2px;
    width:15px;
    height:15px;
    border-radius: 50%;
    background-color:red;
    color: var(--white);
    font-weight: 500;
    font-size:12px
}
.btn-omyrobson{
border: 1px solid #6E3894;
}
.icon-omyrobson{
  color:#84818A;
}
.v-text-field :deep(.v-field__outline) {
  border-radius: 8px;
}
.v-btn {
  border-radius: 4px;
}
.customer-info-card {
  max-width: 350px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}
.recent-activity {
  max-width: 400px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}
.timeline-item {
  position: relative;
}
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
}
.view-btn {
  min-width: auto;
  letter-spacing: normal;
  text-transform: none;
}
</style>