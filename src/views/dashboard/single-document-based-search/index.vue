<template>
  <div class="p-4">
    <DocSearch class="!my-4 enter-y" :loading="loading" />
    <div class="md:flex enter-y">
      <EntitiesInvolved class="md:w-1/3 w-full" :loading="loading" />
      <PeopleInvolved class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
      <CompanyInvolved class="md:w-1/3 w-full" :loading="loading" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onUnmounted, ref } from 'vue'
  import DocSearch from './components/DocSearch.vue'
  import EntitiesInvolved from './components/EntitiesInvolved.vue'
  import PeopleInvolved from './components/PeopleInvolved.vue'
  import CompanyInvolved from './components/CompanyInvolved.vue'
  import emitter from '/@/utils/bus'

  const loading = ref(true)

  setTimeout(() => {
    loading.value = false
  }, 1500)

  emitter.on('textSearch', (event) => {
    console.log('index收到了', event)
  })

  onUnmounted(() => {
    emitter.off('textSearch')
  })
</script>
