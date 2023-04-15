<template>
  <div class="p-4">
    <DocSearch class="!my-4 enter-y" :loading="loading" />
    <div class="md:flex enter-y">
      <CountryInvolved :list="countryList" class="md:w-1/3 w-full" :loading="loading" />
      <PeopleInvolved
        :list="personList"
        class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full"
        :loading="loading"
      />
      <CityInvolved :list="cityList" class="md:w-1/3 w-full" :loading="loading" />
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
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>

<script lang="ts" setup>
  import { onUnmounted, ref } from 'vue'
  import DocSearch from './components/DocSearch.vue'
  import CountryInvolved from './components/CountryInvolved.vue'
  import PeopleInvolved from './components/PeopleInvolved.vue'
  import CityInvolved from './components/CityInvolved.vue'
  import emitter from '/@/utils/bus'
  import { textExtract } from '/@/api/core/extract'

  const loading = ref(true)
  const visible = ref(false)
  const personList = ref([])
  const countryList = ref([])
  const cityList = ref([])

  setTimeout(() => {
    loading.value = false
  }, 1500)

  emitter.on('textSearch', (event) => {
    textExtract(event).then((data) => {
      personList.value = data.person
      countryList.value = data.country
      cityList.value = data.city
      console.log(data)
    })
  })

  emitter.on('fileSearch', (event) => {
    const data: any = event
    personList.value = data.person
    countryList.value = data.country
    cityList.value = data.city
  })

  emitter.on('clearList', () => {
    personList.value = []
    countryList.value = []
    cityList.value = []
  })

  emitter.on('entityClick', (event) => {
    visible.value = true
    console.log(event)
  })

  onUnmounted(() => {
    emitter.off('textSearch')
  })

  function handleOk(e) {
    visible.value = false
    console.log(e)
  }

  function handleCancel(e) {
    visible.value = false
    console.log(e)
  }
</script>
