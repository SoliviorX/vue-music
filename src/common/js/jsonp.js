import originJSONP from 'jsonp'

// 把jsonp库中的jsonp封装成Promise
export default function jsonp(url, data, option) {
  // 如果有 ? 则在url末尾加一个 &；否则加一个 ?
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// 将data拼接到url后面的方法
function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  // 把第一个 & 符号去掉
  return url ? url.substring(1) : ''
}
