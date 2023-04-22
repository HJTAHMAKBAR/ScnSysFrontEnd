<template>
  <div class="container">
    <div class="section">
      <div class="section-title">Specially Designated Nationals</div>
      <div class="header">
        <div class="header-item">
          <div class="result-header">ID</div>
          <div class="result-header">Name</div>
          <div class="result-header">Type</div>
          <div class="result-header">Program</div>
          <div class="result-header">Match</div>
          <div class="result-header"></div>
        </div>
      </div>

      <div> 你好 </div>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { watch } from 'vue'

  const props = defineProps({
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
</script>

<style>
  .container {
    margin: 24px auto;
  }

  .section {
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 1em 1em;

    .section-title {
      margin-bottom: 0.5em;
      font-size: 1.2em;
    }

    .header {
      margin-top: 1em;
      width: 100%;

      .header-item {
        width: 100%;
        display: grid;
        grid-template-columns: 4em 1fr 1fr 1fr 4em 36px;

        .result-header {
          text-transform: uppercase;
          font-size: 0.8em;
          padding-bottom: 0.5em;
          border-bottom: 1px solid #eee;
        }
      }
    }
  }
</style>
