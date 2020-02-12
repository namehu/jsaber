
/**
 * 加载静态资源
 *
 * @export
 * @param {string} url 资源路径
 * @param {('css' | 'js')} [type='js'] 类型 js 或者是 css
 * @returns
 */
export default function loadResource(url: string, type: 'css' | 'js' = 'js'): Promise<undefined> {
  return new Promise((resolve, reject) => {

    switch (type) {
      case 'css':
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
        break;
      default:
        const script = document.createElement('script');
        script.src = url || '';
        script.type = 'text/javascript';
        document.body.appendChild(script);

        if (document.all) {
          // 监听处理js加载完成
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              window.clearTimeout(timeout);
              resolve();
            }
          };
        }
    }

    // 资源加载超时时间为10s
    const error = new Error(`Load ${url} resource failed`);
    const timeout = window.setTimeout(() => { reject(error) }, 10000);

  });
}