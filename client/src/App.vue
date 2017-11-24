<template>
  <div id="app">
    <page-header></page-header>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
</style>
