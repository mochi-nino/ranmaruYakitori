<template>
  <section
    class="xl:flex justify-center items-center xl:w-[1280px] md:w-[600px] m-auto xl:gap-20 xl:py-5"
  >
    <div class="relative xl:w-[15%]">
      <silder class="xl:fixed top-[12%]" @option="screenOptin"></silder>
    </div>

    <products :option="option" class="p-10 xl:p-0"></products>
  </section>
</template>

<script setup>
import products from "@/components/products.vue";
import silder from "@/components/silder.vue";
import { ref } from "vue";
components: {
  products;
  silder;
}

const option = ref("");

const screenOptin = (value) => {
  option.value = value;
};
</script>
