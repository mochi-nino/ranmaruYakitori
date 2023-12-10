<template>
  <section
    class="xl:flex justify-center items-center xl:w-[1280px] md:w-[600px] m-auto xl:gap-20 xl:py-5 xl:px-1"
  >
    <div class="relative xl:w-[15%]">
      <slider class="xl:fixed top-[15%]" @option="screenOptin"></slider>
    </div>

    <products :option="option" class="p-10 xl:p-0"></products>
  </section>
</template>

<script setup>
import products from "@/components/products.vue";
import slider from "@/components/slider.vue";
import { ref } from "vue";
components: {
  products;
  slider;
}

// definePageMeta({
//   middleware: "id-not-found",
// });

const option = ref("");

const screenOptin = (value) => {
  option.value = value;
};
</script>
