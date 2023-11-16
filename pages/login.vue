<template>
  <login @toSignUp="handleTo" v-if="!toSignUp"></login>

  <singUp @toLogin="handleTo" v-if="toSignUp"></singUp>
</template>

<script setup>
import login from "@/components/loginComponent.vue";
import singUp from "@/components/singUp.vue";
import { ref, onBeforeMount } from "vue";

components: {
  login;
  singUp;
}

const toSignUp = ref(false);

const handleTo = (value) => {
  toSignUp.value = value;
};

onBeforeMount(() => {
  fetch("https://api.escuelajs.co/api/v1/users")
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
