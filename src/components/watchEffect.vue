<template>
  <div>
    <p><input type="number" v-model="count"></p>
    <p><input type="number" v-model="plusOne"></p>
  </div>
</template>

<script setup>


import {ref, computed, watchEffect, watch} from 'vue';

const count = ref(0);

//创建一个只读的计算属性 ref：
// const plusOne = computed(() => count.value + 1)

// 创建一个可写的计算属性 ref
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  }
})

//定义监听，使用同上 //...some code else
watchEffect(() => console.log(count.value, "watchEffect"));

watch(count, (val, oldval) => {
  console.log(val, oldval, "watch")
}, {immediate: true})

</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

input {
  margin: 10px;
}
</style>