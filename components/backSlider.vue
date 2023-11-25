<template>
  <div class="w-[300px] text-center">
    <h2 class="text-2xl bg-yellow-900/90 p-3">後台管理</h2>
    <ul class="p-5 bg-slate-100">
      <li
        v-for="(page, idx) in pages"
        :key="idx"
        class="rounded-2xl text-black hover:text-white hover:bg-yellow-700 focus:bg-yellow-800 focus:outline-"
        :class="inBackColor(page.routeName)"
      >
        <nuxtLink
          :to="`/back/${page.routeName}`"
          class="w-full block mb-5 p-2"
          >{{ page.title }}</nuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import ProductMg from "~/pages/back/productMg.vue";
const route = useRoute();

const pages = reactive([
  { title: "商品管理", routeName: "productMg" },
  { title: "會員管理", routeName: "" },
]);

const inBackColor = computed(() => (pageName) => {
  if (route.name === `back-${pageName}`) {
    return "bg-yellow-900 text-white";
  }
});
</script>
