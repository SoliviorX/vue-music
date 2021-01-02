export function addClass (el, className) {
  el.classList.add(className)
}

export function hasClass (el, className) {
  return el.classList.contains(className)
}

// 获取或设置data-.. 的值
export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}