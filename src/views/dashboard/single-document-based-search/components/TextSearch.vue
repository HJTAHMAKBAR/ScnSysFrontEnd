<template>
  <div>
    <a-textarea
      v-model:value="inputText"
      placeholder="请输入要检索的文本"
      :auto-size="{ minRows: 10, maxRows: 20 }"
    />
    <p></p>
    <a-button type="primary" size="large" @click="onSubmit">一键检索</a-button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import emitter from '/@/utils/bus.js'

  export interface APT {
    inputText: string
  }

  const inputText = ref('')
  defineExpose({
    inputText,
  })

  function onSubmit() {
    emitter.emit('textSearch', inputText.value)
  }
</script>
