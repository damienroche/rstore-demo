<script lang="ts" setup>
const store = useStore()

// No Console log
store.vehicleConfigurations.queryMany()
store.vehicles.queryMany()

</script>

<template>
  <div>Vehicles</div>
</template>
