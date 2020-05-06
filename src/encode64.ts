
/**
 * 根据Base64编码。将params参数编码为base64
 *
 * @export
 * @param {(string | (string | number)[])} params 参数
 * @param {number} [repeat=1] 编码次数。默认一次
 */
export default function encode64(params: string[], repeat: number = 1) {
  if (!(params instanceof Array)) {
    console.error('The params must be an array of strings');
    return '';
  }
  let p = params.map(v => window.encodeURI(v)).join('^') || '';
  for (let index = 0; index < repeat; index++) {
    p = window.btoa(p);
  }
  return p;
}