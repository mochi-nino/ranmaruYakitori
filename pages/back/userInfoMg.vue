<template>
  <section class="flex items-center gap-24 h-[100vh] w-[90%] m-auto">
    <backSlider></backSlider>
    <div class="text-xl bg-slate-100 w-full relative">
      <h1 class="bg-yellow-900 py-3 text-center text-3xl">會員管理</h1>
      <ul>
        <li
          class="grid grid-cols-[100px,1fr,1fr,1fr,150px] items-center justify-center text-center border-y-2 border-black p-2 mb-2"
        >
          <p v-for="(title, tableTitleIdx) in title" :key="tableTitleIdx">
            {{ title }}
          </p>
        </li>

        <li class="h-[800px] overflow-y-auto overflow-x-hidden" id="scrollArea">
          <div v-for="(user, userIdx) in usersData" :key="userIdx">
            <VeeForm @submit="submit">
              <div
                class="mb-4 grid grid-cols-[100px,1fr,1fr,1fr,150px] items-center justify-center text-center px-2 text-lg h-[100px]"
                :class="editingGackGroundColor(user.id)"
              >
                <!-- ID -->
                <div class="flex justify-center items-center relative">
                  <div class="relative">
                    <p
                      v-if="user.id === 1 || user.id === 2 || user.id === 3"
                      class="text-red-600 cursor-help absolute -top-3 -left-2"
                      @mouseover="redStarTips(userIdx, user.id)"
                      @mouseout="redStarTipsBox = false"
                    >
                      *
                    </p>
                    <p
                      class="absolute text-sm bg-amber-200 p-1 w-[200px] -left-2 top-5"
                      v-if="redStarTipsBoxIdx === user.id && redStarTipsBox"
                    >
                      API預設為無法變更此會員資料
                    </p>
                  </div>

                  <p class="px-2 py-[2px] text-center">
                    {{ user.id }}
                  </p>

                  <VeeField
                    type="text"
                    name="id"
                    class="hidden px-2 py-[2px] text-center w-full"
                    disabled="true"
                    v-model="user.id"
                  >
                  </VeeField>
                </div>

                <!-- Email -->
                <div class="w-[90%] m-auto">
                  <VeeField
                    type="text"
                    name="email"
                    :placeholder="user.email"
                    class="block px-2 py-[2px] text-center w-full"
                    :disabled="editIdx === user.id ? false : true"
                    v-model="user.email"
                  >
                  </VeeField>
                </div>

                <!-- 會員名稱 -->
                <div class="w-[90%] m-auto">
                  <VeeField
                    type="text"
                    name="name"
                    :placeholder="user.name"
                    class="block px-2 py-[2px] text-center w-full"
                    :disabled="editIdx === user.id ? false : true"
                    v-model="user.name"
                  >
                  </VeeField>
                </div>

                <!-- 創建日期 -->
                <div class="w-[90%] m-auto">
                  <p>{{ showCreationdate(user.creationAt) }}</p>
                </div>

                <!-- 更改按鈕 -->
                <div class="m-auto px-2" v-if="editIdx !== user.id">
                  <btn
                    class="!w-[50px] !text-lg"
                    type="button"
                    @click="allowEdit(0, user.id)"
                    >更改</btn
                  >
                </div>

                <!-- 確定取消刪除按鈕 -->
                <div v-else class="flex items-center justify-center gap-4">
                  <btn class="!w-[50px] !text-lg">確定</btn>
                  <btn
                    class="!w-[50px] !text-lg"
                    type="button"
                    @click="allowEdit(1, user.id)"
                    >取消</btn
                  >
                </div>
              </div>
            </VeeForm>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import backSlider from "../../components/backSlider.vue";
import btn from "../../components/button.vue";
import { onBeforeMount, reactive, ref, computed, nextTick } from "vue";
components: {
  backSlider;
  btn;
}
definePageMeta({
  closeLayouts: true,
});

const title = reactive([
  "會員編號",
  "會員信箱",
  "會員名稱",
  "創建日期",
  "",
  "",
]);

const usersData = reactive([]);

const editIdx = ref("");

const redStarTipsBox = ref(false);

const redStarTipsBoxIdx = ref(0);

const redStarTips = (idx, id) => {
  redStarTipsBoxIdx.value = id;
  if (redStarTipsBoxIdx.value === id) {
    redStarTipsBox.value = true;
  }
};

//* 開啟可修改條件
const allowEdit = (allow, id) => {
  if (!allow) {
    editIdx.value = id;
  } else {
    editIdx.value = "";
  }
};

const showCreationdate = (date) => {
  return date.substring(0, 10);
};

const editingGackGroundColor = computed(() => (id) => {
  return editIdx.value === id ? "bg-yellow-700/30" : null;
});

const updateUserInfo = async (value) => {
  await fetch(`https://api.escuelajs.co/api/v1/users/${value.id}`, {
    method: "PUT",
    body: JSON.stringify(value),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.message) {
        alert("權限不足，該會員無法進行修改，請修改 * 以外的會員");
        getUserData();
        editIdx.value = "";
      } else {
        alert("修改成功");
        getUserData();
        editIdx.value = "";
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const getUserData = () => {
  fetch("https://api.escuelajs.co/api/v1/users")
    .then((res) => res.json())
    .then((result) => {
      usersData.length = 0;
      usersData.push(...result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const submit = (value) => {
  updateUserInfo(value);
};

onBeforeMount(() => {
  getUserData();
  console.log(usersData);
});
</script>

<style lang="scss" scoped>
input {
  color: black;
}

input:disabled {
  background-color: rgb(241, 245, 249);
  color: black;
}

select:disabled {
  background-color: rgb(241, 245, 249);
}
</style>
