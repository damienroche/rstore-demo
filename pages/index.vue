<script lang="ts" setup>
import Vehicles from '~/components/Vehicles.vue'
const store = useStore()

// Console log => "drivers"
// store.drivers.queryMany(),
// store.vehicleConfigurations.queryMany(),
// store.vehicles.queryMany()

// Console log => "drivers" / "vehicleConfigurations"
// await Promise.all([
//  store.drivers.queryMany(),
//  store.vehicleConfigurations.queryMany(),
//  store.vehicles.queryMany()
//])

// Console log => "drivers"
Promise.all([
  store.drivers.queryMany(),
  store.vehicleConfigurations.queryMany(),
  store.vehicles.queryMany()
])

</script>

<template>
  <div>
    <Vehicles />
  </div>
</template>
