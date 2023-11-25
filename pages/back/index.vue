<template>
  <section class="w-[800px] h-[100vh] m-auto flex justify-center items-center">
    <div class="w-full">
      <h1 class="text-3xl text-center bg-yellow-900/80 py-5">後台管理</h1>
      <VeeForm @submit="submit" :validation-schema="schema">
        <ul
          class="bg-white flex justify-center items-center flex-col gap-10 py-24"
        >
          <li>
            <p>後台帳號與密碼固定為：111</p>
          </li>
          <li class="flex justify-center items-center">
            <label for="id">帳號：</label>
            <VeeField type="text" id="id" name="id" />
          </li>
          <li class="flex justify-center items-center">
            <label for="password">密碼：</label>
            <VeeField type="password" id="password" name="password" />
          </li>
          <li class="mt-5">
            <btn></btn>
          </li>
        </ul>
      </VeeForm>
    </div>
  </section>
</template>

<script setup>
import btn from "../../components/button.vue";
import { ref } from "vue";
import { userStore } from "@/store/index";
import { useRouter } from "vue-router";
const router = useRouter();
const store = userStore();

components: {
  btn;
}
definePageMeta({
  closeLayouts: true,
});

//* 定義驗證表單規則
const schema = {
  id: "required",
  password: `required`,
};

const id = ref(111);
const password = ref(111);

const submit = (value) => {
  if (value.id == id.value && value.password == password.value) {
    sessionStorage.setItem("backUserData", JSON.stringify(value));
    store.backUserLogin(value);
    router.push("/back/productMg");
  } else {
    alert("帳號密碼錯誤");
  }
};
</script>

<style scoped lang="scss">
label {
  font-size: 18px;
}
input {
  color: black;
  font-size: 18px;
  border: 2px solid rgb(164, 160, 160);
  padding-left: 2px;
}
</style>
