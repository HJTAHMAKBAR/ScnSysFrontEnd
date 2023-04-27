<template>
  <Card title="涉及地址">
    <a-empty v-if="list.length === 0" />
    <div v-for="(item, index) in list" :key="index">
      <Tag color="blue" style="margin-bottom: 10px" @click="itemClick(item)">{{ item }}</Tag>
    </div>
  </Card>
</template>
<script lang="ts" setup>
  import { Card, Tag } from 'ant-design-vue'
  import { watch } from 'vue'
  import emitter from '/@/utils/bus'

  const props = defineProps({
    loading: Boolean,
    list: Array,
  })
  watch(
    () => props.list,
    () => {
      if (props.list) {
        return
      }
    },
    {},
  )
  function itemClick(item) {
    emitter.emit('entityClick', item)
  }
</script>
