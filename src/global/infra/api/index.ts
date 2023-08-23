import axios from 'axios'

export const APIFree = axios.create({
  baseURL: 'https://cluster.apigratis.com',
})
