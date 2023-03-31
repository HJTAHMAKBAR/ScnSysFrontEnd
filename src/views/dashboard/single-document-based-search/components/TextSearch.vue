<template>
  <div>
    <a-textarea
      v-model:value="value"
      placeholder="请输入要检索的文本"
      :auto-size="{ minRows: 10, maxRows: 20 }"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref<string>('')
      return {
        value,
      }
    },
  })
</script>
