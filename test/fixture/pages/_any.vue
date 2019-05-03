<template>
  <div>
    Count: {{ count }}<br />
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="init">init logrocket</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    },
    init() {
      this.$logRocket.enable()
    }
  }
}
</script>

