<template>
  <section class="flex overflow-hidden h-[500px] relative">
    <TransitionGroup :name="transitionName">
      <transition v-for="(img, idx) in slideImg" :key="img.index">
        <div class="px-2 absolute w-full h-full" v-show="showImg === idx">
          <img
            :src="getImageUrl(img.img)"
            :alt="'Image ' + img.index"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </transition>
    </TransitionGroup>

    <span
      class="absolute text-4xl right-5 inset-y-0 h-10 m-auto animate-toRight cursor-pointer"
      @click="changImg(1)"
      >➤</span
    >
    <span
      class="absolute text-4xl rotate-180 left-5 inset-y-0 h-10 m-auto animate-toLeft cursor-pointer"
      @click="changImg(-1)"
      >➤</span
    >

    <span
      class="text-4xl h-96 absolute [writing-mode:vertical-rl] font-bold tracking-wider inset-y-0 m-auto right-96 bg-gray-700/50"
      >喝酒、聊天，新選擇。<br />蘭丸串燒。</span
    >
  </section>

  <about></about>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import about from "@/components/about.vue";

components: {
  about;
}

const getImageUrl = (name) => {
  const assets = import.meta.glob("~/assets/images/*", {
    eager: true,
    import: "default",
  });
  console.log(assets);
  console.log(name);
  return assets[`/assets/images/${name}`];
};

// 輪播圖陣列
const slideImg = reactive([
  { index: 1, img: "01.jpg" },
  { index: 2, img: "02.jpg" },
  { index: 3, img: "03.jpg" },
]);

// 輪播圖Idx
const showImg = ref(0);

// 跑動畫名稱的變數
const transitionName = ref("right-in");

// 換圖片按鈕
const changImg = (changeIdx) => {
  switch (true) {
    case changeIdx === 1 && showImg.value === slideImg.length - 1: //? 如果按右邊的按鈕已經到最後一張的時候則直接回第一張
      showImg.value = 0;
      break;
    case changeIdx === -1 && showImg.value === 0: //? 如果按左邊的按鈕目前是第一張的話則帶到最後一張
      showImg.value = slideImg.length - 1;
      break;
    default:
      showImg.value = showImg.value + changeIdx; //? 都不是則看changeIdx是整數還負數來決定上下張
      break;
  }
};

// 動畫名稱用監聽
watch(showImg, (newIdx, oldIdx) => {
  transitionName.value = newIdx > oldIdx ? "right-in" : "left-in";
});
</script>

<style lang="scss" scoped>
@keyframes rightIn {
  from {
    left: 100%;
  }
  to {
    left: 0%;
  }
}

@keyframes leftIn {
  from {
    right: 100%;
  }
  to {
    right: 0%;
  }
}

.right-in-enter-active,
.right-in-leave-active {
  animation: rightIn 0.5s;
}

.left-in-enter-active,
.left-in-leave-active {
  animation: leftIn 0.5s;
}
</style>
