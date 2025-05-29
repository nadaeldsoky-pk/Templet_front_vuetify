<template>
    <v-container class="bg-light-gray">
        <v-row>
            <v-col cols="6" class="bg-col">
                <v-expansion-panels v-model="activePanels" multiple class="custom-panel" hide-actions>
                    <v-expansion-panel class="pa-4" :value="'custom-panel'">
                        <template #title>
                            <div class="d-flex justify-space-between align-center w-100" @click.stop>
                                <!-- Title & tags -->
                                <div class="w-100">
                                    <div class="d-flex justify-space-between align-center">
                                        <p class="font-weight-bold main-title">
                                            Incident Response and Recovery
                                        </p>
                                        <!-- Toggle Icon Button -->
                                        <div> 
                                            <v-btn icon variant="text" @click.stop="togglePanel">
                                                <v-icon class="rounded border-icon" color="#44225A" size="20">
                                                    {{ isPanelOpen ? 'mdi-minus' : 'mdi-plus' }}
                                                </v-icon>
                                            </v-btn>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-wrap mt-1">
                                        <div v-for="(tag, i) in tags" :key="i"
                                            class="tag-item d-flex align-center me-2">
                                            <span class="font-weight-bold  text-black" color="#000">{{ tag }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <v-expansion-panel-text class="ml-0">
                            <h4 class="mb-4 color-levels">Levels - 4</h4>
                            <v-expansion-panels flat>
                                <v-expansion-panel hide-actions>
                                    <v-expansion-panel-title
                                        v-slot="{ expanded }"
                                        class="pa-2 border rounded border-levels"
                                        :class="expanded ? 'panel-open' : 'panel-closed'">
                                        <div class="w-100">
                                            <div class="d-flex justify-space-between align-center">
                                                <p 
                                                    class="mb-2 title-course" 
                                                    :class="expanded ? 'title-open' : 'title-closed'"
                                                >
                                                    Level one - Basic compliance training
                                                </p>
                                                <v-icon class="border-icon rounded" color="#44225A" size="20">
                                                    {{ expanded ? 'mdi-minus' : 'mdi-plus' }}
                                                </v-icon>
                                            </div>

                                            <!-- النسبة والوقت -->
                                            <div class="d-flex align-center justify-space-between py-2">
                                                <div class="font-weight-bold main-color">75% complete</div>
                                                <div class="d-flex align-center text-grey-lighten-1">
                                                    <v-icon size="12" class="me-1">mdi-clock-time-four-outline</v-icon>
                                                    <span class="history">39min</span>
                                                </div>
                                            </div>

                                            <v-progress-linear
                                                model-value="75"
                                                color="green"
                                                height="12"
                                                class="my-2"
                                                rounded
                                            ></v-progress-linear>
                                        </div>
                                    </v-expansion-panel-title>

                                    <v-expansion-panel-text>
                                        <v-container fluid>
                                            <v-row dense>
                                                <v-col v-for="(card, index) in cards" :key="index" cols="12">
                                                    <v-card class="mb-6 course-card" elevation="4">
                                                        <v-img :src="card.image" height="200px" cover></v-img>

                                                        <v-card-title class="font-weight-black main-color">
                                                            {{ card.title }}
                                                        </v-card-title>

                                                        <v-card-text>
                                                            <div class="mb-1">
                                                               <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                                                  <g clip-path="url(#clip0_530_935)">
                                                                    <path d="M5.95653 6.15744L3.04053 7.99994L4.49953 8.92194V11.2699C4.52653 11.2969 5.24353 11.9999 6.49953 11.9999C7.75553 11.9999 8.47253 11.2969 8.49953 11.2699V8.92194L9.49953 8.28994V10.9994H9.99953V7.99944L7.04303 6.15694C6.71703 5.95094 6.28253 5.95094 5.95603 6.15694L5.95653 6.15744ZM8.00003 11.0514C7.82253 11.1884 7.32653 11.4999 6.50003 11.4999C5.67353 11.4999 5.17703 11.1874 5.00003 11.0514V9.23794L5.95653 9.84194C6.11953 9.94544 6.30753 9.99994 6.50003 9.99994C6.69253 9.99994 6.88053 9.94544 7.04353 9.84244L8.00003 9.23794V11.0514ZM6.77603 9.41994C6.61003 9.52444 6.39003 9.52494 6.22353 9.41994L3.97653 8.00044L6.22353 6.58044C6.38953 6.47594 6.61003 6.47594 6.77603 6.58044L9.02253 8.00044L6.77553 9.42044L6.77603 9.41994Z" fill="black"/>
                                                                    <path d="M4 2.5C4.27614 2.5 4.5 2.27614 4.5 2C4.5 1.72386 4.27614 1.5 4 1.5C3.72386 1.5 3.5 1.72386 3.5 2C3.5 2.27614 3.72386 2.5 4 2.5Z" fill="black"/>
                                                                    <path d="M2.5 2.5C2.77614 2.5 3 2.27614 3 2C3 1.72386 2.77614 1.5 2.5 1.5C2.22386 1.5 2 1.72386 2 2C2 2.27614 2.22386 2.5 2.5 2.5Z" fill="black"/>
                                                                    <path d="M11.25 0H1.75C1.061 0 0.5 0.561 0.5 1.25V11H3.5V10.5H1V4H12V10.5H11V11H12.5V1.25C12.5 0.561 11.9395 0 11.25 0ZM12 3.5H1V1.25C1 0.8365 1.3365 0.5 1.75 0.5H11.25C11.6635 0.5 12 0.8365 12 1.25V3.5Z" fill="black"/>
                                                                    <path d="M5.5 2.5C5.77614 2.5 6 2.27614 6 2C6 1.72386 5.77614 1.5 5.5 1.5C5.22386 1.5 5 1.72386 5 2C5 2.27614 5.22386 2.5 5.5 2.5Z" fill="black"/>
                                                                  </g>
                                                                  <defs>
                                                                    <clipPath id="clip0_530_935">
                                                                      <rect width="12" height="12" fill="white" transform="translate(0.5)"/>
                                                                    </clipPath>
                                                                  </defs>
                                                                </svg>
                                                                Course: {{ card.course }}
                                                            </div>
                                                            <div class="mb-1">
                                                               <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                                                  <g clip-path="url(#clip0_530_942)">
                                                                    <path d="M12.5 2.25V6.25C12.5 6.388 12.388 6.5 12.25 6.5C12.112 6.5 12 6.388 12 6.25V2.25C12 1.285 11.215 0.5 10.25 0.5H2.75C1.785 0.5 1 1.285 1 2.25V6.25C1 6.388 0.888 6.5 0.75 6.5C0.612 6.5 0.5 6.388 0.5 6.25V2.25C0.5 1.0095 1.5095 0 2.75 0H10.25C11.4905 0 12.5 1.0095 12.5 2.25ZM10.375 9.5C9.558 9.5 8.8555 9.9685 8.5 10.6465C8.1445 9.9685 7.442 9.5 6.625 9.5H6.375C5.558 9.5 4.8555 9.9685 4.5 10.6465C4.1445 9.9685 3.442 9.5 2.625 9.5C1.4535 9.5 0.5 10.453 0.5 11.625V11.75C0.5 11.888 0.612 12 0.75 12C0.888 12 1 11.888 1 11.75V11.625C1 10.729 1.729 10 2.625 10C3.521 10 4.25 10.729 4.25 11.625V11.75C4.25 11.888 4.362 12 4.5 12C4.638 12 4.75 11.888 4.75 11.75V11.625C4.75 10.729 5.479 10 6.375 10H6.625C7.521 10 8.25 10.729 8.25 11.625V11.75C8.25 11.888 8.362 12 8.5 12C8.638 12 8.75 11.888 8.75 11.75V11.625C8.75 10.729 9.479 10 10.375 10C11.271 10 12 10.729 12 11.625V11.75C12 11.888 12.112 12 12.25 12C12.388 12 12.5 11.888 12.5 11.75V11.625C12.5 10.453 11.5465 9.5 10.375 9.5ZM10.375 9C9.686 9 9.125 8.4395 9.125 7.75C9.125 7.0605 9.686 6.5 10.375 6.5C11.064 6.5 11.625 7.0605 11.625 7.75C11.625 8.4395 11.064 9 10.375 9ZM10.375 8.5C10.7885 8.5 11.125 8.1635 11.125 7.75C11.125 7.3365 10.7885 7 10.375 7C9.9615 7 9.625 7.3365 9.625 7.75C9.625 8.1635 9.9615 8.5 10.375 8.5ZM6.5 9C5.811 9 5.25 8.4395 5.25 7.75C5.25 7.0605 5.811 6.5 6.5 6.5C7.189 6.5 7.75 7.0605 7.75 7.75C7.75 8.4395 7.189 9 6.5 9ZM6.5 8.5C6.9135 8.5 7.25 8.1635 7.25 7.75C7.25 7.3365 6.9135 7 6.5 7C6.0865 7 5.75 7.3365 5.75 7.75C5.75 8.1635 6.0865 8.5 6.5 8.5ZM2.625 9C1.936 9 1.375 8.4395 1.375 7.75C1.375 7.0605 1.936 6.5 2.625 6.5C3.314 6.5 3.875 7.0605 3.875 7.75C3.875 8.4395 3.314 9 2.625 9ZM2.625 8.5C3.0385 8.5 3.375 8.1635 3.375 7.75C3.375 7.3365 3.0385 7 2.625 7C2.2115 7 1.875 7.3365 1.875 7.75C1.875 8.1635 2.2115 8.5 2.625 8.5Z" fill="black"/>
                                                                  </g>
                                                                  <defs>
                                                                    <clipPath id="clip0_530_942">
                                                                      <rect width="12" height="12" fill="white" transform="translate(0.5)"/>
                                                                    </clipPath>
                                                                  </defs>
                                                                </svg>
                                                                Statements: {{ card.statements }}
                                                            </div>
                                                            <div class="mb-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                                                  <g clip-path="url(#clip0_530_954)">
                                                                    <path d="M9.25 5.5195C7.458 5.5195 6 6.9775 6 8.7695C6 10.551 7.458 12 9.25 12C11.042 12 12.5 10.542 12.5 8.75C12.5 6.9685 11.042 5.5195 9.25 5.5195ZM9.25 11.5C7.734 11.5 6.5 10.275 6.5 8.7695C6.5 7.253 7.734 6.0195 9.25 6.0195C10.766 6.0195 12 7.2445 12 8.75C12 10.2665 10.766 11.5 9.25 11.5ZM9.927 9.073C10.0245 9.1705 10.0245 9.329 9.927 9.4265C9.878 9.4755 9.814 9.4995 9.75 9.4995C9.686 9.4995 9.622 9.475 9.573 9.4265L9.073 8.9265C9.026 8.8795 9 8.816 9 8.7495V7.7495C9 7.6115 9.112 7.4995 9.25 7.4995C9.388 7.4995 9.5 7.6115 9.5 7.7495V8.646L9.927 9.073ZM10.25 1H9.5V0.25C9.5 0.112 9.388 0 9.25 0C9.112 0 9 0.112 9 0.25V1H4V0.25C4 0.112 3.888 0 3.75 0C3.612 0 3.5 0.112 3.5 0.25V1H2.75C1.5095 1 0.5 2.0095 0.5 3.25V9.75C0.5 10.9905 1.5095 12 2.75 12H5.75C5.888 12 6 11.888 6 11.75C6 11.612 5.888 11.5 5.75 11.5H2.75C1.785 11.5 1 10.715 1 9.75V4.5H12V5.25C12 5.388 12.112 5.5 12.25 5.5C12.388 5.5 12.5 5.388 12.5 5.25V3.25C12.5 2.0095 11.4905 1 10.25 1ZM1 4V3.25C1 2.285 1.785 1.5 2.75 1.5H10.25C11.215 1.5 12 2.285 12 3.25V4H1Z" fill="black"/>
                                                                  </g>
                                                                  <defs>
                                                                    <clipPath id="clip0_530_954">
                                                                      <rect width="12" height="12" fill="white" transform="translate(0.5)"/>
                                                                    </clipPath>
                                                                  </defs>
                                                                </svg>
                                                                Due date: {{ card.dueDate }}
                                                            </div>
                                                            <div class="mb-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                                                  <g clip-path="url(#clip0_530_998)">
                                                                    <path d="M10.25 1H9.5V0.25C9.5 0.112 9.388 0 9.25 0C9.112 0 9 0.112 9 0.25V1H4V0.25C4 0.112 3.888 0 3.75 0C3.612 0 3.5 0.112 3.5 0.25V1H2.75C1.5095 1 0.5 2.0095 0.5 3.25V9.75C0.5 10.9905 1.5095 12 2.75 12H10.25C11.4905 12 12.5 10.9905 12.5 9.75V3.25C12.5 2.0095 11.4905 1 10.25 1ZM2.75 1.5H10.25C11.215 1.5 12 2.285 12 3.25V4H1V3.25C1 2.285 1.785 1.5 2.75 1.5ZM10.25 11.5H2.75C1.785 11.5 1 10.715 1 9.75V4.5H12V9.75C12 10.715 11.215 11.5 10.25 11.5ZM9 5.75V7C9 7.276 8.776 7.5 8.5 7.5H7.25C7.112 7.5 7 7.388 7 7.25C7 7.112 7.112 7 7.25 7H8.2285C7.8755 6.3915 7.221 6 6.5 6C5.654 6 4.8955 6.536 4.614 7.3335C4.5675 7.4645 4.4265 7.5325 4.2945 7.486C4.1645 7.44 4.0965 7.2975 4.142 7.167C4.4945 6.17 5.4425 5.5005 6.5 5.5005C7.3 5.5005 8.036 5.8845 8.5 6.5025V5.7505C8.5 5.6125 8.612 5.5005 8.75 5.5005C8.888 5.5005 9 5.6125 9 5.7505V5.75ZM8.858 8.8335C8.5055 9.8305 7.5575 10.5 6.5 10.5C5.7 10.5 4.964 10.116 4.5 9.498V10.25C4.5 10.388 4.388 10.5 4.25 10.5C4.112 10.5 4 10.388 4 10.25V9C4 8.724 4.224 8.5 4.5 8.5H5.75C5.888 8.5 6 8.612 6 8.75C6 8.888 5.888 9 5.75 9H4.7715C5.1245 9.6085 5.779 10 6.5 10C7.346 10 8.1045 9.464 8.386 8.6665C8.4325 8.536 8.5745 8.4685 8.7055 8.514C8.8355 8.56 8.9035 8.703 8.858 8.8335Z" fill="black"/>
                                                                  </g>
                                                                  <defs>
                                                                    <clipPath id="clip0_530_998">
                                                                      <rect width="12" height="12" fill="white" transform="translate(0.5)"/>
                                                                    </clipPath>
                                                                  </defs>
                                                                </svg>
                                                                Last updated: {{ card.lastUpdated }}
                                                            </div>

                                                            <div class="d-flex align-center justify-space-between">
                                                                <!-- إظهار Mandatory فقط إذا لم تكن passed -->
                                                                <v-chip 
                                                                    v-if="!card.isPassed" 
                                                                    color="#C30C0C" 
                                                                    text-color="#C30C0C" 
                                                                    class="mt-3 px-2 font-weight-bold">
                                                                    Mandatory
                                                                </v-chip>
                                                                
                                                                <!-- إظهار Passed فقط إذا كانت passed -->
                                                                <v-chip 
                                                                    v-if="card.isPassed" 
                                                                    color="#1a932e" 
                                                                    text-color="#1a932e" 
                                                                    class="mt-3 px-2 font-weight-bold" 
                                                                    style="text-decoration: line-through;">
                                                                    Passed
                                                                </v-chip>
                                                                
                                                                <v-btn color="#44225A" variant="flat">
                                                                    Start Learning
                                                                </v-btn>
                                                            </div>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>

                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import logo from "@/assets/logo.png"
import profileImage from "@/assets/profile-image.jpg"

const activePanels = ref([]) // holds open panel(s)

const tags = ['Encryption', 'Encryption', 'Threat identification', 'Firewall']

// panel value
const panelValue = 'custom-panel'

// computed to check if panel is open
const isPanelOpen = computed(() => activePanels.value.includes(panelValue))

// toggle function
const togglePanel = () => {
    if (isPanelOpen.value) {
        activePanels.value = activePanels.value.filter(p => p !== panelValue)
    } else {
        activePanels.value.push(panelValue)
    }
}

const cards = [
    {
        title: 'Recognize social engineering tactics',
        image: profileImage,
        course: 'Incident Response and Recovery',
        statements: 30,
        dueDate: '06 Jul 2024',
        lastUpdated: '27 Jan 2024',
        isPassed: false 
    },
    {
        title: 'Understand phishing techniques',
        image: profileImage,
        course: 'Cybersecurity Essentials',
        statements: 24,
        dueDate: '12 Jul 2024',
        lastUpdated: '01 Feb 2024',
        isPassed: true 
    }
]
</script>

<style>
.bg-light-gray {
    background: #F8F0FE;
}
.bg-col{
  background-color:  #f9f1ff;
}
.main-title {
    color: var(--main-purple) !important;
    font-size: 24px;
}

.tag-item::before {
    content: '●';
    font-size: 16px;
    color: black;
    margin-right: 4px;
    display: inline-block;
}

.v-expansion-panel-text {
    border-left: 0px;
    margin-left: 0px;
}

.v-expansion-panel-text__wrapper {
    padding: 0px 16px 8px !important;
}
.color-levels {
    color: var(--main-purple);
    font-size: 24px;
    font-weight: 700;
}
.main-color{
    color: var(--main-purple);
}
.title-course {
    color: #8D8D8D;
}
.border-levels{
border-color: var(--main-purple) !important;
}
.border-icon{
border:2px solid var(--main-purple) !important;
}
.history{
    font-size:12px
}
.panel-closed {
  background-color: white ;
}
.panel-open {
  background-color: #f9f1ff !important;
}
.title-open {
  color: #44225A !important;
}

.title-closed {
  color: #c3c3c3 !important;
}
.course-card{
border-radius: 24px !important;
}
</style>