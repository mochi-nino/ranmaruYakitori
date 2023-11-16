<template>
  <div class="border-4 border-yellow-800" v-if="options.length > 0">
    <h2
      class="text-2xl bg-yellow-800 text-center py-2 cursor-pointer xl:cursor-default"
      @click="openOptions = !openOptions"
    >
      類別
    </h2>
    <ul class="text-center px-5 xl:!block" v-show="openOptions">
      <li class="my-3 p-1 rounded-xl" :class="screening('ALL')">
        <p @click="screenOptin('ALL')">全部</p>
      </li>
      <li
        v-for="(option, idx) in options"
        :key="idx"
        class="my-3 px-3 py-1 rounded-xl"
        :class="screening(option)"
      >
        <p @click="screenOptin(option)">{{ option }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, ref, onBeforeMount, computed } from "vue";

const options = reactive([]);
const screenOut = ref("");
const openOptions = ref(false);

const emitOption = defineEmits(["option"]);
const screenOptin = (value) => {
  emitOption("option", value);
  screenOut.value = value;
};

const screening = computed(() => (value) => {
  return screenOut.value === value ? "bg-yellow-900" : "";
});

onBeforeMount(() => {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((result) => {
      const optionNames = new Set(result.map((item) => item.category.name));
      options.push(...optionNames);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style lang="scss" scoped>
p {
  color: white;
  cursor: pointer;
}

li:hover {
  background-color: rgba(113, 68, 14);
}
</style>
