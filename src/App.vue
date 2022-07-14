<template>
  <AppTopbar />

  <router-view />
</template>


<script>
import AppTopbar from '@/components/Topbar'
import { actionTypes } from '@/store/modules/auth'

export default {
  name: 'App',
  mounted() {
    console.log('Hello APP')
    this.$store.dispatch(actionTypes.getCurrentUser)
  },
  components: {
    AppTopbar
  }
}
</script>