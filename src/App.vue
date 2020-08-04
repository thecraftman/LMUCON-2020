<template>
  <div id="app">
    <div class="preloader" id="preloader">
        <div class="spinner-grow text-light" role="status"><span class="sr-only">Loading...</span></div>
    </div>
    <router-view/>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="vue-typed-js/dist/vue-typed-js.css"></style>
<style lang="scss">
.mb-red {
  margin-botton: 6em !important;
}
</style>
