
/**
 * 绑定事件
 *
 * @export
 * @param {string} evt 事件名称
 * @param {*} element 元素
 * @param {(e: Event) => void} fnc 回调函数
 * @returns
 */
export default function on(evt: string, element: any, fnc: (e: Event) => void) {
  return element.addEventListener ? element.addEventListener(evt, fnc, false) : element.attachEvent('on' + evt, fnc);
}