/**
 * 解绑事件
 *
 * @export
 * @param {string} evt 事件名称
 * @param {*} element 元素
 * @param {(e: Event) => void} fnc 回调函数
 * @returns
 */
export default function off(evt: string, element: any, fnc: (e: Event) => void): any;
