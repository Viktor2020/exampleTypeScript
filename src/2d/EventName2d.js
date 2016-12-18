define(["require", "exports"], function (require, exports) {
    "use strict";
    // названия для событий
    var EventName2d;
    (function (EventName2d) {
        EventName2d[EventName2d["COMPLETECREATE2D"] = 0] = "COMPLETECREATE2D";
        EventName2d[EventName2d["STARTCREATE2D"] = 1] = "STARTCREATE2D";
        EventName2d[EventName2d["UPDATE2D"] = 2] = "UPDATE2D";
        EventName2d[EventName2d["ADDTOSTAGE2D"] = 3] = "ADDTOSTAGE2D"; // обновить 2д
    })(EventName2d = exports.EventName2d || (exports.EventName2d = {}));
});
//# sourceMappingURL=EventName2d.js.map