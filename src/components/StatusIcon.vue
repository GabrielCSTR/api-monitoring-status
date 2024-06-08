<script setup>
const statusIconProps = defineProps({
  title: { type: String, required: true },
  width: { type: String, required: false, default: '5px' },
  height: { type: String, required: false, default: '16px' },
});

</script>

<template>
  <div class="beat hover:scale-125" :title="statusIconProps.title"
    :style="`width: ${statusIconProps.width}; height: ${statusIconProps.height}; margin: 2px; --hover-scale: 1.5;`">
  </div>

</template>
<style scoped>
.beat {
  background-color: #5cdd8b;
  border-radius: 50rem;
}
</style>