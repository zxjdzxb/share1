<template>
  <!-- <div class="child">{{ props.fatherRef }}</div> -->
  <slot name="aaa" class="child" >0222</slot>
  <div v-bind="attrs" class="wrapper">
    <input type="text" v-model="inputVal" />
  </div>
</template>

<script setup >

import { computed, useAttrs, useSlots } from "vue";

const props = defineProps({
  fatherRef: String
});


const emits = defineEmits(["changeVal"]);

const slots = useSlots();

const attrs = useAttrs();

console.log(122, attrs, slots);

const inputVal = computed({
  get() {
    return props.fatherRef;
  },
  set(val) {
    emits("changeVal", val);
  },
});

</script>


<style  scoped>

.wrapper{
display: flex;
  justify-content: center;
  align-items: center;
}
.child {
  margin:10px;
}

.wrapper{
  margin: 10px;
}
</style>
