<template>
    <footer class="footer">
        <p title="关于本网站">
            <a>
                Copyright &copy;2019 - {{new Date().getFullYear()}}
                <strong>CaoMeiYouRen</strong> All Rights
                Rese.
            </a>
        </p>
        <p>
            <a href="http://www.miitbeian.gov.cn/" target="_blank">浙ICP备18041571-2号</a> ||
            <a href="http://www.beian.gov.cn/" target="_blank">浙公安备33102302000191号</a>
        </p>
        <p>
            Powered by
            <a href="https://github.com/CokeMine/ServerStatus-Hotaru">ServerStatus-Hotaru</a>
        </p>
    </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Footer"
})
</script>

<style scoped>
    .footer {
        margin-bottom: 15px;
    }
    .footer p {
        text-align: center;
    }
</style>
