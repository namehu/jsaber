/**
 * 将rgb表示方式转换为hex表示方式
 *
 * @param {string} color 颜色rgb表示方式
 * @return hex颜色
 */
export default function colorHex(color: string) {

  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(color)) {
    const aColor = color.replace(/(?:(|)|rgb|RGB)*/g, '').split(',');
    let strHex = '#';
    aColor.forEach((c: any) => {
      let hex: any = Number(c).toString(16);
      hex = hex < 10 ? `0${hex}` : hex; // 保证每个rgb的值为2位
      if (String(hex) === '0') {
        hex += hex;
      }
      strHex += hex;
    });
    if (strHex.length !== 7) {
      strHex = color;
    }
    return strHex;
  } else if (reg.test(color)) {
    const aNum = color.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return color;
    } else if (aNum.length === 3) {
      let numHex = '#';
      aNum.forEach((c: any) => {
        numHex += c + c;
      });
      return numHex;
    }
  }
  return color;
};