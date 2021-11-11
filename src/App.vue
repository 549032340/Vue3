<script setup lang="ts">
import { Search, Delete } from '@element-plus/icons'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view />
  <p>123
    <svg-icon icon-class="bug"></svg-icon>
  </p>
  <p>
    <el-button type="primary" :icon="Search">搜索</el-button>
    <el-button :icon="Delete">清空</el-button>
  </p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
