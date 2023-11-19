<template>
  <section class="xl:w-[1280px] md:w-[600px] py-5 m-auto" id="products">
    <section class="grid xl:grid-cols-4 grid-cols-2 gap-10">
      <div
        v-for="(item, idx) in paginatedList"
        :key="idx"
        class="relative w-full border-4 border-yellow-800"
      >
        <nuxt-link
          :to="{
            name: `products-id`,
            params: { id: item.id },
          }"
        >
          <span class="absolute top-0 left-0 bg-red-500 p-1">{{
            item.category.name
          }}</span>
          <div class="w-full h-[250px]">
            <img
              :src="item.images[0]"
              :alt="item.title"
              class="w-full h-full object-cover object-center"
            />
          </div>
          <div class="mb-auto p-1 relative">
            <h3 class="my-2 text-base">{{ item.title }}</h3>
            <span>${{ item.price }}</span>
            <span
              ><i
                class="fa-heart absolute right-2 text-lg cursor-pointer text-red-500"
                :class="heartIcon(item.id)"
                @click.stop.prevent="addToFavourite(item)"
              ></i
            ></span>
          </div>
        </nuxt-link>
      </div>
    </section>
    <div class="text-center text-xl my-5">
      <button :disabled="currentPage === 1" @click="changPage(-1)">＜</button>
      <button
        v-for="(page, idx) in totalPages"
        :key="page"
        class="mx-3 rounded-lg px-2"
        :class="currentPageStyle(page)"
        @click="changPage(page)"
      >
        {{ page }}
      </button>
      <button :disabled="currentPage === totalPages" @click="changPage(-2)">
        ＞
      </button>
    </div>
  </section>
</template>

<script setup>
//! ----------宣告引入------------
//? store用
import { userStore } from "@/store/index";
const store = userStore();
import { onBeforeMount, reactive, ref, computed, watchEffect } from "vue";

useHead({
  title: `蘭丸燒烤 | 商品列表`,
  meta: [
    {
      name: "description",
      content: "description",
    },
  ],
});

//! ----------變數------------
const products = reactive([]);
const screenOutProducts = ref([]);
const option = ref("ALL");

//? 一頁顯示幾個
const pageSize = ref(12);

//? 當前頁面
const currentPage = ref(1);

//? 父傳子資料定義
const props = defineProps({
  option: {
    type: String,
    default: "ALL",
  },
});

//! ----------功能------------

//* 加入收藏
const addToFavourite = (item) => {
  const isFavourite = store.favourite.some((e) => e.id === item.id);
  if (!isFavourite) {
    console.log(item);
    store.addToFavourite(item);
    alert("已加入收藏");
  } else {
    store.removeFromFavourite(item);
  }
  stopPropagation();
};

//* 愛心收藏變化
const heartIcon = computed(() => (id) => {
  if (store.favourite) {
    return store.favourite.some((e) => e.id === id) ? "fa-solid" : "fa-regular";
  }
});

//* 算出幾頁頁面
const totalPages = computed(() => {
  if (screenOutProducts.value.length <= 0) {
    return Math.ceil(products.length / pageSize.value);
  } else {
    return Math.ceil(screenOutProducts.value.length / pageSize.value);
  }
});

//* 顯示商品Idx
const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = currentPage.value * pageSize.value;

  //!篩選分類 如沒有篩出資料則顯示全部
  const idx = products.filter((item) => item.category.name === option.value);
  screenOutProducts.value = [...idx];

  if (screenOutProducts.value.length <= 0) {
    return products.slice(start, end);
  } else {
    return screenOutProducts.value.slice(start, end);
  }
});

//* 換頁
const changPage = (changeIdx) => {
  switch (true) {
    case changeIdx === -1:
      currentPage.value--;
      break;
    case changeIdx === -2:
      currentPage.value++;
      break;
    default:
      currentPage.value = changeIdx;
      break;
  }
  //! 拉至視窗上
  document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
};

//* 選取頁面的css
const currentPageStyle = computed(() => (page) => {
  return currentPage.value === page ? "bg-yellow-800" : "";
});

//* 當父傳分類資料進來時，賦予資料並跳回第一頁
watchEffect(() => {
  option.value = props.option;
  currentPage.value = 1;
});

onBeforeMount(() => {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((result) => {
      products.push(...result);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style scoped lang="scss">
p {
  color: white;
}
</style>
