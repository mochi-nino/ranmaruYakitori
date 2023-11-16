<template>
  <section class="xl:w-[1280px] m-auto py-10">
    <!-- 結帳 -->
    <VeeForm>
      <div class="w-[80%] mx-auto">
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
            />
            <label :for="pay.type" class="text-lg">{{ pay.type }}</label>
          </li>

          <!-- 信用卡區 -->
          <li v-if="inputCardInfo">
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
                class="w-[300px] h-[40px] px-2 py-4 text-black border border-gray-400/50"
              />
            </div>
            <div
              class="grid grid-cols-[150px,1fr] gap-2 items-center justify-center mb-4"
              v-if="cardID.length < 16 && cardID.length !== 0"
            >
              <div></div>
              <p class="text-red-500">卡號格式錯誤</p>
            </div>

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
                  as="select"
                  class="text-black border border-gray-400/50"
                  v-model="defaultYear"
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
            <div
              class="grid grid-cols-[150px,1fr] gap-2 items-center justify-center mb-4"
            >
              <label class="text-right">安全碼：</label>
              <VeeField
                type="text"
                name="number"
                placeholder="安全碼"
                label="安全碼"
                maxlength="4"
                rules="required|max:4"
                class="w-[100px] h-[40px] px-2 py-4 text-black border border-gray-400/50"
              />
            </div>
          </li>
        </ul>
      </div>
    </VeeForm>
  </section>
</template>

<script setup>
import { ref, reactive, watchEffect } from "vue";

const paymentMethod = reactive([{ type: "貨到付款" }, { type: "信用卡" }]);

const selectedPayment = ref("");
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

const getyears = computed(() => {
  let result = new Date().getFullYear();
  let years = [result];

  for (let i = 0; i < 15; i++) {
    result += 1;
    years.push(result);
  }
  return years;
});

const inputCardInfo = computed(() => {
  return selectedPayment.value === "信用卡" ? true : false;
});

const filterNonNumeric = (type) => {
  if (!type) {
    cardID.value = cardID.value.replace(/[^0-9]/g, "");
  }
};

watchEffect(() => {});
</script>
