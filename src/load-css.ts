
/**
 * 将css资源插入到dom中
 *
 * @export
 * @param {string} url
 * @returns
 */
export default function loadCss(url: string) {
  return new Promise((resolve, reject) => {

    // 资源加载超时时间为10s
    const error = new Error(`Load ${url} resource failed`);
    const timeout = window.setTimeout(() => { reject(error) }, 10000);

    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url || '';
    head.appendChild(link);
    // 监听处理css加载完成
    link.onload = () => {
      window.clearTimeout(timeout);
      resolve();
    };

  });
}