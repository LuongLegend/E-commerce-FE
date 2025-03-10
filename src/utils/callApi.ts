import axios from 'axios'
import { message } from 'antd'
const API_HOST = 'http://localhost:3000'

type dataQueryType = {
  data?: {
    body?: object
  }
  params?: object
}

const callApi = async (endpoint: string, method = 'GET', body?: object, config?: object) => {
  try {
    let dataQuery: dataQueryType = { data: body }
    if (method === 'GET') {
      dataQuery = { params: body }
    }

    const response = await axios({
      method: method,
      url: `${endpoint}`,
      baseURL: API_HOST,
      ...dataQuery,
      ...config
    })
    return response.data
  } catch (err) {
    console.log('err api', err)
    message.error('Hệ thống đang xảy ra lỗi. Bạn vui lòng thử lại sau!')
  }
}

export default callApi
