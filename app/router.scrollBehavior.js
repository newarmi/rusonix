// Функция которая отвечает за автоматическую прокрутку вверх при смене роута

export default function (to, from, savedPosition) {
  if (to.hash) {
    return {selector: to.hash}
  } else {
    return {x: 0, y: 0}
  }
  // return { x: 0, y: 0, behavior: 'smooth' }
}
