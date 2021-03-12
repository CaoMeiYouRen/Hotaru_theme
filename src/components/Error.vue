<template>
  <p>
     如果出现此消息，请确保您已启用Javascript！ <br />否则云监控主服务（服务端）未启动或已关闭.
  </p>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Error'
})
</script>
<style scoped>
p {
  text-align: center;
  color: red;
  margin-bottom: 0;
}
</style>
