import {AppEvent} from "../AppEvent";
import {View2d} from "./View2d";
import {EventName2d} from "./EventName2d";

// управляющий 2д
export function ControllerView2d() {
    console.log('создание управляющего 2д');

    let view2d: View2d;             // отображение 2д
    let sobEvent = new AppEvent();  // события

    sobEvent.on(EventName2d.STARTCREATE2D, function () {
        console.log('пришла команда создания 2д');
        view2d = new View2d();
    });

}