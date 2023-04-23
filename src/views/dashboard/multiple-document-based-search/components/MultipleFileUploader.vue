<template>
  <a-card>
    <div>
      <a-upload
        :file-list="fileList"
        list-type="picture-card"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @preview="handlePreview"
      >
        <div>
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
  </a-card>
</template>

<script lang="ts" setup>
  import { PlusOutlined } from '@ant-design/icons-vue'
  import { ref } from 'vue'
  import type { UploadProps } from 'ant-design-vue'

  const previewVisible = ref(false)
  const previewTitle = ref('')

  const fileList = ref<UploadProps['fileList']>([
    // {
    //   uid: '-1',
    //   name: 'a.txt',
    //   status: 'done',
    //   url: 'https://scn-sys-file.oss-cn-shanghai.aliyuncs.com/doc/a.txt',
    // },
    // {
    //   uid: '-2',
    //   name: 'a.pdf',
    //   status: 'done',
    //   url: 'https://scn-sys-file.oss-cn-shanghai.aliyuncs.com/doc/a.pdf',
    // },
    // {
    //   uid: '-3',
    //   name: 'a.docx',
    //   status: 'done',
    //   url: 'https://scn-sys-file.oss-cn-shanghai.aliyuncs.com/doc/a.docx',
    // },
    // {
    //   uid: '-4',
    //   name: 'a.doc',
    //   status: 'done',
    //   url: 'https://scn-sys-file.oss-cn-shanghai.aliyuncs.com/doc/a.doc',
    // },
  ])
  function getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  async function handlePreview(file: UploadProps['fileList'][number]) {
    if (!file.url && !file.preview) {
      file.pre = (await getBase64(file.originFileObj)) as string
    }
    previewVisible.value = true
    previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
  }

  function handleCancel() {
    previewVisible.value = false
    previewTitle.value = ''
  }
</script>
