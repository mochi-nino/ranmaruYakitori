<template>
  <loading v-if="openLoading"></loading>
  <headerView @loading="loaded"></headerView>

  <main>
    <NuxtPage  />
  </main>

  <footerView></footerView>
</template>

<script setup>
import headerView from "@/layouts/header.vue";
import footerView from "@/layouts/footer.vue";
import loading from "@/components/loading.vue";
import { userStore } from "@/store/index";
import { ref, onMounted } from "vue";
const store = userStore();
const openLoading = ref(true);

// 跑loading動畫
// onMounted(() => {
//   setTimeout(() => {
//     openLoading.value = false;
//   }, 200);
// });

const loaded = (value) => {
  openLoading.value = value;
};

components: {
  headerView;
  footerView;
  loading;
}
</script>

<style lang="scss" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
</style>
