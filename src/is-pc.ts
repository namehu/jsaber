/**
 * 判断是不是PC
 *
 * @export
 * @returns
 */
export default function isPC() {
  const u = navigator.userAgent;
  const agents = ['Android', 'iPhone', 'webOS', 'BlackBerry', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  let flag = true;
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < agents.length; i++) {
    if (u.indexOf(agents[i]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}