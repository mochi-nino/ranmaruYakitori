<template>
  <section class="h-[calc(100vh-65px-106px)] flex items-center">
    <div class="xl:w-1/3 md:container m-auto w-full px-5">
      <h1 class="text-4xl text-center bg-yellow-900/75 py-3">會員登入</h1>
      <!-- 輸入區塊 -->
      <VeeForm @submit="submit" :validation-schema="schema">
        <div
          class="bg-gray-200 flex justify-center items-center flex-col gap-10 p-10"
        >
          <!-- email -->
          <div>
            <span class="mr-2 border-black">
              <i class="fa-solid fa-user" style="color: rgb(113, 63, 18)"></i>
            </span>
            <VeeField
              type="email"
              name="email"
              placeholder="請輸入信箱"
              label="E-mail"
              class="w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"
            />
            <VeeErrorMessage name="email" class="text-red-500 block px-6" />
          </div>
          <!-- 密碼 -->
          <div>
            <span class="mr-2">
              <i class="fa-solid fa-lock" style="color: rgb(113, 63, 18)"></i>
            </span>
            <VeeField
              type="password"
              name="password"
              placeholder="請輸入密碼"
              label="密碼"
              maxLength="16"
              class="w-[350px] h-[45px] px-2 py-4 text-black border border-gray-400/50"
            />
            <VeeErrorMessage name="password" class="text-red-500 block px-6" />
          </div>
          <!-- 記住我 -->
          <div class="text-center">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              class="w-[15px] h-[15px]"
              v-model="remember"
            />
            <label for="checkbox" class="text-black mx-2">記住我</label>
            <p
              class="text-black cursor-pointer mt-1 hover:text-yellow-700"
              @click="handleClick(true)"
            >
              註冊
            </p>
            <!-- 按鈕 -->
            <btn class="mt-5"></btn>
          </div>
        </div>
      </VeeForm>
    </div>
  </section>
</template>

<script setup>
//! ----------宣告引入------------
//? store用
import { userStore } from "@/store/index";
const store = userStore();

//? 路由器
import { useRouter } from "vue-router";
const router = useRouter();

import btn from "@/components/button.vue";
import { ref } from "vue";

components: {
  btn;
}

//! ----------變數------------
const remember = ref(false);

//* 定義驗證表單規則
const schema = {
  email: "required|email",
  password: `required`,
};

//! ----------功能------------

//* 子傳父(切換註冊)
const emitToSignUp = defineEmits(["toSignUp"]);
const handleClick = (value) => {
  emitToSignUp("toSignUp", value);
};

//* 登入
const submit = (value) => {
  fetch("https://api.escuelajs.co/api/v1/users")
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      //? 驗證是否與輸入的值相同
      const userDataResearch = result.filter(
        (item) => value.email === item.email && value.password === item.password
      );

      if (userDataResearch.length !== 0) {
        const userData = {
          email: userDataResearch[0].email,
          password: userDataResearch[0].password,
          avatar: userDataResearch[0].avatar,
          creationAt: userDataResearch[0].creationAt,
          id: userDataResearch[0].id,
          name: userDataResearch[0].name,
          role: userDataResearch[0].role,
          updatedAt: userDataResearch[0].updatedAt,
        };
        if (remember.value) {
          localStorage.setItem("userData", JSON.stringify(userData));
        } else {
          sessionStorage.setItem("userData", JSON.stringify(userData));
        }
        store.login(userData);
        alert("登入成功");
        router.push("/");
      } else {
        alert("信箱或密碼錯誤，請重新輸入");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
