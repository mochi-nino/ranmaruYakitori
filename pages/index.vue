<template>
  <div class="relative h-[100vh]" v-show="animation">
    <img
      src="../assets/images/biru.png"
      alt="Beer"
      class="beer1 scale-x-[-1] absolute left-0 top-0 bottom-0 m-auto opacity-0"
    />
    <img
      src="../assets/images/biru.png"
      alt="Beer"
      class="beer2 absolute right-0 top-0 bottom-0 m-auto opacity-0"
    />
    <img
      src="../assets/images/star.png"
      alt="star"
      class="star w-[300px] absolute top-48 right-0 left-0 m-auto opacity-0"
    />
  </div>

  <section v-show="!animation">
    <div class="w-[300px] mx-auto my-32 bg-white rounded-[50%]">
      <img src="../public/logo.png" alt="logo" />
    </div>
    <div class="flex justify-center items-center gap-48">
      <div
        class="w-[300px] h-[300px] bg-yellow-900/80 rounded-[50%] text-center leading-[300px] text-4xl front"
      >
        <nuxt-link to="/home">前台</nuxt-link>
      </div>
      <div
        class="w-[300px] h-[300px] bg-yellow-900/80 rounded-[50%] text-center leading-[300px] text-4xl back"
      >
        <nuxt-link to="/back">後台</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

definePageMeta({
  closeLayouts: true,
});

useHead({
  title: "蘭丸燒烤",
  meta: [
    {
      name: "description",
      content: "description",
    },
  ],
});

const animation = ref(true);

onMounted(() => {
  setTimeout(() => {
    animation.value = false;
  }, 2000);
});
</script>

<style scoped lang="scss">
.front,
.back {
  &:hover {
    background-image: url("/assets/images/bg-izakaya.jpg");
    background-size: cover;
    background-position: center;
    a {
      background-color: black;
      padding: 10px;
      border-radius: 20px;
    }
  }
}

.beer1 {
  animation: beer1 1s linear 0s;
  animation-fill-mode: backwards;
}

.beer2 {
  animation: beer2 1s linear 0s;
}

.star {
  animation: star 1s 0.9s;
}

@keyframes beer1 {
  from {
    left: 0px;
    opacity: 1;
  }
  to {
    left: 30%;
    rotate: 8deg;
    opacity: 1;
  }
}

@keyframes beer2 {
  from {
    right: 0px;
    opacity: 1;
  }
  to {
    right: 30%;
    rotate: -8deg;
    opacity: 1;
  }
}

@keyframes star {
  from {
    opacity: 1;
    scale: (0);
  }
  to {
    opacity: 1;
    scale: (1);
  }
}
</style>
