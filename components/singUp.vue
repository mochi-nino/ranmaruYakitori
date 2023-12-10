<template>
  <section class="xl:h-[calc(100vh-65px-106px)] flex items-center xl:p-5 py-5">
    <div class="xl:w-[50%] md:container m-auto w-full">
      <h1 class="text-4xl text-center bg-yellow-900/75 py-3">會員註冊</h1>
      <!-- 輸入區塊 -->
      <VeeForm @submit="submit">
        <ul
          class="bg-gray-200 flex justify-center items-center flex-col gap-10 p-10"
        >
          <!-- 設定E-mail -->
          <li>
            <label for="" class="w-[80px] inline-block xl:text-right"
              >信箱：</label
            >
            <VeeField
              type="email"
              name="email"
              placeholder="請輸入信箱"
              label="E-mail"
              rules="required|email"
              class="w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"
            />
            <VeeErrorMessage name="email" class="text-red-500 block xl:mx-20" />
          </li>

          <!-- 設定密碼 -->
          <li>
            <label for="" class="w-[80px] inline-block xl:text-right"
              >密碼：</label
            >
            <VeeField
              type="password"
              name="password"
              placeholder="請輸入包含1個英文及8位數字密碼"
              label="密碼"
              :rules="{
                regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                required: 'required',
                min: 8,
                max: 16,
              }"
              class="w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"
            />
            <VeeErrorMessage
              name="password"
              class="text-red-500 block xl:mx-20"
            />
          </li>

          <!-- 確認密碼 -->
          <li>
            <label for="" class="w-[80px] inline-block xl:text-right"
              >確認密碼：</label
            >
            <VeeField
              type="password"
              name="confirmation"
              placeholder="請輸入包含1個英文及8位數字密碼"
              label="確認密碼"
              rules="required|confirmed:@password"
              class="w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"
            />
            <VeeErrorMessage
              name="confirmation"
              class="text-red-500 block xl:mx-20"
            />
          </li>

          <!-- 姓名 -->
          <li>
            <label for="" class="w-[80px] inline-block xl:text-right"
              >姓名：</label
            >
            <VeeField
              type="text"
              name="name"
              placeholder="請輸入姓名"
              label="姓名"
              rules="required"
              class="w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"
            />
            <VeeErrorMessage name="name" class="text-red-500 block xl:mx-20" />
          </li>
          <!-- 按鈕 -->
          <li class="text-center">
            <btn>註冊</btn>
            <p
              class="cursor-pointer mt-1 hover:text-yellow-700 mt-2"
              @click="handleClick(false)"
            >
              已經是會員嗎？按此登入
            </p>
          </li>
        </ul>
      </VeeForm>
    </div>
  </section>
</template>

<script setup>
//! ----------宣告引入------------
//? 路由用
import { useRouter } from "vue-router";
const router = useRouter();

import btn from "@/components/button.vue";
components: {
  btn;
}

//! ----------功能------------
//* 子傳父(切換登入)
const emitToLogin = defineEmits(["toLogin"]);
const handleClick = (value) => {
  emitToLogin("toLogin", value);
};

//* 註冊API
const submit = (value) => {
  fetch("https://api.escuelajs.co/api/v1/users/", {
    method: "POST",
    body: JSON.stringify({
      name: value.name,
      email: value.email,
      password: value.password,
      avatar: "https://picsum.photos/800",
    }),
    //! 以JSON格式返回
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log("成功", result);
      alert("註冊成功");
      location.reload();
    })
    .catch((error) => {
      console.log("錯誤", error);
    });
};

useHead({
  title: `蘭丸燒烤 | 註冊`,
  meta: [
    {
      name: "description",
      content: "description",
    },
  ],
});
</script>
