/**
 * 千分符分割
 * @param num 数字
 * @param removeDecimals 是否去除小数 默认false
 */
export default function thousandBitSeparator(num: any, removeDecimals: boolean = false) {
  const numb = Number(num);
  if (!num || isNaN(numb)) { return ''; }

  const tempArr: string[] = [];
  const [integer, decimal] = String(numb).split('.'); // 小数部分
  const revNumArr = integer.split(''); // 倒序
  let minus = '';
  // 去掉负号的
  if (revNumArr[0] === '-') {
    minus = '-';
    revNumArr.splice(0, 1);
  }
  revNumArr.reverse().forEach((v, i) => {
    tempArr.push(v);
    if ((i + 1) % 3 === 0 && i !== revNumArr.length - 1) {
      tempArr.push(',');
    }
  });
  let zs = tempArr.reverse().join(''); // 整数部分

  zs = zs.indexOf(',') === 0 ? zs.slice(1, zs.length) : zs; // 移除首部逗号
  if (decimal && !removeDecimals) {
    zs += `.${decimal}`;
  }
  zs = minus ? minus + zs : zs; // 补上负号
  return zs;
};