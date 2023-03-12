<template>
  <Dragger {..._props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">点击或将文件拖拽到这里上传</p>
    <p className="ant-upload-hint">
      支持扩展名：.txt .pdf .doc .docx
      <br />
      文件大小：最大支持30M
    </p>
  </Dragger>
</template>
<script lang="ts" setup>
  import { InboxOutlined } from '@ant-design/icons-vue'
  import { message, Upload } from 'ant-design-vue'
  const { Dragger } = Upload

  const _props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }
</script>
