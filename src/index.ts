/**
 * 创建一个随机字符串
 *
 * @export
 * @param {number} [len=4] 长度。默认是4位
 * @param {boolean} [capital=false] 是否包含大写
 */
export function createHash(len: number = 4, capital: boolean = false) {
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

/**
 * 将小数转换成百分数
 *
 * @export
 * @param {*} n
 * @param {number} [fixed=1] 保留位数
 * @returns
 */
export function percentNumber(n: any, fixed: number = 0) {
  let num = Number(n);
  num = isNaN(num) ? 0 : num;
  let formatNum: any = num
    .toFixed(fixed + 2) // 留下小数点位数 TODO: 这里会四舍五入的~
    .replace('.', ''); // 去掉小数点

  formatNum = formatNum.split('').reverse();
  formatNum.splice(fixed, 0, '.');
  formatNum = formatNum.reverse().join('');
  return Number(formatNum);
}