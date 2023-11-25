<template>
  <section class="xl:w-[1280px] m-auto py-10">
    <div class="w-[80%] mx-auto" >
      <h2 class="text-3xl text-center bg-yellow-900/75 py-3">訂單完成</h2>
      <ul
        class="bg-gray-200 grid grid-cols-2 justify-center items-center gap-10 p-16 text-center"
      >
        <li>
          <p class="mb-2">配送方式：</p>
          <p>{{ buyerInfo.deliveryMethod }}</p>
        </li>
        <li>
          <p class="mb-2">結帳方式：</p>
          <p>{{ buyerInfo.paymentMethod }}</p>
        </li>
        <li v-if="buyerInfo.cardID">
          <p class="mb-2">卡號末四碼：</p>
          <p>{{ cardIDLastFourDigits }}</p>
        </li>
        <li>
          <p class="mb-2">結帳金額：</p>
          <p>${{ buyerInfo.orderTotalPrice }}</p>
        </li>
        <li>
          <p class="mb-2">訂購人：</p>
          <p>{{ buyerInfo.recipient }}</p>
        </li>
        <li>
          <p class="mb-2">Email：</p>
          <p>{{ buyerInfo.email }}</p>
        </li>
        <li>
          <p class="mb-2">手機號碼：</p>
          <p>{{ buyerInfo.phoneNumber }}</p>
        </li>
        <li>
          <p class="mb-2">地址：</p>
          <p>{{ buyerInfo.address }}</p>
        </li>
      </ul>
      <div class="text-center bg-gray-200 pb-10">
        <nuxt-link to="/home">
          <btn>返回首頁</btn>
        </nuxt-link>
      </div>

      <h2
        class="text-3xl text-center bg-yellow-900/75 py-3 cursor-pointer relative"
        @click="openBuyItems = !openBuyItems"
      >
        購買清單
        <span class="absolute right-5" :class="{ 'rotate-180': rotateIcon }"
          >▼</span
        >
      </h2>
      <transition name="fade">
        <ul class="bg-white max-h-[400px] overflow-auto" v-if="openBuyItems">
          <!-- 標題 -->
          <li
            class="grid grid-cols-5 justify-center items-center py-2 px-2 text-center font-bold text-lg"
          >
            <div class="xl:w-[100px] mr-2 xl:mx-auto"></div>
            <p>名稱</p>
            <p>單價</p>
            <p>數量</p>
            <p>總價</p>
          </li>
          <!-- 清單 -->
          <li
            v-for="(item, idx) in buyItems"
            :key="idx"
            class="grid grid-cols-5 justify-center items-center p-2"
          >
            <!-- 圖片 -->
            <div class="xl:w-[100px] xl:h-[100px] mr-2 xl:mx-auto">
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
              <p>{{ item.count }}</p>
            </div>
            <div class="text-center">
              <p>${{ item.price * item.count }}</p>
            </div>
          </li>
        </ul>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { reactive, onBeforeMount, computed, onMounted } from "vue";
import { userStore } from "@/store/index";
import btn from "@/components/button.vue";
components: {
  btn;
}
const store = userStore();
const buyerInfo = reactive({});
const buyItems = reactive([]);
const openBuyItems = ref(false);

const cardIDLastFourDigits = computed(() => {
  if (buyerInfo.cardID) {
    return buyerInfo.cardID.slice(-4);
  } else {
    return null;
  }
});

const rotateIcon = computed(() => {
  return openBuyItems.value ? true : false;
});

useHead({
  title: `蘭丸燒烤 | 訂單完成`,
  meta: [
    {
      name: "description",
      content: "description",
    },
  ],
});

onBeforeMount(() => {
  Object.assign(buyerInfo, store.buyerInfo);
  Object.assign(buyItems, store.cart);
});

onMounted(() => {
  store.cart.length = 0;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s linear;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-10%);
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
