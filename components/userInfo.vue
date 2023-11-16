<template>
  <section class="my-5">
    <VeeForm @submit="submit">
      <ul
        class="w-[600px] h-[calc(100vh-65px-145px)] mx-auto bg-gray-100 border-2 border-yellow-800 py-5"
        v-if="isLoggedIn"
      >
        <!-- 圖片 -->
        <li class="relative" id="userImg">
          <img
            :src="UserImg"
            :alt="userData.name"
            class="w-[150px] h-[150px] rounded-[100px] mx-auto mt-10 mb-20 border-4 border-yellow-800 object-cover object-center"
          />

          <!-- 更換圖片按鈕燈箱 -->
          <div
            class="bg-gray-900/50 rounded-[100px] w-[150px] h-[150px] flex items-center justify-center absolute inset-0 m-auto cursor-pointer"
            id="changUserImg"
            @click="openChangImgBox = !openChangImgBox"
          >
            <p class="text-white font-bold">更換圖片</p>
          </div>

          <!-- 輸入網址彈窗 -->
          <infoBox v-if="openChangImgBox">
            <!-- 內容 -->
            <p class="text-center mt-5 font-bold text-red-400">
              請輸入含有【.jpg，.jpeg，.png】的圖片網址
            </p>
            <!-- 輸入框 -->
            <div class="grid grid-cols-[100px,1fr,60px] mx-auto gap-2 mt-12">
              <p class="text-right">網址：</p>
              <div>
                <VeeField
                  type="url"
                  name="imgUrl"
                  :rules="{
                    regex:
                      /^(?=.*[A-Za-z])(?=.*\d)(https?:\/\/.*\.(?:png|jpg|jpeg|))$/,
                  }"
                  label="網址"
                  v-model="newUserImg"
                  class="w-full h-[20px] px-2 py-4 text-black border border-gray-400/50"
                />
                <VeeErrorMessage
                  name="imgUrl"
                  class="text-red-500 mx-1 errors-msg"
                />
              </div>
            </div>
            <div class="text-center mt-6">
              <btn
                type="button"
                @click="openChangImgBox = !openChangImgBox"
                class="mr-10"
                >取消</btn
              >
              <btn type="button" @click="changUserImg">預覽</btn>
            </div>
          </infoBox>
        </li>

        <!-- 姓名 -->
        <li class="grid grid-cols-[100px,1fr] mx-auto gap-2 mb-10 w-[80%]">
          <p class="text-right">姓名：</p>
          <p>{{ store.data.userData.name }}</p>
        </li>

        <!-- Email -->
        <li class="grid grid-cols-[100px,1fr] mx-auto gap-2 mb-10 w-[80%]">
          <p class="text-right">電子信箱：</p>
          <p>{{ store.data.userData.email }}</p>
        </li>

        <!-- 密碼 -->
        <li class="grid grid-cols-[100px,1fr,60px] mx-auto gap-2 mb-10 w-[80%]">
          <p class="text-right">密碼：</p>
          <div>
            <VeeField
              type="password"
              name="oldPassword"
              v-model="oldPassword"
              label="密碼"
              :rules="passwordRules()"
              :disabled="passwordDisabled"
              placeholder="請輸入舊密碼"
              class="w-full h-[20px] px-2 py-4 text-black border border-gray-400/50"
            />
            <VeeErrorMessage
              name="oldPassword"
              class="text-red-500 mx-1 errors-msg"
            />
          </div>
          <btn type="button" class="w-[60px] h-[30px]" @click="changPassword"
            >更改</btn
          >
        </li>

        <!-- 新密碼 -->
        <li class="grid grid-cols-[100px,1fr,60px] mx-auto gap-2 mb-10 w-[80%]">
          <p class="text-right">新密碼：</p>
          <div>
            <VeeField
              type="password"
              name="newPassword"
              placeholder="請輸入包含1個英文及8位數字密碼"
              label="新密碼"
              :rules="passwordRules()"
              :disabled="passwordDisabled"
              class="w-full h-[20px] px-2 py-4 text-black border border-gray-400/50"
            />
            <VeeErrorMessage
              name="newPassword"
              class="text-red-500 mx-1 errors-msg"
            />
          </div>
        </li>

        <!-- 確認新密碼 -->
        <li class="grid grid-cols-[100px,1fr,60px] mx-auto gap-2 mb-10 w-[80%]">
          <p class="text-right">確認新密碼：</p>
          <div>
            <VeeField
              type="password"
              name="confirmation"
              placeholder="請輸入包含1個英文及8位數字密碼"
              label="確認新密碼"
              :rules="{
                required: !passwordDisabled,
                confirmed: '@newPassword',
              }"
              :disabled="passwordDisabled"
              class="w-full h-[20px] px-2 py-4 text-black border border-gray-400/50"
            />
            <VeeErrorMessage
              v-if="!passwordDisabled"
              name="confirmation"
              class="text-red-500 mx-1 errors-msg"
            />
          </div>
        </li>

        <!-- 送出 -->
        <div class="text-center mt-20">
          <btn>送出更改</btn>
        </div>
      </ul>
    </VeeForm>
  </section>
</template>

<script setup>
//! ----------宣告引入------------
//? store用
import { userStore } from "@/store/index";
const store = userStore();

import btn from "@/components/button.vue";
import infoBox from "@/components/infoBox.vue";
import { ref, reactive, computed, onMounted } from "vue";

components: {
  btn;
  infoBox;
}

//!  ----------變數------------
const passwordDisabled = ref(true);
const openChangImgBox = ref(false);
const UserImg = ref(null);
const newUserImg = ref("");


//!  ----------功能------------
//* 換會員圖片(預覽)
const changUserImg = () => {
  if (newUserImg.value.length > 10) {
    UserImg.value = newUserImg.value;
    newUserImg.value = "";
    openChangImgBox.value = !openChangImgBox.value;
  }
};

//* 開啟變更密碼
const changPassword = () => {
  passwordDisabled.value = !passwordDisabled.value;
};

//* 依是否變更密碼來定義表單驗證規則
const passwordRules = () => {
  if (!passwordDisabled.value) {
    return {
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      required: "required",
      min: "8",
      max: "16",
    };
  } else {
    return null;
  }
};

//* 是否有登入
const userData = computed(() => {
  if (store.data.userData) {
    return store.data.userData;
  } else {
    return null;
  }
});
const isLoggedIn = computed(() => {
  if (store.data.userData) {
    return true;
  } else {
    return false;
  }
});

//* v-model會員密碼[*]代替
const oldPassword = computed(() => {
  if (passwordDisabled.value) {
    return "*".repeat(store.data.userData.password.length);
  } else {
    return null;
  }
});

//* 修改資料API
const submit = (value) => {
  //! 驗證舊密碼是否相同
  if (
    value.oldPassword === store.data.userData.password ||
    passwordDisabled.value
  ) {
    fetch(`https://api.escuelajs.co/api/v1/users/${store.data.userData.id}`, {
      method: "PUT",
      body: JSON.stringify({
        email: store.data.userData.email,
        name: store.data.userData.name,
        avatar: UserImg.value,
        password: value.newPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then(async (result) => {
        const userSessionStorage = sessionStorage.getItem("userData");
        if (userSessionStorage) {
          sessionStorage.setItem("userData", JSON.stringify(result));
        } else {
          localStorage.setItem("userData", JSON.stringify(result));
        }
        await store.login(result);
        alert("更改成功");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    alert("舊密碼錯誤");
  }
};

onMounted(() => {
  UserImg.value = store.data.userData.avatar;
});
</script>

<style lang="scss" scoped>
#userImg {
  &:hover > #changUserImg {
    display: flex;
  }

  #changUserImg {
    display: none;
  }
}
</style>
