<template>
    <v-card max-width="450" class="mx-auto">
      <!-- Header -->
      <v-card-title class="d-flex justify-space-between align-center upload-title">
        Media Upload
        <v-btn icon variant="plain" density="comfortable" @click="closeDialog">
          <v-icon class="icon-close-notification upload-close">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle class="subtitle">
        Add your documents here, and you can upload up to 5 files max
      </v-card-subtitle>
      <v-card-text>
        <!-- Drag & Drop Area -->
        <v-sheet
          class="pa-6 rounded border-dashed d-flex flex-column align-center justify-center"
          height="200"
          border
          style="border-style: dashed; cursor: pointer;"
          @click="triggerFileInput"
          @dragover.prevent
          @drop.prevent="handleFileDrop"
        >
        <div class="position-relative d-inline-block">
    <v-icon
      color="purple darken-2"
      size="32"
    >
      mdi-folder
    </v-icon>
    <v-icon
      class="position-absolute"
      color="white"
      size="14"
      style="top: 50%; left: 50%; transform: translate(-50%, -40%);"
    >
    mdi-upload

    </v-icon>
  </div>
          
          <div class="text-body-1 mb-2">Drag your file(s) to start uploading</div>
          
          <div class="text-center my-2">
            <span class="text-caption px-3">OR</span>
          </div>
          
          <v-btn
            variant="outlined"
            color="#44225A"
            @click.stop="triggerFileInput"
            class="mt-2 text-capitalize btn-upload"
          >
            Browse files
          </v-btn>
          
          <input
            type="file"
            ref="fileInput"
            multiple
            accept=".jpg,.png,.svg,.zip"
            class="d-none"
            @change="handleFileSelect"
          />
        </v-sheet>
        
        <div class="text-caption subtitle mt-2 mb-4">
          Only support .jpg, .png and .svg and .zip files
        </div>
        
        <!-- File List -->
        <div v-if="files.length > 0">
          <!-- Uploaded Files -->
          <v-list class="pa-0 rounded">
            <v-list-item
              v-for="file in files"
              :key="file.id"
              class="px-2 rounded-lg mb-2"
              :class="{'bg-grey-lighten-4': file.status === 'uploading'}"
            >
              <!-- File Icon -->
              <template v-slot:prepend>
                <v-avatar
                  size="36"
                  class="mr-3"
                  :color="getFileIconBgColor(file.type)"
                  rounded
                >
                  <span v-if="isImageFile(file.type)" class="text-caption text-white font-weight-bold">
                    JPG
                  </span>
                  <span v-else-if="file.type === 'zip'" class="text-caption text-white font-weight-bold">
                    ZIP
                  </span>
                  <v-icon v-else color="white" size="16">
                    {{ getFileIcon(file.type) }}
                  </v-icon>
                </v-avatar>
              </template>
              
              <!-- File Details -->
              <v-list-item-title :class="{'text-error': file.status === 'failed'}">
                {{ file.name }}
              </v-list-item-title>
              
              <v-list-item-subtitle v-if="file.status === 'failed'" class="text-error">
                Upload failed
              </v-list-item-subtitle>
              
              <v-list-item-subtitle v-else-if="file.size" class="text-grey">
                {{ formatFileSize(file.size) }}
              </v-list-item-subtitle>
              
              <!-- File Actions -->
              <template v-slot:append>
                <div v-if="file.status === 'uploading'">
                  <v-btn icon
                    size="small"
                    variant="text"
                    @click="cancelUpload(file.id)"
                  >
                    <v-icon >mdi-close-circle</v-icon>
                  </v-btn>
                </div>
                <div v-else class="d-flex justify-end">
                    <v-btn icon size="small" variant="text" @click="removeFile(file.id)">
                    <v-icon color="#E7E7E7">mdi-delete</v-icon>
                  </v-btn>
                  <v-btn icon size="small" variant="text" @click="duplicateFile(file)">
                    <v-icon color="#E7E7E7">mdi-repeat</v-icon>
                  </v-btn >
                 
                </div>
              </template>
            </v-list-item>
            
            <!-- Upload Progress Component -->
            <v-list-item v-if="hasActiveUploads" class="px-0 py-1">
              <v-sheet class="pa-2 rounded-lg bg-grey-lighten-4 w-100">
                <div class="d-flex align-center justify-space-between">
                  <div>
                    <div class="text-subtitle-2">Uploading...</div>
                    <div class="d-flex align-center mt-1">
                      <span class="text-body-2 font-weight-medium">{{ uploadProgress }}%</span>
                      <span class="text-body-2 text-grey mx-1">•</span>
                      <span class="text-body-2 text-grey">{{ timeRemaining }} seconds remaining</span>
                    </div>
                  </div>
                  
                  <div class="d-flex">
                    <v-btn
                      icon
                      size="small"
                      variant="text"
                      color="grey"
                      class="mr-2"
                      @click="togglePause"
                    >
                      <v-icon>{{ isPaused ? 'mdi-play' : 'mdi-pause' }}</v-icon>
                    </v-btn>
                    
                    <v-btn
                      icon
                      size="small"
                      variant="text" 
                      color="error"
                      @click="cancelAllUploads"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </div>
                </div>
                
                <v-progress-linear
                  v-model="uploadProgress"
                  color="primary"
                  height="8"
                  rounded
                  class="mt-2"
                ></v-progress-linear>
              </v-sheet>
            </v-list-item>
          </v-list>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        files: [
          {
            id: 1,
            name: 'filename.jpg',
            type: 'jpg',
            status: 'complete'
          },
          {
            id: 2,
            name: 'assets.zip',
            type: 'zip',
            size: 3200000, // 3.2 MB
            status: 'uploading'
          },
          {
            id: 3,
            name: 'woman portrait.jpg',
            type: 'jpg',
            status: 'failed'
          }
        ],
        uploadProgress: 61,
        timeRemaining: 36,
        isPaused: false,
        intervalId: null,
        nextId: 4
      }
    },
    computed: {
      hasActiveUploads() {
        return this.files.some(file => file.status === 'uploading');
      }
    },
    mounted() {
      // Start progress simulation if there are active uploads
      if (this.hasActiveUploads) {
        this.startProgressSimulation();
      }
    },
    beforeUnmount() {
      this.clearProgressInterval();
    },
    methods: {
      closeDialog() {
        this.$emit('close');
      },
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
      handleFileSelect(event) {
        const newFiles = Array.from(event.target.files);
        this.addFiles(newFiles);
        // Reset the input to allow selecting the same file again
        event.target.value = '';
      },
      handleFileDrop(event) {
        const newFiles = Array.from(event.dataTransfer.files);
        this.addFiles(newFiles);
      },
      addFiles(newFiles) {
        // Filter for only supported file types
        const supportedFiles = newFiles.filter(file => {
          const ext = file.name.split('.').pop().toLowerCase();
          return ['jpg', 'jpeg', 'png', 'svg', 'zip'].includes(ext);
        });
        
        // Check if adding these would exceed the maximum
        const totalFiles = this.files.length + supportedFiles.length;
        const maxFiles = 5;
        
        if (totalFiles > maxFiles) {
          alert(`You can only upload up to ${maxFiles} files. Some files were not added.`);
        }
        
        // Add files up to the maximum allowed
        const availableSlots = maxFiles - this.files.length;
        const filesToAdd = supportedFiles.slice(0, availableSlots);
        
        // Add the new files to the list
        filesToAdd.forEach(file => {
          this.files.push({
            id: this.nextId++,
            name: file.name,
            type: file.name.split('.').pop().toLowerCase(),
            size: file.size,
            status: 'uploading'
          });
        });
        
        // Start progress simulation if not already running
        if (this.hasActiveUploads && !this.intervalId) {
          this.startProgressSimulation();
        }
      },
      removeFile(fileId) {
        const index = this.files.findIndex(f => f.id === fileId);
        if (index !== -1) {
          this.files.splice(index, 1);
        }
        
        // Stop progress simulation if no active uploads
        if (!this.hasActiveUploads) {
          this.clearProgressInterval();
        }
      },
      duplicateFile(file) {
        const duplicate = {
          ...file,
          id: this.nextId++,
          status: file.status === 'uploading' ? 'complete' : file.status
        };
        this.files.push(duplicate);
      },
      cancelUpload(fileId) {
        const file = this.files.find(f => f.id === fileId);
        if (file && file.status === 'uploading') {
          // Remove the file or mark as failed
          this.removeFile(fileId);
        }
        
        // Stop progress simulation if no active uploads
        if (!this.hasActiveUploads) {
          this.clearProgressInterval();
        }
      },
      cancelAllUploads() {
        // Remove all uploading files
        this.files = this.files.filter(file => file.status !== 'uploading');
        this.clearProgressInterval();
      },
      togglePause() {
        this.isPaused = !this.isPaused;
      },
      startProgressSimulation() {
        if (this.intervalId) return;
        
        this.intervalId = setInterval(() => {
          if (this.isPaused) return;
          
          if (this.uploadProgress < 100) {
            this.uploadProgress += 1;
            this.timeRemaining = Math.max(0, this.timeRemaining - 1);
          } else {
            // Complete all uploading files
            this.files.forEach(file => {
              if (file.status === 'uploading') {
                file.status = 'complete';
              }
            });
            this.clearProgressInterval();
          }
        }, 1000);
      },
      clearProgressInterval() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      },
      formatFileSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
        else return (bytes / 1048576).toFixed(1) + ' MB';
      },
      getFileIcon(type) {
        switch (type.toLowerCase()) {
          case 'jpg':
          case 'jpeg':
          case 'png':
            return 'mdi-file-image';
          case 'svg':
            return 'mdi-file-svg';
          case 'zip':
            return 'mdi-zip-box';
          default:
            return 'mdi-file';
        }
      },
      getFileIconBgColor(type) {
        switch (type.toLowerCase()) {
          case 'jpg':
          case 'jpeg':
          case 'png':
            return 'blue';
          case 'svg':
            return 'green';
          case 'zip':
            return 'orange';
          default:
            return 'grey';
        }
      },
      isImageFile(type) {
        return ['jpg', 'jpeg', 'png'].includes(type.toLowerCase());
      }
    }
  }
  </script>
  
  <style scoped>
  .border-dashed {
    border: 1px dashed var(--main-purple) !important;
  }
  .subtitle{
      color: #6D6D6D;
  }
  .upload-title{
  font-weight: 700;
  color: #0B0B0B;
  padding-bottom: 0;
  }
  .upload-close{
    color: #0B0B0B;
  }
  .btn-upload{
    font-weight: 600;
  }
  </style>