import {EventName} from "./EventName";
import {EventName2d} from "./2d/EventName2d";
import {EventName3d} from "./3d/EventName3d";
export interface IAppEvent {
    on: (eventName: EventName|EventName2d|EventName3d, fun)=>void;
    off: (eventName: EventName|EventName2d|EventName3d, fun)=>void;
    emit: (eventName: EventName|EventName2d|EventName3d, data?: any)=>void;
    isHas: (eventName: EventName|EventName2d|EventName3d, fun)=>boolean;
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

    on(eventName: EventName|EventName2d|EventName3d, fun: Function) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fun);
    }

    off(eventName: EventName|EventName2d|EventName3d, fun: Function) {
        if (this.events[eventName]) {
            for (var i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fun) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            }
        }
    }

    emit(eventName: EventName|EventName2d|EventName3d, data?: any) {
        if (this.stop) return;
        if (this.events[eventName]) {
            this.events[eventName].forEach(function (fun) {
                fun(data);
            });
        }
    }

    isHas(eventName: EventName|EventName2d|EventName3d, fun: Function) {
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

