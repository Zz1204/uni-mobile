<template>
  <view>{{ name }}</view>

  <HiCounter />
  <AppTest />
</template>

<script setup>
import { useQuery } from '@/composables/useQuery'
import HiCounter from '@/components/HiCounter.vue'
import AppTest from '@/components/AppTest.vue'
import { getImage } from '@/api/index'

const { value: name } = useQuery('name')

async function getData() {
  const data = await getImage()

  console.log(data)
}

getData()
</script>

<route lang="json">
{
  "layout": "home",
  "style": {
    "navigationStyle": "default"
  }
}
</route>
