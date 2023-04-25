<template>
  <div ref="chartRef" :style="{ width, height }"></div>
</template>
<script lang="ts" setup>
  import { Ref, ref, watch } from 'vue'
  import { useECharts } from '/@/hooks/web/useECharts'

  const props = defineProps({
    loading: Boolean,
    list: Array,
    width: {
      type: String as PropType<string>,
      default: '100%',
    },
    height: {
      type: String as PropType<string>,
      default: '300px',
    },
  })
  const chartRef = ref<HTMLDivElement | null>(null)
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>)

  watch(
    () => props.loading,
    () => {
      if (props.loading) {
        return
      }
      setOptions({
        tooltip: {
          trigger: 'item',
        },
        legend: {
          bottom: '1%',
          left: 'center',
        },
        series: [
          {
            color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
            name: '组织和个人',
            type: 'wordCloud',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '12',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: props.list,
            animationType: 'scale',
            animationEasing: 'exponentialInOut',
            animationDelay: function () {
              return Math.random() * 100
            },
          },
        ],
      })
    },
    { immediate: true },
  )
</script>
