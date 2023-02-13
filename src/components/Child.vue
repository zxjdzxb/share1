//子组件
<template>
  <!--  <p>子</p>-->
  <button @click="butFn">改变page值:</button>
  {{ page }}
</template>


<!--<script setup lang="ts">-->
<!--import { ref,defineProps } from 'vue';-->

<!--type Props={-->
<!--  msg:string-->
<!--}-->
<!--defineProps<Props>();-->
<!--</script>-->


<script setup>
// defineEmits,defineProps无需导入，直接使用
const props = defineProps({
  page: Number
}); //接收父组件传来的值
const emit = defineEmits(["pageFn"]);   //定义一个变量来接收父组件传来的方法

const butFn = () => {
  emit("pageFn", props.page)
}

function doSth() {

  console.log(333,'defineExpose');

}

defineExpose({ doSth });

// 获取父组件传递过来的数据
console.log(props.page, "parent value"); // parent value
</script>
<style scoped>
button {
  margin: 20px;
}
</style>