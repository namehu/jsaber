/**
 * 创建一个随机字符串
 *
 * @export
 * @param {number} [len=4] 长度。默认是4位
 * @param {boolean} [capital=false] 是否包含大写
 */
export declare function createHash(len?: number, capital?: boolean): string;
/**
 * 将小数转换成百分数
 *
 * @export
 * @param {*} n
 * @param {number} [fixed=1] 保留位数
 * @returns
 */
export declare function percentNumber(n: any, fixed?: number): number;
