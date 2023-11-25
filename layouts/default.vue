<template>
  <loading v-if="openLoading"></loading>
  <headerView @loading="loaded" v-if="closeLayouts"></headerView>

  <main>
    <NuxtPage />
  </main>

  <footerView v-if="closeLayouts"></footerView>
</template>

<script setup>
import headerView from "@/layouts/header.vue";
import footerView from "@/layouts/footer.vue";
import loading from "@/components/loading.vue";
import { userStore } from "@/store/index";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const store = userStore();
const openLoading = ref(true);
const route = useRoute();

const loaded = (value) => {
  openLoading.value = value;
};

components: {
  headerView;
  footerView;
  loading;
}

const closeLayouts = computed(() => {
  if (route.meta.closeLayouts) {
    openLoading.value = false;
  }
  return route.meta.closeLayouts ? false : true;
});

// const background = computed(() => {
//   return route.meta.closeLayouts ? true : false;
// });
</script>

<style lang="scss" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
</style>
