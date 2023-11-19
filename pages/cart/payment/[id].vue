<template>
  <section class="xl:w-[1280px] m-auto py-10">
    <!-- 結帳 -->
    <VeeForm @submit="submit">
      <div class="w-[80%] mx-auto">
        <h2 class="text-3xl text-center bg-yellow-900/75 py-3">配送</h2>
        <div class="bg-white p-16 flex items-center gap-5 mb-5">
          <input
            type="radio"
            value="宅配"
            class="w-[18px] h-[18px] rounded-[50px]"
            id="homeDelivery"
            v-model="deliveryMethod"
          />
          <label for="homeDelivery" class="text-lg">宅配</label>
        </div>

        <!-- 結帳方法 -->
        <h2 class="text-3xl text-center bg-yellow-900/75 py-3">付款</h2>
        <ul class="bg-white p-16">
          <li
            v-for="(pay, idx) in paymentMethod"
            :key="idx"
            class="flex items-center gap-5 mb-5"
          >
            <input
              type="radio"
              :value="pay.type"
              v-model="selectedPayment"
              name="payType"
              class="w-[18px] h-[18px] rounded-[50px]"
              :id="pay.type"
            />
            <label :for="pay.type" class="text-lg">{{ pay.type }}</label>
          </li>

          <!-- 信用卡區 -->
          <li v-if="inputCardInfo">
            <!-- 卡號 -->
            <div
              class="grid grid-cols-[150px,1fr] gap-2 items-center justify-center mb-4"
            >
              <label class="text-right">信用卡卡號：</label>
              <input
                type="text"
                name="cardID"
                placeholder="請輸入卡號"
                label="卡號"
                maxlength="16"
                rules="required"
                v-model="cardID"
                @input="filterNonNumeric(0)"
                class="xl:w-[300px] h-[40px] px-2 py-4 text-black border border-gray-400/50"
              />
            </div>
            <div
              class="grid grid-cols-[150px,1fr] gap-2 items-center justify-center mb-4"
              v-if="cardID.length < 16 && cardID.length !== 0"
            >
              <div></div>
              <p class="text-red-500">卡號格式錯誤</p>
            </div>

            <!-- 有效期限 -->
            <div
              class="grid grid-cols-[150px,1fr] gap-2 items-center justify-center mb-4"
            >
              <label class="text-right">有效期限：</label>
              <div>
                <VeeField
                  name="mounth"
                  as="select"
                  class="text-black border border-gray-400/50 mr-2"
                  v-model="defaultMouth"
                  rules="required"
                  label="月份"
                >
                  <option value="default" disabled>月</option>
                  <option
                    v-for="(mounth, idx) in mounth"
                    :key="idx"
                    :value="mounth"
                  >
                    {{ mounth }}
                  </option>
                </VeeField>
                <VeeField
                  name="years"
                  class="text-black border border-gray-400/50"
                  v-model="defaultYear"
                  as="select"
                  label="年份"
                >
                  <option value="default" disabled>年</option>
                  <option
                    v-for="(years, idx) in getyears"
                    :key="idx"
                    :value="years"
                  >
                    {{ years }}
                  </option>
                </VeeField>
              </div>
            </div>

            <!-- 安全碼 -->
            <div
              class="grid grid-cols-[150px,1fr] gap-2 items-center justify-center mb-4"
            >
              <label class="text-right">安全碼：</label>
              <div>
                <VeeField
                  type="text"
                  name="number"
                  placeholder="安全碼"
                  label="安全碼"
                  maxlength="4"
                  rules="required|max:4"
                  class="w-[100px] h-[40px] px-2 py-4 text-black border border-gray-400/50"
                />
                <VeeErrorMessage
                  name="number"
                  class="text-red-500 ml-2"
                ></VeeErrorMessage>
              </div>
            </div>
          </li>
        </ul>

        <!-- 結帳方法 -->
        <h2 class="text-3xl text-center bg-yellow-900/75 py-3 mt-5">
          填寫資料
        </h2>
        <!-- 資料表格 -->
        <ul
          class="bg-gray-200 flex justify-center items-center flex-col gap-10 p-16"
        >
          <li class="" v-for="(table, idx) in buyerInfoTable" :key="idx">
            <label
              :for="table.title"
              class="xl:w-[80px] inline-block text-right mr-2"
              >{{ table.title }}：</label
            >
            <VeeField
              :type="table.type"
              :name="table.name"
              :placeholder="table.title"
              :id="table.name"
              :label="table.title"
              :rules="table.rules"
              class="w-[300px] h-[45px] px-2 py-4 text-black border border-gray-400/50 xl:w-[350px]"
            >
            </VeeField>
            <VeeErrorMessage
              :name="table.name"
              class="text-red-500 block xl:mx-24"
            ></VeeErrorMessage>
          </li>
        </ul>

        <div class="bg-yellow-900/75 py-5 text-lg mt-5">
          <ol class="w-[150px] ml-auto">
            <li class="flex items-center gap-2 m">
              <p class="text-white">小計：</p>
              <p class="text-white">${{ store.cartTotalPrice }}</p>
            </li>
            <li class="flex items-center gap-2 my-5">
              <p class="text-white">運費：</p>
              <p class="text-white">${{ charge }}</p>
            </li>
            <li class="flex items-center gap-2">
              <p class="text-white">總計：</p>
              <p class="text-white">${{ TotalPrice }}</p>
            </li>
          </ol>
        </div>
        <div class="text-right mt-5">
          <nuxt-link to="/cart/">
            <btn class="mt-5 mr-5">返回</btn>
          </nuxt-link>
          <btn class="mt-5 mr-5">送出</btn>
        </div>
      </div>
    </VeeForm>
  </section>
</template>

<script setup>
import { ref, reactive, watchEffect, onBeforeMount } from "vue";
import btn from "@/components/button.vue";
components: {
  btn;
}
import { useRouter } from "vue-router";
import { userStore } from "@/store/index";
const router = useRouter();
const store = userStore();

//? 配送
const deliveryMethod = ref("宅配");

//? 付款
const paymentMethod = reactive([{ type: "貨到付款" }, { type: "信用卡" }]);
const selectedPayment = ref("");

//? 卡片
const cardID = ref("");
const defaultYear = ref("default");
const defaultMouth = ref("default");
const mounth = reactive([
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
]);

//? 填寫表格
const buyerInfoTable = reactive([
  { title: "收件人", type: "text", name: "recipient", rules: "required" },
  { title: "Email", type: "email", name: "email", rules: "required|email" },
  {
    title: "手機號碼",
    type: "text",
    name: "phoneNumber",
    rules: "required|min:10|max:10",
  },
  { title: "收件地址", type: "text", name: "address", rules: "required" },
]);

const orderTotalPrice = ref(0);

//* 今年年份+15年
const getyears = computed(() => {
  let result = new Date().getFullYear();
  let years = [result];

  for (let i = 0; i < 15; i++) {
    result += 1;
    years.push(result);
  }
  return years;
});

//* 打開信用卡填寫表格
const inputCardInfo = computed(() => {
  return selectedPayment.value === "信用卡" ? true : false;
});

//* 信用卡格式(只能輸入數字)
const filterNonNumeric = (type) => {
  if (!type) {
    cardID.value = cardID.value.replace(/[^0-9]/g, "");
  }
};

//* 運費
const charge = computed(() => {
  if (deliveryMethod.value === "宅配") {
    return 60;
  }
});

//* 算出總額
const TotalPrice = computed(() => {
  const price = store.cartTotalPrice.value + charge.value;
  orderTotalPrice.value = price;
  return price;
});

//* 送出
const submit = (value) => {
  if (!selectedPayment.value) {
    alert("請選擇付款方式");
  } else if (selectedPayment.value === "信用卡" && cardID.value.length < 16) {
    alert("信用卡格式錯誤");
  } else {
    const buyerInfo = { ...value };
    const Method = {
      paymentMethod: selectedPayment.value,
      deliveryMethod: deliveryMethod.value,
      orderTotalPrice: orderTotalPrice.value,
    };
    Object.assign(buyerInfo, Method);
    console.log(buyerInfo);
    if (selectedPayment.value === "信用卡") {
      const cardIDInfo = { cardID: cardID.value };
      Object.assign(buyerInfo, cardIDInfo);
    }

    store.getBuyerInfo(buyerInfo);
    // store.cart.length = 0;
    localStorage.removeItem("cart");
    router.push("/cart/payment/finsh");
  }
};

useHead({
  title: `蘭丸燒烤 | 付款`,
  meta: [
    {
      name: "description",
      content: "description",
    },
  ],
});


onBeforeMount(() => {});
</script>
