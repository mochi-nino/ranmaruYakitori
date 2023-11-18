import { defineStore } from "pinia";
import { reactive, ref, computed } from "vue";

// 建立store
export const userStore = defineStore("main", () => {
  //? state(狀態) 類似ref(data()
  const data = reactive({
    userData: null,
  });
  const loading = ref(false);

  const favourite = reactive([]);
  const openFavouriteBox = ref(false);

  const cart = reactive([]);
  const cartTotalPrice = ref();

  const buyerInfo = ref("");

  //? getters(計算)computed

  //* 判斷是否有登入
  const isLoggedIn = computed(() => {
    return data.userData !== null;
  });

  //? actions(方法) methos

  //* 登入
  const login = (value) => {
    data.userData = value;
  };

  //* 註冊or修改()
  const singUp = (value) => {
    const localStorageData = JSON.parse(localStorage.getItem("userData"));
    const sessionStorageData = JSON.parse(sessionStorage.getItem("userData"));

    if (sessionStorageData) {
      sessionStorage.setItem("userData", JSON.stringify(value));
    } else if (localStorageData) {
      localStorage.setItem("userData", JSON.stringify(value));
    }
  };

  //* 登出(刪除所有Storage)
  const logOut = () => {
    loading.value = true;
    localStorage.removeItem("userData");
    sessionStorage.removeItem("userData");
    data.userData = null;
  };

  //* 加入收藏
  const addToFavourite = (item) => {
    favourite.push(item);
    localStorage.setItem("favourite", JSON.stringify(favourite));
  };
  //* 刪除收藏
  const removeFromFavourite = (item) => {
    favourite.splice(favourite.indexOf(item), 1);
    localStorage.setItem("favourite", JSON.stringify(favourite));
  };

  //* get收藏資料
  const getFavourite = (item) => {
    favourite.push(...item);
    localStorage.setItem("favourite", JSON.stringify(favourite));
  };

  //* 加入購物車
  const addToCart = (item) => {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  //* 刪除購物車
  const removeFromCart = (item) => {
    cart.splice(cart.indexOf(item), 1);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  //* 修改購物車數量
  const editCartCount = (item, count) => {
    const idx = cart.indexOf(item);
    cart[idx].count = count;
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  //* get購物車資料
  const getCart = (data) => {
    cart.push(...data);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const getCartTotalPrice = (price) => {
    console.log(price);
    cartTotalPrice.value = price;
  };

  //* 付款完成資料
  const getBuyerInfo = (data) => {
    buyerInfo.value = data;
  };

  return {
    data,
    loading,
    cart,
    login,
    logOut,
    isLoggedIn,
    singUp,
    favourite,
    addToFavourite,
    removeFromFavourite,
    getFavourite,
    addToCart,
    removeFromCart,
    editCartCount,
    getCart,
    getBuyerInfo,
    buyerInfo,
    getCartTotalPrice,
    cartTotalPrice,
    openFavouriteBox,
  };
});
