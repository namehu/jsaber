
/**
 * 加载静态资源
 *
 * @description 将js插入到document.body
 * @export
 * @param {string} url 资源路径
 * @param {(string)} [resourceName] 资源名称。
 * @returns
 */
export default function loadResource(url: string, resourceName?: string): Promise<any> {
  return new Promise((resolve, reject) => {
    // 如果传递了资源名称。并且资源已经挂载到全局window上。则直接返回
    if (resourceName && window[resourceName as any]) {
      return resolve(window[resourceName as any]);
    }

    // 资源加载超时时间为10s
    const error = new Error(`Load '${url}' failed`);
    const timeout = window.setTimeout(() => { reject(error); }, 10000);

    const script = document.createElement('script') as any;
    script.src = url;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // 是否是IE
    if (document.all) {
      script.onreadystatechange = () => {
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          window.clearTimeout(timeout);
          resolve(resourceName ? window[resourceName as any] : void 0);
        }
      };
    } else {
      script.onload = () => {
        window.clearTimeout(timeout);
        resolve(resourceName ? window[resourceName as any] : void 0);
      };
    }

  });
}