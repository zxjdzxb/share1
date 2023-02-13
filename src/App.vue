<script setup>

import Father from "./components/Father.vue"
import Child from "./components/Child.vue"
</script>

<template>
  <ul class="tab">
    <li>
      <router-link to="/father">
        <p>父子间组件通信</p>
      </router-link>
    </li>
    <li>
      <router-link to="/watch">
        <p>监听计算</p>
      </router-link>
    </li>
    <li>
      <router-link to="/useAttrs">
        <p>useAttrs和useSlots</p>
      </router-link>
    </li>
  </ul>

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>

<style scoped>
.tab {
  position: relative;
  display: flex;
  font-size: 18px;
  justify-content: space-around;
}
.tab > li {
  border: 1px solid #333;
  background: aquamarine;
  text-align: center;
  list-style-type: none
}
.tab > li:active {
  background: burlywood;
}


router-link {
  margin: 10px;
}


</style>
