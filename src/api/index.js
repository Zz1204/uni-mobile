import { defHttp } from '@/utils/http/index.js'

export const getImage = () => defHttp({ url: '/api/captcha/captchaImage', method: 'get' })
