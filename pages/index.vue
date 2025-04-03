<script lang="ts" setup>
import Vehicles from '~/components/Vehicles.vue'
const store = useStore()
store.drivers.queryMany()
</script>

<template>
  <div>
    <Vehicles />
  </div>
</template>
