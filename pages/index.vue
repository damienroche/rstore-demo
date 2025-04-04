<script lang="ts" setup>
import Vehicles from '~/components/Vehicles.vue'
const store = useStore()


const { data: vehicles } = store.vehicles.queryMany()
const selectedVehicleId = ref()
const { data: configuration, refresh } = store.vehicleConfigurations.queryFirst(selectedVehicleId.value ? { params: vehicleId: selectedVehicleId.value } : { enabled : false})

watch(selectedVehicleId, (id) => {
  if (id) {
    console.log('vehicle selected')
    refresh()
  }
})
</script>

<template>
  <div>
    <select v-model="selectedVehicleId">
      <option v-for="vehicle in vehicles" :key="vehicle.id" :value="selectedVehicleId">{{ vehicle.label }}</option>
    </select>
    <pre>{{ configuration }}</pre>
  </div>
</template>
