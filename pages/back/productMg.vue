<template>
  <section
    class="flex items-center justify-between gap-12 h-[100vh] px-10 m-auto"
  >
    <backSlider></backSlider>
    <div class="text-xl bg-slate-100 w-full relative">
      <h1 class="bg-yellow-900 py-3 text-center text-3xl">商品管理</h1>

      <!-- 搜尋 -->
      <div class="absolute right-5 top-5">
        <input
          type="text"
          placeholder="搜尋商品名稱"
          class="px-2 text-black"
          v-model="search"
        />
      </div>

      <!-- 新增 -->
      <div class="absolute left-5 top-4">
        <btn
          class="!bg-slate-100 text-black !w-[80px] !h-[30px] text-lg"
          @click="appendNewProduct"
          >新增+</btn
        >
      </div>

      <!-- 清單 -->
      <ul>
        <li
          class="grid grid-cols-[60px,250px,1fr,150px,1fr,100px] items-center justify-center text-center border-y-2 border-black p-2 mb-2"
        >
          <p v-for="(title, idx) in title" :key="idx">{{ title }}</p>
        </li>
        <li
          class="h-[800px] overflow-y-auto overflow-x-hidden relative"
          id="scrollArea"
        >
          <div v-for="(item, idx) in productList" :key="idx">
            <VeeForm @submit="submit">
              <div
                class="mb-2 grid grid-cols-[60px,250px,1fr,150px,1fr,100px] items-center justify-center text-center px-2 text-lg mb-6"
                :class="editingGackGroundColor(item.id)"
              >
                <!-- ID -->
                <p>{{ item.id }}</p>
                <VeeField
                  type="text"
                  name="id"
                  :placeholder="item.id"
                  class="hidden"
                  v-model="item.id"
                >
                </VeeField>

                <!-- 圖片 -->
                <div
                  class="w-[250px] m-auto relative flex flex-col items-center"
                >
                  <div
                    class="relative"
                    :class="editingProductImg(item.id)"
                    v-for="(img, imgIdx) in item.images"
                    :key="imgIdx"
                  >
                    <img
                      v-show="showImgIdx(item.id, imgIdx)"
                      :src="img"
                      :alt="item.title"
                      class="w-[200px] h-[200px] object-cover object-center border-2 border-black/30"
                    />
                    <div
                      class="bg-gray-900/80 w-full h-full flex items-center justify-center absolute inset-0 m-auto cursor-pointer changeProductImg"
                      @click="changeProductImg(imgIdx)"
                    >
                      <p class="text-white font-bold">更換圖片</p>
                    </div>
                  </div>
                  <!-- 沒圖片的話顯示這個 -->
                  <img
                    v-if="
                      item.images.length < 3 &&
                      editingImgIdx === 3 &&
                      editIdx === item.id
                    "
                    src="https://i.imgur.com/rn5Zlsq.png"
                    alt="404"
                    class="w-[250px] h-[250px] object-cover object-center border-2 border-black/30"
                  />

                  <!-- 換圖片123的按鈕和+按鈕 -->
                  <div
                    class="flex justify-center gap-5 text-sm my-2"
                    v-if="editIdx === item.id"
                  >
                    <btn
                      v-for="(img, btnIdx) in item.images"
                      :key="btnIdx"
                      class="!w-[25px] !h-[25px]"
                      type="button"
                      @click="changeProductImgIdx(btnIdx)"
                      >{{ btnIdx + 1 }}</btn
                    >
                    <btn
                      class="!w-[25px] !h-[25px]"
                      type="button"
                      v-if="item.images.length < 3 && editIdx === item.id"
                      @click="
                        changeProductImg(item.images.length), (addNewImg = true)
                      "
                      >+</btn
                    >
                  </div>
                </div>

                <!-- 新增/換圖片彈窗 -->
                <div
                  class="fixed w-[800px] h-[400px] top-0 bottom-0 left-[15%] right-0 m-auto z-50 bg-gray-200 border-2 border-black"
                  v-show="openChangImgBox && editIdx === item.id"
                >
                  <h3 class="bg-yellow-900 text-3xl text-center py-2">圖片</h3>
                  <!-- 內容 -->
                  <p class="text-center mt-10 font-bold text-red-400">
                    請輸入含有【.jpg，.jpeg，.png】的圖片網址
                  </p>
                  <!-- 輸入框 -->
                  <div
                    class="grid grid-cols-[100px,1fr,60px] mx-auto gap-2 mt-16"
                  >
                    <p class="text-right">網址：</p>
                    <div
                      v-for="(updateImg, idx) in editImgIdx.newImg"
                      :key="idx"
                      v-show="editingImgIdx === idx"
                    >
                      <VeeField
                        v-if="
                          item.images.length > idx ||
                          (addNewImg && item.images.length <= 1) ||
                          (addNewImg && editingImgIdx === 2)
                        "
                        type="url"
                        :name="`images[${idx}]`"
                        :rules="{
                          regex: /^(https?:\/\/.*\.(?:png|jpg|jpeg|))$/,
                        }"
                        label="網址"
                        class="w-full h-[20px] px-2 py-4 text-black border border-gray-400/50"
                        v-model="item.images[idx]"
                      />
                      <VeeErrorMessage
                        :name="`images[${idx}]`"
                        class="text-red-500 mx-1 errors-msg"
                      />
                    </div>
                  </div>
                  <div class="text-center mt-16">
                    <btn
                      type="button"
                      @click="
                        (openChangImgBox = !openChangImgBox),
                          (addNewImg = false)
                      "
                      >確定</btn
                    >
                    <btn
                      type="button"
                      @click="
                        (openChangImgBox = !openChangImgBox), getProducts()
                      "
                      class="ml-10"
                      >取消</btn
                    >
                  </div>
                </div>

                <!-- 分類&名稱 -->
                <div class="flex justify-center items-center flex-col">
                  <VeeField
                    as="select"
                    name="categoryId"
                    class="block mb-3 px-2 py-[2px] text-black"
                    :disabled="editIdx === item.id ? false : true"
                    v-model="item.category.id"
                  >
                    <option
                      v-for="(category, idx) in categorys.data"
                      :key="idx"
                      :value="category.id"
                    >
                      {{ category.name }}
                    </option>
                  </VeeField>

                  <VeeField
                    type="text"
                    name="title"
                    :placeholder="item.title"
                    class="block px-2 py-[2px] text-center w-[90%]"
                    :disabled="editIdx === item.id ? false : true"
                    v-model="item.title"
                  >
                  </VeeField>
                </div>

                <!-- 價錢 -->
                <div class="flex justify-center items-center gap-2">
                  <p>$</p>
                  <VeeField
                    type="text"
                    name="price"
                    :placeholder="item.price"
                    class="px-2 py-[2px] w-[80px] text-center"
                    :disabled="editIdx === item.id ? false : true"
                    v-model="item.price"
                  >
                  </VeeField>
                </div>

                <!-- 敘述 -->
                <div class="flex items-center">
                  <VeeField
                    as="textarea"
                    name="description"
                    :placeholder="item.description"
                    style="resize: none"
                    class="px-2 py-[5px] text-black w-full h-[200px] overflow-y-auto"
                    v-model="item.description"
                    :disabled="editIdx === item.id ? false : true"
                  >
                  </VeeField>
                </div>

                <!-- 更改按鈕 -->
                <div class="ml-auto px-2" v-if="editIdx !== item.id">
                  <btn
                    class="!w-[80px] !text-lg"
                    type="button"
                    @click="allowEdit(0, item.id)"
                    >更改</btn
                  >
                </div>

                <!-- 確定取消刪除按鈕 -->
                <div v-else class="flex flex-col items-end px-2">
                  <btn class="!w-[80px] !text-lg mb-4">{{
                    SelectButtonText(1)
                  }}</btn>
                  <btn
                    class="!w-[80px] !text-lg"
                    type="button"
                    v-if="!addProductMode"
                    @click="allowEdit(1, item.id)"
                    >取消</btn
                  >
                  <btn
                    class="!w-[80px] !text-lg mt-4"
                    type="button"
                    @click="deleteProduct(item.id)"
                    >{{ SelectButtonText(0) }}</btn
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

//* 資料

const title = reactive([
  "編號",
  "商品圖片",
  "商品分類/名稱",
  "商品價格",
  "商品描述",
  "",
  "",
]);
const products = reactive([]);

const categorys = reactive({ data: [] });

const search = ref("");

const groupsImgIdx = ref(0);

const editingImgIdx = ref(0);

const editImgIdx = reactive({ id: "", idx: 0, newImg: [null, null, null] });

const addProductMode = ref(false);

const addNewImg = ref(false);

const openChangImgBox = ref(false);

const editIdx = ref("");

//* 搜尋
const productList = computed(() => {
  if (search.value === "") {
    return products;
  } else {
    return products.filter(
      (item) => item.title.toLowerCase().includes(search.value.toLowerCase())
      // 不分大小寫
    );
  }
});

//* 更換圖片
const changeProductImg = (idx) => {
  editingImgIdx.value = idx;
  openChangImgBox.value = !openChangImgBox.value;
};

//* 換下一張圖片
const changeProductImgIdx = (idx) => {
  editingImgIdx.value = idx;
};

const showImgIdx = computed(() => (id, ImgIdx) => {
  if (editIdx.value === id) {
    return editingImgIdx.value === ImgIdx;
  } else {
    return groupsImgIdx.value === ImgIdx;
  }
});

//* 開啟可修改條件
const allowEdit = (allow, id) => {
  if (!allow) {
    editIdx.value = id;
    editingImgIdx.value = 0;
  } else {
    editIdx.value = "";
    openChangImgBox.value = false;
    getProducts();
  }
};

//* Class控制/文字顯示

const editingGackGroundColor = computed(() => (id) => {
  return editIdx.value === id ? "bg-yellow-700/30" : null;
});

const editingProductImg = computed(() => (id) => {
  return editIdx.value === id ? "productsImg" : null;
});

const SelectButtonText = computed(() => (type) => {
  if (!addProductMode.value) {
    return type ? "確定" : "刪除";
  } else {
    return type ? "新增" : "取消";
  }
});

//* 新增新欄位
const appendNewProduct = async () => {
  products.push({
    id: products[products.length - 1].id + 1,
    title: "商品名",
    price: "價錢",
    description: "描述",
    images: [],
    category: { id: 1, name: "類別" },
  });
  editIdx.value = products[products.length - 1].id;
  addProductMode.value = true;

  await nextTick(() => {
    const scrollArea = document.getElementById("scrollArea");
    scrollArea.scrollTo(0, scrollArea.scrollHeight);
  });
};

//* 新增/修改/刪除 API

const createProduct = async (value) => {
  await fetch(`https://api.escuelajs.co/api/v1/products/`, {
    method: "POST",
    body: JSON.stringify(value),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      alert("新增成功");
      getProducts();
      editIdx.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
  addProductMode.value = false;
};

const updateProduct = async (value) => {
  await fetch(`https://api.escuelajs.co/api/v1/products/${value.id}`, {
    method: "PUT",
    body: JSON.stringify(value),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      alert("修改成功");
      getProducts();
      editIdx.value = "";
      openChangImgBox.value = false;
    })
    .catch((err) => {
      console.log(err);
    });
  addNewImg.value = false;
};

const deleteProduct = (id) => {
  if (!addProductMode.value) {
    if (confirm("確定要刪除嗎？")) {
      fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          alert("刪除成功");
          getProducts();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } else {
    products.splice(products.length - 1, 1);
    addProductMode.value = false;
  }
};

const getProducts = () => {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((result) => {
      if (categorys.data.length <= 0) {
        const getCategoryData = new Set(
          result.map((item) =>
            JSON.stringify({ id: item.category.id, name: item.category.name })
          )
        );

        categorys.data = [...getCategoryData].map(JSON.parse);
      }
      products.length = 0;
      products.push(...result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const submit = (value) => {
  console.log(value);
  if (addProductMode.value) {
    createProduct(value);
  } else {
    updateProduct(value);
  }
};

onBeforeMount(() => {
  getProducts();
});
</script>

<style lang="scss" scoped>
input {
  color: black;
}

input:disabled {
  background-color: rgb(241, 245, 249);
}

select:disabled {
  background-color: rgb(241, 245, 249);
}

.productsImg {
  &:hover > .changeProductImg {
    display: flex;
  }

  .changeProductImg {
    display: none;
  }
}
.changeProductImg {
  display: none;
}
</style>
