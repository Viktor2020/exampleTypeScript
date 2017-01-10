export class Key {
	code: number;
	isUp: boolean = false;
	isDown: boolean = true;
	press: Function|undefined = undefined;
	release: Function|undefined = undefined;
	downHandler: Function;
	upHandler: Function;
}
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
export function keyboard(keyCode) {
	let key: Key = new Key();
	key.code = keyCode;
	key.isDown = false;
	key.isUp = true;
	key.press = undefined;
	key.release = undefined;
	//The `downHandler`
	key.downHandler = function (event) {
		if (event.keyCode === key.code) {
			if (key.isUp && key.press) key.press();
			key.isDown = true;
			key.isUp = false;
		}
		event.preventDefault();
	};

	//The `upHandler`
	key.upHandler = function (event) {
		if (event.keyCode === key.code) {
			if (key.isDown && key.release) key.release();
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
