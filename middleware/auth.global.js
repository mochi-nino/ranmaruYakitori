import { userStore } from "@/store/index";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = userStore();

  //? 如果切換頁面收藏彈窗是開的則把關掉
  if (store.openFavouriteBox) {
    store.openFavouriteBox = false;
  }

  if (to.path === "/user" && process.client) {
    const userLocalStorage = localStorage.getItem("userData");
    const userSessionStorage = sessionStorage.getItem("userData");

    if (userSessionStorage) {
      store.login(JSON.parse(userSessionStorage));
    } else if (userLocalStorage) {
      store.login(JSON.parse(userLocalStorage));
    } else {
      return navigateTo("/login");
    }
  }

  if (to.path === "/cart/payment/finsh") {
    if (store.cart.length <= 0) {
      return navigateTo("/404");
    }
  }
});
