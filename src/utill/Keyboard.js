define(["require", "exports"], function (require, exports) {
    "use strict";
    var Key = (function () {
        function Key() {
            this.isUp = false;
            this.isDown = true;
            this.press = undefined;
            this.release = undefined;
        }
        return Key;
    }());
    exports.Key = Key;
    /**
     * Захват кнопки
     * @param keyCode ascii KeyCodeNumber
     * @returns {Key} keyObject
     * Example
     *  var keyObject = keyboard(asciiKeyCodeNumber);
     *  keyObject.press = function() {
     *	  //key object pressed / нажали
     *	};
     *	 keyObject.release = function() {
     *	  //key object released / выпуск
     *	};
     */
    function keyboard(keyCode) {
        var key = new Key();
        key.code = keyCode;
        key.isDown = false;
        key.isUp = true;
        key.press = undefined;
        key.release = undefined;
        //The `downHandler`
        key.downHandler = function (event) {
            if (event.keyCode === key.code) {
                if (key.isUp && key.press)
                    key.press();
                key.isDown = true;
                key.isUp = false;
            }
            event.preventDefault();
        };
        //The `upHandler`
        key.upHandler = function (event) {
            if (event.keyCode === key.code) {
                if (key.isDown && key.release)
                    key.release();
                key.isDown = false;
                key.isUp = true;
            }
            event.preventDefault();
        };
        //Attach event listeners
        window.addEventListener("keydown", key.downHandler.bind(key), false);
        window.addEventListener("keyup", key.upHandler.bind(key), false);
        return key;
    }
    exports.keyboard = keyboard;
});
//# sourceMappingURL=Keyboard.js.map