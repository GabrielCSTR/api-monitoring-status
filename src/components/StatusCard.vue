<script setup>

const statusProps = defineProps(["data"])
console.log("DATA", statusProps);
const onStatusClassChanged = (status) => {
  return status === 'Online' ? 'bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300'
}
</script>
<template>
  <div class="w-full p-4 rounded overflow-hidden shadhow-lg my-4 hover:bg-[#090c10]">
    <div class="flex flex-row justify-between items-center">
      <span :class="onStatusClassChanged(statusProps.data.status)">{{ statusProps.data.status }}</span>
      <div class="px-6 py-4 text-gray-900 dark:text-gray-300">
        <div class="font-bold text-xl mb-2">
          {{ statusProps.data.statusTitle }}
        </div>
        <p class="text-sm text-[#666] whitespace-normal overflow-ellipsis">
          {{ statusProps.data.statusText }}
        </p>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>