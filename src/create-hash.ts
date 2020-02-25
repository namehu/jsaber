import randomString from './random-string';

/**
 * 创建一个随机字符串
 *
 * @export
 * @deprecated  该api将废弃。请使用randomString方法
 * @param {number} [len=4] 长度。默认是4位
 * @param {boolean} [capital=false] 是否包含大写
 */
export default function createHash(len: number = 4, capital: boolean = false) {
  return randomString(len, capital);
}
