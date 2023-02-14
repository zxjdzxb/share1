<template>
  <UseSlots :fatherRef="fatherRef" @changeVal="changeVal"
            :arrs="['foo', 'bar']"
            :obj="{ foo: 'bar' }"
            data-hash="b10a8db164e0754105b7a99be72e3fe5"
            class="btn" id="111">
    <template #aaa>
      <div class="child">插槽的值1223</div>
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
.child{
  margin: 10px;
}

</style>