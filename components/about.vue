<template>
  <section>
    <div
      v-for="(data, idx) in dataList"
      :key="data.length"
      class="my-16 bg-yellow-800/75 box xl:my-32 xl:h-[400px]"
    >
      <div
        class="flex flex-col justify-center items-center mx-auto h-full xl:container xl:gap-72 box-inner xl:flex-row"
      >
        <div class="xl:w-[480px] xl:-mr-32">
          <img
            :src="getImageUrl(data.img)"
            :alt="data.title"
            class="w-full object-cover rounded xl:h-[450px]"
          />
        </div>
        <div
          class="flex flex-col-reverse p-5 xl:p-0 xl:flex-row xl:gap-16 xl:h-full xl:mx-10"
        >
          <p class="xl:[writing-mode:vertical-rl] py-5 text-lg tracking-wider">
            {{ data.txt }}
          </p>
          <h3 class="text-4xl xl:[writing-mode:vertical-rl] font-bold xl:-mt-8">
            {{ data.title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const getImageUrl = (name) => {
  const assets = import.meta.glob("~/assets/images/about/*", {
    eager: true,
    import: "default",
  });

  return assets[`/assets/images/about/${name}`];
};

const dataList = reactive([
  {
    img: "yakitori.jpg",
    title: "美味烤雞肉串",
    txt: "沉浸在咸香多汁的烤雞肉串中，每一口都彷彿品味著烤煙香氣，散發著濃郁的美味。肉質的鮮嫩與香氣的交融，讓人感受到獨特的口感享受。",
  },
  {
    img: "gyureba.jpg",
    title: "美味烤牛肉串",
    txt: "細緻入微的烤牛肉串，外脆內嫩，每一口都是肉質的藝術。透過品味，彷彿踏上了一趟美食之旅，感受著牛肉原汁原味的豐富風味。烤牛肉串的優雅口感帶給您一場美味的饗宴。",
  },
  {
    img: "biru.jpg",
    title: "美味好喝啤酒",
    txt: "品味美味好喝的啤酒，彷彿開啟了味蕾的冒險。搭配上精緻的美食，每一口都是一場口感的盛宴。啤酒的清新與美食的融合，讓人陶醉於其中。品味啤酒與美味佳餚交織的美好時光，讓生活更加豐富多彩。",
  },
]);
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1280px) {
  section {
    .box {
      &:nth-child(2) {
        div {
          flex-direction: row-reverse;
        }
      }
    }
  }
}

p {
  color: white;
}
</style>
