<template>
  <section
    class="xl:container xl:h-[calc(100vh-65px-106px)] m-auto py-10 xl:px-36 grid xl:grid-cols-2 items-center md:grid-cols-1 px-5 relative"
    v-if="product.id"
  >
    <nuxt-link to="/products/" class="xl:absolute xl:top-10 xl:left-36 mb-10">
      <btn>返回商品頁</btn>
    </nuxt-link>
    <!-- 圖片區 -->
    <div class="xl:w-[500px]">
      <!-- 大圖 -->
      <div class="">
        <img :src="showMainImg" :alt="'圖片：' + showMainImg" />
      </div>
      <!-- 小圖 -->
      <div class="flex justify-evenly items-center m-10">
        <img
          v-for="(item, idx) in product.images"
          :key="idx"
          :src="item"
          :alt="'img' + idx"
          class="w-1/6 object-cover object-center"
          @click="changMainImg(idx)"
        />
      </div>
    </div>

    <!-- 文字區 -->
    <div class="flex flex-col gap-36">
      <!-- 標題和收藏 -->
      <div>
        <h2 class="text-3xl mb-10 mb:text-center">{{ product.title }}</h2>
        <p class="text-red-600 font-semibold">$ {{ product.price }} 元</p>
        <btn
          class="flex items-center justify-center mt-10"
          @click="addToFavourite(product)"
          >{{ isFavouriteIn(product.id, 0) }}
          <i
            class="fa-heart ml-2 text-lg cursor-pointer text-red-500"
            :class="isFavouriteIn(product.id, 1)"
          ></i>
        </btn>
      </div>
      <!-- 購物車 -->
      <div class="flex items-center gap-5 text-center -mt-20 xl:-mt-0">
        <btn class="w-[35px] text-2xl" @click="editCount(0)">－</btn>
        <span>{{ count }}</span>
        <btn class="w-[35px] text-2xl" @click="editCount(1)">＋</btn>
        <btn class="ml-5" @click="addToCart(product)">加入購物車</btn>
      </div>
      <!-- 描述 -->
      <div class="-mt-20 xl:-mt-0">
        <h3 class="text-2xl bg-yellow-900 text-center mb-5">商品描述</h3>
        <div>
          <p class="text-white">{{ product.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <section
    v-if="notProduct"
    class="xl:container xl:h-[calc(100vh-65px-106px)] m-auto py-10 xl:px-36 px-5 text-center flex items-center justify-center"
  >
    <div class="w-[80%] h-[80%]">
      <p class="text-white text-2xl mb-10">未找到商品</p>
      <nuxt-link to="/products/">
        <btn>返回商品頁</btn>
      </nuxt-link>
    </div>
  </section>
</template>

<script setup>
import { onBeforeMount, reactive, computed } from "vue";
import btn from "@/components/button.vue";
import { userStore } from "@/store/index";
components: {
  btn;
}

const route = useRoute();
const store = userStore();
const product = reactive({});
const showMainImg = ref();
const count = ref(1);
const notProduct = ref(false);

//* 點小圖換大圖
const changMainImg = (idx) => {
  showMainImg.value = product.images[idx];
};

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
};

//* 收藏文字和愛心變化
const isFavouriteIn = computed(() => (id, type) => {
  const data = store.favourite.some((e) => e.id === id);
  if (type) {
    return data ? "fa-solid" : "fa-regular";
  } else {
    return data ? "已收藏" : "加入收藏";
  }
});

//* 增加數量
const editCount = (type) => {
  if (type) {
    count.value++;
  } else {
    count.value === 1 ? (count.value = 1) : count.value--;
  }
};

//* 加入購物車
const addToCart = (item) => {
  const data = store.cart.some((e) => e.id === item.id);
  if (!data) {
    Object.assign(item, { count: count.value });
    store.addToCart(item);
    alert("已加入購物車");
  } else {
    store.editCartCount(item, count.value);
    alert("已修改購物車內數量");
  }
};

onBeforeMount(() => {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((result) => {
      const data = result.find((item) => item.id == route.params.id);
      if (data) {
        Object.assign(product, data);
        showMainImg.value = product.images[0];
        useHead({
          title: `蘭丸燒烤 | ${product.title}`,
          meta: [
            {
              name: "description",
              content: "description",
            },
          ],
        });

      } else {
        notProduct.value = true;
      }
    })
    .catch((error) => {
      console.log(error);
    });
 
});
</script>
