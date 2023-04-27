<template>
  <div style="height: calc(100vh - 200px); width: 100%">
    <relation-graph ref="refGraph" :options="options">
      <template #node="{ node }">
        <div style="padding-top: 20px" @click="showNodeTips(node.text)">{{ node.text }}</div>
      </template>
    </relation-graph>
  </div>
  <a-modal
    title="查询结果"
    width="90%"
    :visible="modalVisible"
    wrap-class-name="full-modal"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <SearchResult :list="searchResList" />
  </a-modal>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import RelationGraph, { RGJsonData } from 'relation-graph/vue3'
  import { search } from '/@/api/core/search'
  import SearchResult from '/@/views/dashboard/single-document-based-search/components/SearchResult.vue'

  const modalVisible = ref(false)
  const searchResList = ref([])

  const refGraph = ref<RelationGraph>()
  const props = defineProps({
    list: Array,
  })
  const options = {
    defaultExpandHolderPosition: 'right',
    defaultLineShape: 1,
    debug: false,
    showDebugPanel: false,
    allowShowMiniToolBar: false,
  }
  watch(
    () => props.list,
    () => {
      const graphJsonData: RGJsonData = {
        rootId: 'N3',
        nodes: props.list.nodes,
        lines: props.list.lines,
      }
      refGraph.value?.setJsonData(graphJsonData, () => {
        console.log('relationGraph ready!')
      })
    },
  )

  function showNodeTips(item) {
    const param = {
      name: item,
    }
    search(param).then((data) => {
      searchResList.value = data
    })
    modalVisible.value = true
  }

  function handleOk() {
    modalVisible.value = false
  }

  function handleCancel() {
    modalVisible.value = false
  }
</script>
