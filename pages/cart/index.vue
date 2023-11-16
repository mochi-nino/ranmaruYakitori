<template>
  <section class="xl:w-[1280px] m-auto py-10">
    <!-- 購物車 -->
    <div class="w-[80%] mx-auto">
      <h2 class="text-3xl text-center bg-yellow-900/75 py-3">購物車</h2>
      <ul class="bg-white">
        <!-- 標題 -->
        <li
          class="grid grid-cols-6 justify-between items-center py-5 px-2 text-center font-bold text-lg"
        >
          <div class="w-[150px]"></div>
          <p>名稱</p>
          <p>單價</p>
          <p>數量</p>
          <p>總價</p>
          <p>刪除</p>
        </li>
        <!-- 清單 -->
        <li
          v-for="(item, idx) in cartList"
          :key="idx"
          v-if="isCartIn"
          class="grid grid-cols-6 justify-between items-center p-2"
        >
          <!-- 圖片 -->
          <div class="w-[150px] h-[150px]">
            <img
              :src="item.images[0]"
              :alt="item.title"
              class="w-full h-full object-cover object-center"
            />
          </div>
          <!-- 單價 -->
          <h3 class="text-black text-center">{{ item.title }}</h3>
          <div class="text-center">
            <p>${{ item.price }}</p>
          </div>
          <!-- 數量 -->
          <div class="flex justify-center items-center gap-5">
            <btn
              class="w-[35px] text-2xl"
              @click="editCount(0, item, item.count)"
              >－</btn
            >
            <p>{{ item.count }}</p>
            <btn
              class="w-[35px] text-2xl"
              @click="editCount(1, item, item.count)"
              >＋</btn
            >
          </div>
          <!-- 總價 -->
          <div class="text-center">
            <p>${{ item.price * item.count }}</p>
          </div>
          <!-- 刪除 -->
          <div class="text-center px-10">
            <i
              class="fa-solid fa-trash"
              style="color: #000000"
              @click="removeFromCart(item)"
            ></i>
          </div>
        </li>
      </ul>
      <!-- 小計 -->
      <div
        class="text-2xl text-white text-right bg-yellow-900/75 py-2 px-5 tracking-wider"
      >
        小計$
        <span class="text-red-500 font-bold">
          {{ subTotal }}
        </span>
        元
      </div>

      <!-- 結帳 -->
      <div class="text-right mt-10">
        <nuxt-link to="/products">
          <btn class="mr-5">繼續購物</btn>
        </nuxt-link>

        <nuxt-link
          :to="`/cart/payment/${randomParams}`"
          :params="{ id: randomParams }"
          v-if="isCartIn"
        >
          <btn class="mr-5">前往結帳</btn>
        </nuxt-link>
      </div>
    </div>

    <!-- 總計 -->
    <!-- <div class="w-[80%] mx-auto">
      <h2 class="text-2xl text-center bg-yellow-900/75 py-2">總計</h2>
    </div> -->
  </section>
</template>

<script setup>
import { onMounted, reactive, computed, ref } from "vue";
import btn from "@/components/button.vue";
import { userStore } from "@/store/index";

components: {
  btn;
}

const store = userStore();
const cartList = ref([]);

//* 判斷資料
const isCartIn = computed(() => {
  if (store.cart.length > 0) {
    cartList.value = store.cart;
    return true;
  } else {
    return false;
  }
});

//* 增加數量
const editCount = (type, item, count) => {
  if (type) {
    console.log(item);
    count++;
    store.editCartCount(item, count);
  } else {
    if (count <= 1) {
      store.removeFromCart(item);
    } else {
      count--;
      store.editCartCount(item, count);
    }
  }
};

//* 刪除購物車
const removeFromCart = (item) => {
  store.removeFromCart(item);
};

//* 計算小計
const subTotal = computed(() => {
  return cartList.value.reduce(
    (total, { price, count }) => total + price * count,
    0
  );
});

//* 隨機產生params數
const randomParams = computed(() => {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    // charAt() 回傳指定的值
    result += characters.charAt(randomIndex);
  }
  console.log(result);
  return result;
});

onMounted(() => {});
</script>
