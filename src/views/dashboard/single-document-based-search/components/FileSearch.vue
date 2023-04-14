<template>
  <a-upload-dragger
    v-model:fileList="fileList"
    name="singleDoc"
    :multiple="true"
    action="basic-api/doc/upload"
    @change="handleChange"
    @drop="handleDrop"
    accept=".txt, .pdf, .doc, .docx"
  >
    <p class="ant-upload-drag-icon">
      <inbox-outlined />
    </p>
    <p class="ant-upload-text">点击或将文件拖拽到这里上传</p>
    <p class="ant-upload-hint">
      支持扩展名：.txt .pdf .doc .docx
      <br />
      文件大小：最大支持30M
    </p>
  </a-upload-dragger>
</template>
<script lang="ts">
  import { InboxOutlined } from '@ant-design/icons-vue'
  import { message } from 'ant-design-vue'
  import { defineComponent, ref } from 'vue'
  import type { UploadChangeParam } from 'ant-design-vue'

  export default defineComponent({
    components: {
      InboxOutlined,
    },
    setup() {
      const handleChange = (info: UploadChangeParam) => {
        const status = info.file.status
        if (status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (status === 'done') {
          message.success(`${info.file.name} 文件上传成功.`)
        } else if (status === 'error') {
          message.error(`${info.file.name} 文件上传失败.`)
        }
      }
      return {
        handleChange,
        fileList: ref([]),
        handleDrop: (e: DragEvent) => {
          console.log(e)
        },
      }
    },
  })
</script>
