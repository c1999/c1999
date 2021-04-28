<template>
  <div class="树形结构-递归组件思想" @click="clickItem('/树形结构-递归组件思想')">树形结构-递归组件思想</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    clickItem(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style>
 .树形结构-递归组件思想 {
   width: 200px;
   height: 200px;
   background-color: blue;
 }
 .树形结构-递归组件思想:hover {
   cursor: pointer;
 }
</style>
