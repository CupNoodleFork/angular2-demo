/**
 * Created by haizhi on 16/7/6.
 */

((app) => {
    document.addEventListener('DOMContentLoaded', () => {
        ng.platformBrowserDynamic.bootstrap(app.AppComponent);
    })
})(window.app || (window.app = {}));