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
  import { ref } from 'vue'
  import DocSearch from './components/DocSearch.vue'
  import EntitiesInvolved from './components/EntitiesInvolved.vue'
  import PeopleInvolved from './components/PeopleInvolved.vue'
  import CompanyInvolved from './components/CompanyInvolved.vue'

  const loading = ref(true)

  setTimeout(() => {
    loading.value = false
  }, 1500)
</script>
