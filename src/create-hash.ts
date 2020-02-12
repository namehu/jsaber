/**
 * 创建一个随机字符串
 *
 * @export
 * @param {number} [len=4] 长度。默认是4位
 * @param {boolean} [capital=false] 是否包含大写
 */
export default function createHash(len: number = 4, capital: boolean = false) {
  const letters = '0123456789abcdefghijklmnopqrstuvwxyz';
  const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let hash = '';
  const spliceLetters = capital ? letters + capitalLetters : letters;
  for (let i = 0; i < len; i++) {
    const index = Math.abs(Math.random() * spliceLetters.length);
    hash += spliceLetters.slice(index, index + 1);
  }
  return hash;
}
