define(["require", "exports", "../AppEvent", "./View2d", "./EventName2d"], function (require, exports, AppEvent_1, View2d_1, EventName2d_1) {
    "use strict";
    // управляющий 2д
    function ControllerView2d() {
        console.log('создание управляющего 2д');
        var view2d; // отображение 2д
        var sobEvent = new AppEvent_1.AppEvent(); // события
        sobEvent.on(EventName2d_1.EventName2d.STARTCREATE2D, function () {
            console.log('пришла команда создания 2д');
            view2d = new View2d_1.View2d();
        });
    }
    exports.ControllerView2d = ControllerView2d;
});
//# sourceMappingURL=ControllerView2d.js.map