<template>
  <div class="p-4">
    <DocSearch class="!my-4 enter-y" :loading="loading" />
    <div class="md:flex enter-y">
      <OrganizationInvolved :list="organizationList" class="md:w-1/3 w-full" :loading="loading" />
      <PeopleInvolved
        :list="personList"
        class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full"
        :loading="loading"
      />
      <LocationInvolved :list="locationList" class="md:w-1/3 w-full" :loading="loading" />
    </div>
  </div>
  <a-modal
    title="查询结果"
    width="100%"
    :visible="visible"
    wrap-class-name="full-modal"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <SearchResult />
  </a-modal>
</template>

<script lang="ts" setup>
  import { onUnmounted, ref } from 'vue'
  import DocSearch from './components/DocSearch.vue'
  import PeopleInvolved from './components/PeopleInvolved.vue'
  import emitter from '/@/utils/bus'
  import { textExtract } from '/@/api/core/extract'
  import OrganizationInvolved from '/@/views/dashboard/single-document-based-search/components/OrganizationInvolved.vue'
  import LocationInvolved from '/@/views/dashboard/single-document-based-search/components/LocationInvolved.vue'
  import SearchResult from '/@/views/dashboard/single-document-based-search/components/SearchResult.vue'

  const loading = ref(true)
  const visible = ref(false)
  const personList = ref([])
  const organizationList = ref([])
  const locationList = ref([])

  setTimeout(() => {
    loading.value = false
  }, 1500)

  emitter.on('textSearch', (event) => {
    textExtract(event).then((data) => {
      personList.value = data.person
      organizationList.value = data.organization
      locationList.value = data.location
    })
  })

  emitter.on('fileSearch', (event) => {
    const data: any = event
    personList.value = data.person
    organizationList.value = data.organization
    locationList.value = data.location
  })

  emitter.on('clearList', () => {
    personList.value = []
    organizationList.value = []
    locationList.value = []
  })

  emitter.on('entityClick', (item) => {
    visible.value = true
    // 根据item类型进行搜索，返回数据，传递给SearchResult
    console.log('indexItemClick', item)
  })

  onUnmounted(() => {
    emitter.off('textSearch')
  })

  function handleOk() {
    visible.value = false
  }

  function handleCancel() {
    visible.value = false
  }
</script>
