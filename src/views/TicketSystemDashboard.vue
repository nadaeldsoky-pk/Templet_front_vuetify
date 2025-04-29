<template >
<v-app class="bg-content">
  <v-card class="d-flex justify-space-between align-center title-dashboard ml-2 mt-2 px-4"  elevation="0">
  <v-card-title class="main-title pa-0">Ticketing System Home</v-card-title>
  <v-text-field 
    v-model="search" 
    prepend-inner-icon="mdi-magnify"
    label="Search by name, department, issue ID or any related keywords"
    single-line 
    hide-details 
    outlined 
    dense
    class="search-field"
    style="max-width: 450px;"
  ></v-text-field>
</v-card>
  <v-card class="mt-4">

    <h2 class="mb-6 ml-2">Add New Ticket</h2>

    <!-- Carousel -->
    <v-carousel v-model="activeSlide" :show-arrows="false" height="350" hide-delimiter-background
      class="ticket-carousel">
     
      <v-carousel-item>
        <v-row>
          <v-col v-for="(category, i) in page1Categories" :key="i" cols="12" sm="6" md="4" lg="2">
            <v-card class="mx-auto ticket-card" elevation="0" outlined>
              <v-card-text class="text-center">
                <v-avatar size="60" color="#f5f5f5" class="mb-3">
                  <v-icon :color="category.color" size="28">{{ category.icon }}</v-icon>
                </v-avatar>
                <div class="title-text mb-1">{{ category.title }}</div>
                <div class="desc-text">{{ category.description }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>

      <!-- الصفحة الثانية -->
      <v-carousel-item>
        <v-row>
          <v-col v-for="(category, i) in page2Categories" :key="i" cols="12" sm="6" md="4" lg="2">
            <v-card class="mx-auto ticket-card" elevation="0" outlined>
              <v-card-text class="text-center">
                <v-avatar size="60" color="#f5f5f5" class="mb-3">
                  <v-icon :color="category.color" size="28">{{ category.icon }}</v-icon>
                </v-avatar>
                <div class="title-text mb-1">{{ category.title }}</div>
                <div class="desc-text">{{ category.description }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <!-- مرادف للـ pagination
      <div class="text-center mt-2">
        <v-btn icon :color="activeSlide === 0 ? 'deep-purple' : 'grey'" @click="activeSlide = 0">
        </v-btn>
        <v-btn icon :color="activeSlide === 1 ? 'deep-purple' : 'grey'" @click="activeSlide = 1">
        </v-btn>
      </div> -->
  </v-card>
    <v-btn class="px-3 my-4 py-1 text-capitalize btn-filter"  elevation="0" >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#344054" stroke-width="1.67" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>Filter</v-btn>

      <v-row>
        <!-- col left -->
        <v-col cols="6">
          <v-row>
            <v-col cols="12" >
              <v-card elevation="1">
                <v-card-title class="title-dashboard d-flex align-center ml-4">
                  My Open Requests
                  <v-chip class="chips-num ml-2 " small>25</v-chip>
                </v-card-title>

                <v-card-text>
                  <div class="d-flex justify-space-between align-center mb-4">
                    <div class="d-flex align-center">
                      <span class="ticket-text">Ticket# 2023-CS123</span>
                      <v-icon color="#E9C300">mdi-flag-outline</v-icon>
                    </div>

                    <div class="d-flex align-center">
                      <v-icon small class="mr-1 " color="#425166">mdi-autorenew</v-icon>
                      <span class="details-text">1 Hour ago</span>

                      <v-avatar size="32" class="ml-6">
                        <v-img :src="require('@/assets/profile-image.jpg')" alt="User Profile"></v-img>
                      </v-avatar>
                      <span class="ml-2 details-text">David Coverdale</span>
                    </div>
                  </div>

                  <div class="d-flex mb-3">
                    <span class=" mr-2">IT</span>
                    <v-icon small>mdi-chevron-double-right</v-icon>
                    <span class="mx-2">Tech Support</span>
                    <v-icon small>mdi-chevron-double-right</v-icon>
                    <span class="mx-2">Software</span>
                    <v-icon small>mdi-chevron-double-right</v-icon>
                    <span class="mx-2">Database</span>

                    <v-spacer></v-spacer>

                    <v-chip class="chip-service">
                      Service Request
                    </v-chip>
                  </div>


                  <div class="card-message-dashbord">Can't connect to remote MySQL</div>
                  <p class="card-text-dashbord">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>


                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card elevation="1">
                <v-card-title class="title-dashboard d-flex align-center ml-4">
                  My Open Requests
                  <v-chip class="chips-num ml-2 " small>25</v-chip>
                </v-card-title>

                <v-card-text>
                  <div class="d-flex justify-space-between align-center mb-4">
                    <div class="d-flex align-center">
                      <span class="ticket-text">Ticket# 2023-CS123</span>
                      <v-icon color="#E9C300">mdi-flag-outline</v-icon>
                    </div>

                    <div class="d-flex align-center">
                      <v-icon small class="mr-1 " color="#425166">mdi-autorenew</v-icon>
                      <span class="details-text">1 Hour ago</span>

                      <v-avatar size="32" class="ml-6">
                        <v-img :src="require('@/assets/profile-image.jpg')" alt="User Profile"></v-img>
                      </v-avatar>
                      <span class="ml-2 details-text">David Coverdale</span>
                    </div>
                  </div>

                  <div class="d-flex mb-3">
                    <span class=" mr-2">IT</span>
                    <v-icon small>mdi-chevron-double-right</v-icon>
                    <span class="mx-2">Tech Support</span>
                    <v-icon small>mdi-chevron-double-right</v-icon>
                    <span class="mx-2">Software</span>
                    <v-icon small>mdi-chevron-double-right</v-icon>
                    <span class="mx-2">Database</span>

                    <v-spacer></v-spacer>

                    <v-chip class="chip-service">
                      Service Request
                    </v-chip>
                  </div>


                  <div class="card-message-dashbord">Can't connect to remote MySQL</div>
                  <p class="card-text-dashbord">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>


                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card elevation="1">
                <v-card-title class="title-dashboard d-flex align-center ml-4">
                  My Open Requests
                  <v-chip class="chips-num ml-2 " small>25</v-chip>
                </v-card-title>

                <v-card-text>
                  <div class="d-flex justify-space-between align-center mb-4">
                    <div class="d-flex align-center">
                      <span class="ticket-text">Ticket# 2023-CS123</span>
                      <v-icon color="#E9C300">mdi-flag-outline</v-icon>
                    </div>

                    <div class="d-flex align-center">
                      <v-icon small class="mr-1 " color="#425166">mdi-autorenew</v-icon>
                      <span class="details-text">1 Hour ago</span>

                      <v-avatar size="32" class="ml-6">
                        <v-img :src="require('@/assets/profile-image.jpg')" alt="User Profile"></v-img>
                      </v-avatar>
                      <span class="ml-2 details-text">David Coverdale</span>
                    </div>
                  </div>

                  <div class="d-flex mb-3">
                    <span class=" mr-2">IT</span>
                    <v-icon small>mdi-chevron-double-right</v-icon>
                    <span class="mx-2">Tech Support</span>
                    <v-icon small>mdi-chevron-double-right</v-icon>
                    <span class="mx-2">Software</span>
                    <v-icon small>mdi-chevron-double-right</v-icon>
                    <span class="mx-2">Database</span>

                    <v-spacer></v-spacer>

                    <v-chip class="chip-service">
                      Service Request
                    </v-chip>
                  </div>


                  <div class="card-message-dashbord">Can't connect to remote MySQL</div>
                  <p class="card-text-dashbord">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>


                </v-card-text>
              </v-card>
            </v-col>
            <v-btn class="px-3 my-4 mx-auto py-1 text-capitalize " elevation="4" >Show more</v-btn>
          </v-row>
        </v-col>

        <!-- col right -->
        <v-col cols="6">
    <v-row>
      <v-col cols="12" >
      <v-card>
            <v-card-title class="title-dashboard d-flex align-center ml-4">
              My Pending Actions
              <v-chip class="chips-num ml-2 " small>15</v-chip>
            </v-card-title>

            <v-card-text class="pa-0  position-relative">
             
                  <div class="d-flex border-left border-error px-3  ">
                    <div class="flex-grow-1 ml-3 my-4">
                      <div class="message-db">Unexpected token in JSON</div>
                      <div class="d-flex align-center my-1">
                        <v-icon small class="mr-1">mdi-autorenew</v-icon>
                        <span class="details-text">30 Minutes ago</span>
                      </div>
                      <div class="message-db-details">
                        Requires clarification in #789 (Unexpected token in JSON)
                      </div>
                      <v-btn text small class="px-3 py-1 text-capitalize text-danger-error" outlined>
                        View
                        <v-icon class="icon-danger-error" small right>mdi-eye-outline</v-icon>
                      </v-btn>
                    </div>
                  </div>
            </v-card-text>
          </v-card>
        </v-col>
          <v-col cols="12" >
          <v-card>
            <v-card-text class="pa-0  position-relative">
             
                  <div class="d-flex  border-left border-warning px-3  ">
                    <div class="flex-grow-1 ml-3 my-4">
                      <div class="message-db">Unexpected token in JSON</div>
                      <div class="d-flex align-center my-1">
                        <v-icon small class="mr-1">mdi-autorenew</v-icon>
                        <span class="details-text">30 Minutes ago</span>
                      </div>
                      <div class="message-db-details">
                        Requires clarification in #789 (Unexpected token in JSON)
                      </div>
                      <v-btn text small class="px-3 py-1 text-capitalize text-warning-error" outlined>
                        View
                        <v-icon class="icon-warning-error" small right>mdi-eye-outline</v-icon>
                      </v-btn>
                    </div>
                  </div>
            </v-card-text>
          </v-card>
        </v-col >
         <v-col cols="12" >
          <v-card>
            <v-card-text class="pa-0  position-relative">
             
                  <div class="d-flex  border-left border-info px-3  ">
                    <div class="flex-grow-1 ml-3 my-4">
                      <div class="message-db">Unexpected token in JSON</div>
                      <div class="d-flex align-center my-1">
                        <v-icon small class="mr-1">mdi-autorenew</v-icon>
                        <span class="details-text">30 Minutes ago</span>
                      </div>
                      <div class="message-db-details">
                        Requires clarification in #789 (Unexpected token in JSON)
                      </div>
                      <div class="d-flex justify-space-between align-center">
                        <v-btn text small class="px-3 py-1 text-capitalize text-danger-error" outlined>
                          Reject
                        </v-btn>
                        <v-btn text small class="px-3 py-1 text-capitalize text-success-accept" outlined>
                          Accept
                        </v-btn>
                      </div>
                    </div>
                  </div>
            </v-card-text>
          </v-card>
         </v-col>
        <v-btn class="px-3 my-4 mx-auto py-1 text-capitalize " elevation="4" >Show more</v-btn>
    </v-row>
        </v-col>

      </v-row>

 
</v-app>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      activeSlide: 0,
      page1Categories: [
        {
          title: 'Building Issues',
          description: 'Report heating or other issues to the maintenance team',
          icon: 'mdi-domain',
          color: 'blue'
        },
        {
          title: 'Request Equipment',
          description: 'Request computer hardware, peripherals or other office equipment',
          icon: 'mdi-laptop',
          color: 'indigo'
        },
        {
          title: 'Tech Support',
          description: 'Ask for help with IT or other technology related issues',
          icon: 'mdi-headset',
          color: 'purple'
        },
        {
          title: 'Training & Education',
          description: 'Request access to training programs or webinars',
          icon: 'mdi-school',
          color: 'deep-purple'
        },
        {
          title: 'Office Relocation',
          description: 'Ask the facilities team to help you move offices',
          icon: 'mdi-office-building',
          color: 'pink'
        },
        {
          title: 'Vacations & Time-Off',
          description: 'Submit vacation or time-off requests',
          icon: 'mdi-beach',
          color: 'light-blue'
        }
      ],
      page2Categories: [
        {
          title: 'IT Requests',
          description: 'Request new software or access to systems',
          icon: 'mdi-monitor',
          color: 'green'
        },
        {
          title: 'Meeting Rooms',
          description: 'Book a meeting room or communal space',
          icon: 'mdi-door',
          color: 'amber'
        },
        {
          title: 'Catering',
          description: 'Order food or drinks for meetings',
          icon: 'mdi-food',
          color: 'red'
        },
        {
          title: 'HR Assistance',
          description: 'Get help with HR related questions',
          icon: 'mdi-account-group',
          color: 'teal'
        },
        {
          title: 'Supplies',
          description: 'Request office supplies or stationery',
          icon: 'mdi-pencil',
          color: 'orange'
        },
        {
          title: 'Parking',
          description: 'Request a parking space or report an issue',
          icon: 'mdi-car',
          color: 'blue'
        }
      ]
    }
  }
}
</script>