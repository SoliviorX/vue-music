import axios from 'axios';

const ERR_OK = 0;
const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'http://zjutshideshan.cn/vue-music/'
    : '/';

axios.defaults.baseURL = baseURL;

export async function get(url, params) {
  try {
    const res = await axios.get(url, {
      params
    });
    const serverData = res.data;
    if (serverData.code === ERR_OK) {
      return serverData.result;
    }
  } catch (e) {
    console.log(e);
  }
}
