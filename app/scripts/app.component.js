/**
 * Created by haizhi on 16/7/6.
 */
(function(app) {
    var HERO = [
        {
            'id': 11,
            'name': '11'
        },
        {
            'id': 12,
            'name': '12'
        },
        {
            'id': 13,
            'name': '13'
        },
        {
            'id': 14,
            'name': '14'
        },
        {
            'id': 15,
            'name': '15'
        },
        {
            'id': 16,
            'name': '16'
        }
    ];
    app.AppComponent =
        ng.core.Component({
                selector: 'my-app',
                template: `
                    <div>Test</div>
                `
            })
            .Class({
                constructor: function() {
                },
            });
})(window.app || (window.app = {}));