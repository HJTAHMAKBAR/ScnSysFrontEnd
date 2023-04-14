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
  const personList = ref([])
  const countryList = ref([])
  const cityList = ref([])

  setTimeout(() => {
    loading.value = false
  }, 1500)

  emitter.on('textSearch', (event) => {
    console.log('index收到了', event)
    textExtract(event).then((data) => {
      personList.value = data.person
      countryList.value = data.country
      cityList.value = data.city
      console.log(data)
    })
  })

  emitter.on('clearList', () => {
    personList.value = []
    countryList.value = []
    cityList.value = []
  })

  onUnmounted(() => {
    emitter.off('textSearch')
  })
</script>
