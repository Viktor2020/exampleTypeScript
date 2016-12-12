define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Singleton AppEvent
     */
    var AppEvent = (function () {
        function AppEvent() {
            this.stop = false;
            this.events = {};
            if (AppEvent.instance) {
                return AppEvent.instance;
            }
            AppEvent.instance = this;
        }
        AppEvent.prototype.on = function (eventName, fun) {
            this.events[eventName] = this.events[eventName] || [];
            this.events[eventName].push(fun);
        };
        AppEvent.prototype.off = function (eventName, fun) {
            if (this.events[eventName]) {
                for (var i = 0; i < this.events[eventName].length; i++) {
                    if (this.events[eventName][i] === fun) {
                        this.events[eventName].splice(i, 1);
                        break;
                    }
                }
            }
        };
        AppEvent.prototype.emit = function (eventName, data) {
            if (this.stop)
                return;
            if (this.events[eventName]) {
                this.events[eventName].forEach(function (fun) {
                    fun(data);
                });
            }
        };
        AppEvent.prototype.isHas = function (eventName, fun) {
            if (this.events[eventName]) {
                this.events[eventName].forEach(function (_fun) {
                    if (_fun === fun) {
                        return true;
                    }
                });
            }
            return false;
        };
        return AppEvent;
    }());
    exports.AppEvent = AppEvent;
});
//# sourceMappingURL=AppEvent.js.map