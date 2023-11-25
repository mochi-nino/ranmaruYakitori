<template>
  <header class="bg-yellow-900/75 relative">
    <section class="flex justify-between xl:container mx-auto text-white">
      <!-- logo -->
      <div class="logo py-2">
        <nuxt-link to="/home" class="text-4xl font-black flex gap-4 items-center">
          <img
            src="@/public/logo.png"
            alt="logo"
            class="w-28 z-[90]"
            :class="openHBFixed('logo')"
          />
          <div class="font-mono text-center tracking-wider hidden xl:block">
            <h1>蘭丸串燒</h1>
            <p class="my-1 title-p text-white">焼き鳥</p>
          </div>
        </nuxt-link>
      </div>

      <!-- Nav -->
      <nav class="items-center xl:flex">
        <ul
          class="flex text-xl font-medium xl:gap-12 xl:justify-between items-center"
        >
          <li class="hidden xl:block">
            <nuxt-link to="/products/">商店</nuxt-link>
          </li>
          <li class="hidden xl:block" v-if="!isLoggedIn">
            <nuxt-link to="/login">登入</nuxt-link>
          </li>
          <li class="hidden xl:block" v-if="isLoggedIn">
            <nuxt-link to="/user">
              <img
                :src="userData.avatar"
                :alt="userData.name"
                class="w-[50px] h-[50px] rounded-[50px] object-cover object-center"
              />
            </nuxt-link>
          </li>
          <li class="hidden xl:block" v-if="isLoggedIn">
            <p class="text-white cursor-pointer" @click="logOut">登出</p>
          </li>
          <li
            @click="openFavouriteBox"
            class="relative leading-[105px] ml-48 xl:leading-normal xl:ml-0"
          >
            <i class="fa-solid fa-heart" style="color: #ff000a"></i>

            <!-- 收藏清單 -->
            <div
              class="bg-white w-[350px] h-[350px] overflow-auto absolute z-10 -right-16 px-2 border-4 border-yellow-800 xl:-right-20 xl:top-12"
              v-if="isFavoriteOpen"
              @click.stop
            >
              <ul>
                <li v-for="(item, idx) in favourites" :key="idx">
                  <nuxt-link
                    :to="`/products/${item.id}`"
                    :params="{ id: item.id }"
                    @click="openFavouriteBox"
                  >
                    <div
                      class="flex justify-between items-center gap-2 text-sm my-2 border-y-2"
                    >
                      <div class="w-[50px] h-[50px]">
                        <img
                          :src="item.images[0]"
                          :alt="item.title"
                          class="w-full h-full object-cover object-center"
                        />
                      </div>
                      <span class="block break-words w-1/2">{{
                        item.title
                      }}</span>
                      <span>${{ item.price }}</span>
                      <i
                        class="fa-solid fa-trash"
                        style="color: #000000"
                        @click.stop.prevent="removeFavourite(item)"
                      ></i>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
              <div class="text-center text-red-500 mt-10">{{ isFavorite }}</div>
            </div>
          </li>
          <li class="relative hidden xl:block">
            <nuxt-link to="/cart">
              <i class="fa-solid fa-cart-shopping" style="color: #ffffff"></i>
            </nuxt-link>
            <div
              class="w-[18px] h-[18px] bg-red-500 rounded-[50px] absolute -top-2 -right-3 flex justify-center items-center text-[14px]"
              v-if="showCartCount"
            >
              {{ store.cart.length }}
            </div>
          </li>
        </ul>
      </nav>

      <!-- 漢堡 -->
      <div
        class="flex justify-center items-center flex-col gap-2 xl:hidden px-5 z-[99]"
        :class="openHBFixed('hb')"
        @click="store.openHB = !store.openHB"
      >
        <span
          class="w-[35px] h-[5px] bg-white transition-all"
          :class="changHB(1)"
        ></span>
        <span
          class="w-[35px] h-[5px] bg-white transition-all"
          :class="changHB(2)"
        ></span>
        <span
          class="w-[35px] h-[5px] bg-white transition-all"
          :class="changHB(3)"
        ></span>
      </div>

      <!-- 漢堡內頁 -->

      <nav
        class="flex items-center fixed w-full z-[50] xl:hidden"
        v-if="store.openHB"
      >
        <ul
          class="flex flex-col justify-evenly text-center text-2xl font-medium bg-yellow-900 w-full h-[100vh]"
        >
          <li class="border-b-2 p-5">
            <nuxt-link to="/products/">商店</nuxt-link>
          </li>
          <li class="border-b-2 p-5" v-if="!isLoggedIn">
            <nuxt-link to="/login">登入</nuxt-link>
          </li>
          <li class="border-b-2 p-5" v-if="isLoggedIn">
            <nuxt-link to="/user">
              <p class="text-white">會員中心</p>
            </nuxt-link>
          </li>
          <li class="border-b-2 p-5" v-if="isLoggedIn">
            <p class="text-white cursor-pointer" @click="logOut">登出</p>
          </li>
          <li class="border-b-2 p-5 relative flex items-center justify-center">
            <nuxt-link to="/cart">
              <p class="text-white">購物車</p>
            </nuxt-link>
            <div
              class="w-[18px] h-[18px] bg-red-500 rounded-[50px] flex justify-center items-center text-[14px] ml-2"
              v-if="showCartCount"
            >
              {{ store.cart.length }}
            </div>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script setup>
//! ----------宣告引入------------
//? store用
import { userStore } from "@/store/index";
const store = userStore();

//? 路由
import { useRouter } from "vue-router";
const router = useRouter();

//? Vue3
import { onMounted, computed, ref } from "vue";
const openFavourites = ref(false);
const hb = ref(true);

//! ----------功能------------
//* 登出
const logOut = async () => {
  store.logOut();
  alert("登出成功");
  router.push("/login");
};

//* 判斷有無登入
const isLoggedIn = computed(() => {
  return !!store.data.userData;
});

//* 判斷有無收藏
const isFavorite = computed(() => {
  return store.favourite.length <= 0 ? "目前沒有任何收藏" : null;
});

//* 收藏彈窗
const isFavoriteOpen = computed(() => {
  return !!store.openFavouriteBox;
});

const openFavouriteBox = () => {
  store.openFavouriteBox = !store.openFavouriteBox;
};

//* 判斷購物車有無資料
const showCartCount = computed(() => {
  return !!store.cart.length > 0;
});

const emitLoading = defineEmits(["loading"]);

//* DOM資料computed
const userData = computed(() => {
  if (store.data.userData) {
    return store.data.userData;
  } else {
    return null;
  }
});

const favourites = computed(() => {
  if (store.favourite) {
    return store.favourite;
  } else {
    return null;
  }
});

//* 刪收藏
const removeFavourite = (item) => {
  store.removeFromFavourite(item);
};

//* logo跟hb固定fixed
const openHBFixed = computed(() => (type) => {
  if (store.openHB) {
    if (type === "logo") {
      return "fixed top-2";
    } else {
      return "fixed top-10 right-0";
    }
  }
});

//* hb動畫
const changHB = computed(() => (idx) => {
  if (idx === 1 && store.openHB) {
    return "-rotate-[135deg] translate-y-1";
  } else if (idx === 2 && store.openHB) {
    return "hidden";
  } else if (idx === 3 && store.openHB) {
    return "rotate-[135deg] -translate-y-2";
  }
});

//* 抓資料
const getUserDataFromStorage = () => {
  const userLocalStorage = localStorage.getItem("userData");
  const userSessionStorage = sessionStorage.getItem("userData");

  if (userSessionStorage) {
    store.login(JSON.parse(userSessionStorage));
  } else {
    store.login(JSON.parse(userLocalStorage));
  }
};

const getFavouriteFromStorage = () => {
  const favLocalStorage = localStorage.getItem("favourite");

  if (favLocalStorage) {
    store.getFavourite(JSON.parse(favLocalStorage));
  }
};

const getCartData = () => {
  const data = JSON.parse(localStorage.getItem("cart"));
  if (data) {
    store.getCart(data);
  }
};

//* Mounted 獲取會員資料
onMounted(() => {
  getUserDataFromStorage();
  getFavouriteFromStorage();
  getCartData();
  emitLoading("loading", false);
});
</script>

<style lang="scss" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";

ul {
  li {
    a,
    p {
      &:hover {
        color: skyblue;
      }
    }
    span {
      color: black;
    }
  }
}
</style>
