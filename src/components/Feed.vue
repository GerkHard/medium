<template>
  <div>Feed {{ apiUrl }}</div>
</template>

<script>
import { actionTypes } from '@/store/modules/feed'

export default {
  name: 'AppFeed',
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$store.dispatch(actionTypes.getFeed, { apiUrl: this.apiUrl })
  }
}
</script>

<style lang="scss" scoped>
</style>