<script setup>
import { useQuery } from '@/composables/useQuery'

const { value: name } = useQuery('name')
</script>

<template>
  <view>{{ name }}</view>

  <HiCounter />

  <AppTest />
</template>

<route lang="json">
{
  "layout": "home",
  "style": {
    "navigationStyle": "default"
  }
}
</route>
