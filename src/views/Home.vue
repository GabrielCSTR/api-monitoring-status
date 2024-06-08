<script setup>
import { computed, onMounted, ref } from 'vue';
import logo from '../assets/logo.png'
import StatusCard from '../components/StatusCard.vue';
import axios from 'axios'

const services = ref([])
const lastUpdate = ref();
const nextUpdate = ref(300);

const formattedNextUpdate = computed(() => {
  const minutes = Math.floor(nextUpdate.value / 60)
  const seconds = nextUpdate.value % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

const fetchStatus = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/status/health')
    services.value = response.data
    nextUpdate.value = 300 // Reinicia o contador após atualização
    lastUpdate.value = new Date().toLocaleString() // Define a data e hora da atualização
  } catch (error) {
    console.error(error)
  }
}

const startCountdown = () => {
  setInterval(() => {
    if (nextUpdate.value > 0) {
      nextUpdate.value -= 1
    }
  }, 1000)
}

onMounted(() => {
  fetchStatus()
  setInterval(fetchStatus, 300000) // Atualiza a cada 5 minutos
  startCountdown()
})


const STATUSAPI = [
  {
    statusTitle: 'Tune tracker API',
    statusText: 'All the  clients send their data to this server',
    status: 'Online',
    url: ''
  },
  {
    statusTitle: 'Tune tracker FRONT',
    statusText: 'All the dota clients send their data to this server',
    status: 'Offline',
    url: ''
  },
  {
    statusTitle: 'Tune tracker DB',
    statusText: 'All the dota clients send their data to this server',
    status: 'Offline'
  },
  // {
  //   statusTitle: 'Core game server 4',
  //   statusText: 'All the dota clients send their data to this server, so things like !gpm !apm and even bets opening closing are handled here.Its the core brain behind Dotabod',
  //   status: 'Online'
  // },
  // {
  //   statusTitle: 'Core game server 5',
  //   statusText: 'All the dota clients send their data to this server, so things like !gpm !apm and even bets opening closing are handled here.Its the core brain behind Dotabod',
  //   status: 'Online'
  // },
]
</script>

<template>
  <div class="bg-white dark:bg-[#090c10] dark:color-[#b1b8c0] h-screen">
    <div class="container mx-auto pt-5">

      <div class="flex items-center">
        <img :src="logo" alt="logo" class="w-24" />
        <h1
          class="ml-2 font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          TUNE TRACKER PRO - STATUS</h1>
      </div>

      <div class="flex items-center mt-5 h-20 shadown-box p-4 mb-4 bg-[#0d1117] rounded-md">
        <svg data-v-b8247e57="" class="w-8 text-green-600 animate-pulse svg-inline--fa fa-check-circle fa-w-16 ok"
          aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path class="" fill="currentColor"
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
          </path>
        </svg>
        <p class="ml-3 text-gray-600 font-semibold dark:text-gray-300 text-2xl">Todos os serviços operecionais</p>
      </div>

      <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert">
        <span class="font-medium">Notify!</span> Visit us on API Monitoring for support.
      </div>

      <h2 class="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-300">Services:</h2>

      <div class="shadown-box bg-[#0d1117] rounded-md">
        <div class="p-2 cursor-pointer" v-for="item in STATUSAPI" :key="item.statusTitle">
          <StatusCard :data="item" />
        </div>
      </div>

      <footer class="mt-4">
        <div class="flex flex-col justify-center items-center">
          <p class="text-gray-900 dark:text-gray-300">Última atualização: {{ lastUpdate }}</p>
          <p class="text-gray-900 dark:text-gray-300">Atualizando em: {{ formattedNextUpdate }}</p>
        </div>
      </footer>

    </div>
  </div>
</template>