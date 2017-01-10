define(["require", "exports"], function (require, exports) {
    "use strict";
    // названия для событий
    (function (EventName2d) {
        EventName2d[EventName2d["COMPLETECREATE2D"] = "COMPLETECREATE2D"] = "COMPLETECREATE2D";
        EventName2d[EventName2d["STARTCREATE2D"] = "STARTCREATE2D"] = "STARTCREATE2D";
        EventName2d[EventName2d["UPDATE2D"] = "UPDATE2D"] = "UPDATE2D";
        EventName2d[EventName2d["ADDTOSTAGE2D"] = "ADDTOSTAGE2D"] = "ADDTOSTAGE2D"; // обновить 2д
    })(exports.EventName2d || (exports.EventName2d = {}));
    var EventName2d = exports.EventName2d;
});
//# sourceMappingURL=EventName2d.js.map