<template>

  <div class="father">{{ fatherRef }}</div>

  <UseSlots :fatherRef="fatherRef" @changeVal="changeVal" class="btn" id="111">
    <template #test1>
      <div>插槽的值1223</div>
    </template>
  </UseSlots>

</template>

<script setup>

import {ref} from "vue";

import UseSlots from "./useSlots.vue";

const fatherRef = ref("1");

function changeVal(val) {
  fatherRef.value = val;

}

</script>

<style scoped>

div{
  display: flex;
  justify-content: center;
  align-items: center;
}
.father {
  margin-top: 40px;
  margin-bottom: 40px;

}

.btn {

  font-size: 20px;

  color: red;

}

</style>