//父组件
<template>
  <div class="wrapper">
    <Child :page="page"
           @pageFn="pageFn"
           ref="childRef"
    />
    <button @click="doSth1"> defineExpose</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import Child from './Child.vue'

const childRef = ref();
const page = ref(1)
const pageFn = (num) => {
  page.value += num
}

function doSth1() {
  console.log(childRef.value)
  childRef.value.doSth();
}
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>