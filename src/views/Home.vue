<script setup>
import logo from '../assets/logo.png'
import StatusCard from '../components/StatusCard.vue';

const STATUSAPI = [
  {
    statusTitle: 'Core game server 1',
    statusText: 'All the dota clients send their data to this server, so things like !gpm !apm and even bets opening closing are handled here.Its the core brain behind Dotabod',
    status: 'Online'
  },
  {
    statusTitle: 'Core game server 2',
    statusText: 'All the dota clients send their data to this server, so things like !gpm !apm and even bets opening closing are handled here.Its the core brain behind Dotabod',
    status: 'Offline'
  },
  {
    statusTitle: 'Core game server 3',
    statusText: 'All the dota clients send their data to this server, so things like !gpm !apm and even bets opening closing are handled here.Its the core brain behind Dotabod',
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
          class="ml-2 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          API MONITORING</h1>
      </div>

      <div class="mt-5">
        <div class="shadown-box p-4 mb-4 bg-[#0d1117]">
          <div class="flex items-center">
            <svg data-v-b8247e57="" class="w-8 text-green-600 svg-inline--fa fa-check-circle fa-w-16 ok"
              aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path class="" fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
              </path>
            </svg>
            <p class="ml-3 text-gray-600 dark:text-gray-300 text-2xl">Todos os serviços operecionais</p>
          </div>
        </div>
      </div>

      <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert">
        <span class="font-medium">Notify!</span> Visit us on API Monitoring for support.
      </div>

      <div>
        <h2 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-300">Services:</h2>
      </div>

      <div class="shadown-box bg-[#0d1117]">
        <div class="p-2 cursor-pointer" v-for="item in STATUSAPI" :key="item.statusTitle">
          <StatusCard :data="item" />
        </div>
      </div>

      <footer class="mt-4 flex justify-center items-center">
        <p class="text-gray-900 dark:text-gray-300">Último update 06/06/2024</p>
      </footer>

    </div>
  </div>
</template>