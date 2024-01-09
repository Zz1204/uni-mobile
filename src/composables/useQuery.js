import { computed, ref, unref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

export function useQuery(key) {
  const query = ref({})
  onLoad((q) => {
    query.value = q || {}
  })
  const value = computed(() => (key ? query.value[unref(key)] : null))
  return { query, value }
}
