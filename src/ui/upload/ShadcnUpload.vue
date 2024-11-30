<template>
  <div class="w-full">
    <!-- Upload Container -->
    <!-- 上传容器 -->
    <div :class="[
            'w-full rounded-lg border border-dashed p-4',
            'flex flex-col items-center justify-center gap-4',
            isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-200',
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        ]"
         @dragover.prevent="handleDragOver"
         @dragleave.prevent="handleDragLeave"
         @drop.prevent="handleDrop"
         @click="!disabled && triggerFileInput()">

      <!-- Hidden File Input -->
      <!-- 隐藏的文件输入框 -->
      <input ref="fileInput"
             type="file"
             class="hidden"
             :disabled="disabled"
             :accept="accept"
             :multiple="multiple"
             @change="handleFileChange"/>

      <!-- Upload Icon -->
      <!-- 上传图标 -->
      <div class="rounded-full bg-gray-100 p-3">
        <svg class="h-6 w-6 text-gray-600"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
        </svg>
      </div>

      <!-- Upload Text -->
      <!-- 上传文本 -->
      <div class="text-center">
        <p class="text-sm font-medium text-gray-600">
          <span class="text-blue-600">点击上传</span> 或拖拽文件到这里
        </p>
        <p class="mt-1 text-xs text-gray-500">
          {{ description || 'Support for a single or bulk upload.' }}
        </p>
      </div>
    </div>

    <!-- File List -->
    <!-- 文件列表 -->
    <div v-if="fileList.length > 0" class="mt-4 space-y-2">
      <div v-for="file in fileList"
           class="flex items-center justify-between rounded-md border p-3"
           :key="file.uid">
        <div class="flex items-center gap-2 flex-1">
          <svg v-if="file.status === 'uploading'" class="h-5 w-5 text-blue-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <svg v-else-if="file.status === 'success'" class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"/>
          </svg>
          <svg v-else-if="file.status === 'error'" class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"/>
          </svg>
          <svg v-else class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>

          <div class="flex-1">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-700">{{ file.name }}</p>
              <p class="text-xs text-gray-500">{{ formatFileSize(file.size) }}</p>
            </div>

            <!-- Progress Bar -->
            <div v-if="file.status === 'uploading'" class="w-full mt-2">
              <div class="w-full bg-gray-200 rounded-full h-1.5">
                <div class="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                     :style="{ width: `${file.percent}%` }">
                </div>
              </div>
              <span class="text-xs text-gray-500">{{ file.percent }}%</span>
            </div>

            <!-- Status Messages -->
            <p v-if="file.status === 'error'" class="text-xs text-red-500 mt-1">
              {{ file.error || '上传失败' }}
            </p>
            <p v-if="file.status === 'success'" class="text-xs text-green-500 mt-1">
              上传成功
            </p>
          </div>
        </div>

        <button class="text-gray-500 hover:text-gray-700 ml-3"
                :disabled="disabled"
                @click.stop="removeFile(file)">
          <svg class="h-5 w-5"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { UploadEmits, UploadFile, UploadProps } from '@/ui/upload/types'

// Props
const props = withDefaults(defineProps<UploadProps>(), {
  accept: '*',
  multiple: false,
  disabled: false,
  name: 'file',
  withCredentials: false
})

// Emits
const emit = defineEmits<UploadEmits>()

// Refs
const fileInput = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)
const fileList = ref<UploadFile[]>([])
const uploadRequests = new Map()

// Methods
const generateUid = () => Date.now() + '_' + Math.random().toString(36).slice(2, 9)

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleDragOver = () => {
  isDragging.value = true
}

const handleDragLeave = () => {
  isDragging.value = false
}

const handleDrop = (e) => {
  isDragging.value = false
  if (props.disabled) {
    return
  }

  const droppedFiles = Array.from(e.dataTransfer.files)
  handleFiles(droppedFiles)
}

const handleFileChange = (e) => {
  const selectedFiles = Array.from(e.target.files)
  handleFiles(selectedFiles)
  // Reset input value to allow selecting the same file again
  e.target.value = ''
}

const handleFiles = async (newFiles) => {
  for (const file of newFiles) {
    if (props.beforeUpload) {
      const shouldUpload = await props.beforeUpload(file)
      if (!shouldUpload) {
        continue
      }
    }

    const uploadFile: UploadFile = {
      uid: generateUid(),
      name: file.name,
      size: file.size,
      status: 'ready',
      percent: 0,
      raw: file
    }

    if (props.multiple) {
      fileList.value.push(uploadFile)
    }
    else {
      fileList.value = [uploadFile]
    }

    startUpload(uploadFile)
  }
}

const startUpload = async (file: UploadFile) => {
  const formData = new FormData()
  formData.append(props.name, file.raw)

  if (props.data) {
    Object.entries(props.data).forEach(([key, value]) => {
      formData.append(key, value)
    })
  }

  // 更新文件状态
  // Update file status
  const index = fileList.value.findIndex(item => item.uid === file.uid)
  if (index !== -1) {
    fileList.value[index] = { ...fileList.value[index], status: 'uploading', percent: 0 }
  }

  try {
    const request = axios.post(props.action, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...props.headers
      },
      withCredentials: props.withCredentials,
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total) {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          // 更新进度
          // Update progress
          const index = fileList.value.findIndex(item => item.uid === file.uid)
          if (index !== -1) {
            fileList.value[index] = { ...fileList.value[index], percent }
          }
          emit('on-progress', { percent }, file)
        }
      }
    })

    uploadRequests.set(file.uid, request)

    const response = await request
    // 更新成功状态
    // Update success status
    const successIndex = fileList.value.findIndex(item => item.uid === file.uid)
    if (successIndex !== -1) {
      fileList.value[successIndex] = {
        ...fileList.value[successIndex],
        status: 'success',
        response: response.data
      }
    }
    emit('on-success', response.data, file)
  }
  catch (error: Error | any) {
    // 更新失败状态
    // Update error status
    const errorIndex = fileList.value.findIndex(item => item.uid === file.uid)
    if (errorIndex !== -1) {
      fileList.value[errorIndex] = {
        ...fileList.value[errorIndex],
        status: 'error',
        error: error.message
      }
    }
    emit('on-error', error, file)
  }
  finally {
    uploadRequests.delete(file.uid)
    emit('update:files', fileList.value)
    emit('on-change', fileList.value)
  }
}

const removeFile = (file: UploadFile) => {
  const index = fileList.value.findIndex(item => item.uid === file.uid)
  if (index !== -1) {
    // 如果文件正在上传，取消上传
    // If the file is being uploaded, cancel the upload
    if (file.status === 'uploading') {
      const request = uploadRequests.get(file.uid)
      request?.cancel && request.cancel()
      uploadRequests.delete(file.uid)
    }
    fileList.value.splice(index, 1)
    emit('update:files', fileList.value)
    emit('on-change', fileList.value)
  }
}

const formatFileSize = (bytes) => {
  if (bytes === 0) {
    return '0 Bytes'
  }
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
</script>
