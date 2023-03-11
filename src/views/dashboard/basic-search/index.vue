<template>
  <Card>
    <iframe src="https://124.222.237.67" id="basicSearch"></iframe>
  </Card>
</template>

<script lang="ts" setup>
  import { Card } from 'ant-design-vue'
  import { onMounted } from 'vue'

  onMounted(() => {
    /**
     * iframe-宽高自适应显示
     */
    function changeBasicSearchIframe() {
      const basicSearch = document.getElementById('basicSearch')
      const deviceWidth = document.body.clientWidth
      const deviceHeight = document.body.clientHeight
      basicSearch.style.width = Number(deviceWidth) - 220 + 'px' //数字是页面布局宽度差值
      basicSearch.style.height = Number(deviceHeight) - 80 + 'px' //数字是页面布局高度差
    }

    changeBasicSearchIframe()

    window.onresize = function () {
      changeBasicSearchIframe()
    }
  })
</script>
