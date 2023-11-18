<template>
  <loading v-if="openLoading"></loading>
  <headerView @loading="loaded"></headerView>

  <main>
    <NuxtPage />
  </main>

  <footerView></footerView>
</template>

<script setup>
import headerView from "@/layouts/header.vue";
import footerView from "@/layouts/footer.vue";
import loading from "@/components/loading.vue";
import { userStore } from "@/store/index";
import { ref, onBeforeMount } from "vue";
const store = userStore();
const openLoading = ref(true);

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
