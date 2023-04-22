<template>
  <div class="container">
    <div class="section">
      <div class="section-title">Specially Designated Nationals</div>
      <div v-for="(item, index) in list.SDNs" :key="index">
        <a-descriptions :title="item.sdnName" bordered>
          <a-descriptions-item label="EntityID">{{ item.entityID }}</a-descriptions-item>
          <a-descriptions-item label="Name" :span="2">{{ item.sdnName }}</a-descriptions-item>
          <a-descriptions-item label="Type">{{
            item.sdnType || 'Unknown Type'
          }}</a-descriptions-item>
          <a-descriptions-item label="Program" :span="2">{{ item.program }}</a-descriptions-item>
          <a-descriptions-item label="Match">{{ matchToPercent(item.match) }}</a-descriptions-item>
        </a-descriptions>
      </div>
    </div>
    <div class="section">
      <div class="section-title">Alternate Names</div>
      <div v-for="(item, index) in list.altNames" :key="index">
        <a-descriptions :title="item.alternateName" bordered>
          <a-descriptions-item label="EntityID">{{ item.entityID }}</a-descriptions-item>
          <a-descriptions-item label="AlternateName">{{ item.alternateName }}</a-descriptions-item>
          <a-descriptions-item label="AlternateID">{{ item.alternateID }}</a-descriptions-item>
          <a-descriptions-item label="AlternateType">{{ item.alternateType }}</a-descriptions-item>
          <a-descriptions-item label="Match">{{ matchToPercent(item.match) }}</a-descriptions-item>
        </a-descriptions>
      </div>
    </div>
    <div class="section">
      <div class="section-title">Denied Persons</div>
      <div v-for="(item, index) in list.deniedPersons" :key="index">
        <a-descriptions :title="item.name" bordered>
          <a-descriptions-item label="Name">{{ item.name }}</a-descriptions-item>
          <a-descriptions-item label="Action">{{ item.action }}</a-descriptions-item>
          <a-descriptions-item label="Effective">{{ item.effectiveDate }}</a-descriptions-item>
          <a-descriptions-item label="Expiration">{{ item.expirationDate }}</a-descriptions-item>
          <a-descriptions-item label="StreetAddress">{{ item.streetAddress }}</a-descriptions-item>
          <a-descriptions-item label="City">{{ item.city }}</a-descriptions-item>
          <a-descriptions-item label="Country">{{
            item.country || 'Unknown Country'
          }}</a-descriptions-item>
          <a-descriptions-item label="LastUpdate">{{ item.lastUpdate }}</a-descriptions-item>
          <a-descriptions-item label="PostalCode">{{ item.postalCode }}</a-descriptions-item>
          <a-descriptions-item label="Match">{{ matchToPercent(item.match) }}</a-descriptions-item>
        </a-descriptions>
      </div>
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

  function matchToPercent(match) {
    return (match * 100).toFixed(1) + '%'
  }
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
      font-weight: bold;
      color: #0960bd;
    }
  }
</style>
