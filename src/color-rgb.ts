/**
 * 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
 *
 * 若不是hex表示方式，直接随机返回
 * @export
 * @param {string} color 颜色hex表示方式
 * @returns 颜色数组rgb数组模式
 */
export default function colorRgb(color: string) {

  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  let sColor = color.toLowerCase();

  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(sColor.slice(i, i + 2), 16));
    }

    return sColorChange;
  }

  return [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];
};