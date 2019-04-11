function getRandomInt(min, max) {
  // 返回一个min和max之间（包括max和min）的随机整数(加1是为了能取到max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle(arr) {
  // 定义一个arr的副本，从而达到不改变原arr的目的
  let _arr = arr.slice()
  for (let i = 0; i < arr.length; i++) {
    let j = getRandomInt(0, i)
    // 交换_arr[i]和_arr[j]的值，达到打乱数组的目的
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}