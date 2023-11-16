<template>
  <div class="w-[90%] h-[280px] absolute inset-0 m-auto z-50 bg-gray-500/90">
    <h3 class="bg-yellow-900 text-3xl text-center py-2">訊息</h3>
    <slot></slot>

  </div>
</template>

<style scoped lang="scss">

  h3 {
    color: white;
  }

</style>
