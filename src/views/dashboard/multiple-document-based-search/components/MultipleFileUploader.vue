<template>
  <a-card>
    <div class="clearfix">
      <a-upload
        v-model:file-list="fileList"
        name="singleDoc"
        :multiple="true"
        list-type="picture-card"
        action="basic-api/doc/upload"
        @change="handleChange"
        @drop="handleDrop"
        accept=".txt, .pdf, .doc, .docx"
      >
        <div v-if="fileList.length < 4">
          <plus-outlined />
          <div style="margin-top: 8px">上传</div>
        </div>
      </a-upload>
      <a-modal
        :visible="previewVisible"
        :title="previewTitle"
        :footer="null"
        @cancel="handleCancel"
      >
        ok
      </a-modal>
    </div>
    <a-button style="margin-top: 20px" type="primary" size="large" @click="handleBtnClick"
      >一键检索</a-button
    >
  </a-card>
</template>

<script lang="ts" setup>
  import { PlusOutlined } from '@ant-design/icons-vue'
  import { ref } from 'vue'
  import type { UploadProps } from 'ant-design-vue'
  import { message, UploadChangeParam } from 'ant-design-vue'
  import emitter from '/@/utils/bus'

  const previewVisible = ref(false)
  const previewTitle = ref('')
  const mulFileInfo = ref([])

  const fileList = ref<UploadProps['fileList']>([])
  function handleCancel() {
    previewVisible.value = false
    previewTitle.value = ''
  }

  function handleChange(info: UploadChangeParam) {
    const status = info.file.status
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} 文件上传成功.`)
      mulFileInfo.value.push(info.file)
      emitter.emit('fileSearch', info.file.response.result)
    } else if (status === 'error') {
      message.error(`${info.file.name} 文件上传失败.`)
    }
  }

  function handleDrop(e) {
    console.log(e)
  }
  function handleBtnClick() {
    console.log(mulFileInfo.value)
  }
</script>
