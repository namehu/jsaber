import isPC from './is-pc';

/**
 * 判断是不是手机
 *
 * @export
 * @returns
 */
export default function isPhone() {
  return !isPC();
}
