
/**
 * 根据Base64解码码。将参数解码为原始参数
 *
 * @export
 * @param {string} params 参数
 * @param {number} [repeat=1] 解码次数。默认一次
 */
export default function decode64(params: string = '', repeat: number = 1) {
  let p = params;
  for (let index = 0; index < repeat; index++) {
    p = window.atob(p);
  }
  return p.split('^').map(v => window.decodeURI(v));
}