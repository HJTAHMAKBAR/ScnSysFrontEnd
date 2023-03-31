<template>
  <Card
    :tab-list="tabListTitle"
    v-bind="$attrs"
    :active-tab-key="activeKey"
    @tab-change="onTabChange"
  >
    <p v-if="activeKey === 'tab1'">
      <TextSearch />
    </p>
    <p v-if="activeKey === 'tab2'">
      <FileSearch />
    </p>
    <a-button type="primary" size="large" @click="onSubmit">一键检索</a-button>
  </Card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import { Card } from 'ant-design-vue'
  import TextSearch from './TextSearch.vue'
  import FileSearch from './FileSearch.vue'

  const activeKey = ref('tab1')

  const tabListTitle = [
    {
      key: 'tab1',
      tab: '文本检索',
    },
    {
      key: 'tab2',
      tab: '文件检索',
    },
  ]

  function onTabChange(key) {
    activeKey.value = key
  }

  function onSubmit() {
    console.log('submit')
  }
</script>
