/**
 * 将小数转换成百分数
 *
 * @export
 * @param {*} n
 * @param {number} [fixed=1] 保留位数
 * @returns
 */
export default function percentNumber(n: any, fixed: number = 0) {
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