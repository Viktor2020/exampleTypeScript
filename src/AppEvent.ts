export interface IAppEvent {
    on: (eventName: string, fun)=>void;
    off: (eventName: string, fun)=>void;
    emit: (eventName: string, data?:any)=>void;
    isHas: (eventName: string, fun)=>boolean;
}
/**
 * Singleton AppEvent
 */
export class AppEvent implements IAppEvent {

    private static instance: AppEvent;

    constructor() {
        if (AppEvent.instance) {
            return AppEvent.instance;
        }
        AppEvent.instance = this;
    }

    stop: boolean = false;
    events: Object = {};

    on(eventName: string, fun) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fun);
    }

    off(eventName: string, fun) {
        if (this.events[eventName]) {
            for (var i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fun) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            }
        }
    }

    emit(eventName: string, data?:any) {
        if (this.stop) return;
        if (this.events[eventName]) {
            this.events[eventName].forEach(function (fun) {
                fun(data);
            });
        }
    }

    isHas(eventName: string, fun) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function (_fun) {
                if (_fun === fun) {
                    return true;
                }
            });
        }
        return false;
    }
}

