<script lang="ts" setup>
const store = useStore()
store.vehicles.queryMany()
store.vehicleConfigurations.queryMany()
</script>

<template>
  <div>Vehicles</div>
</template>
