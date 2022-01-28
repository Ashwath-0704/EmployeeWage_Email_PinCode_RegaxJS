/**
 * @author Ashwath Naidu <ashwath.bly@gmail.com>
 * @version v16.13.2
 * @purpose -> Email validation with REGAX 
 */

const PIN_REGAX_TYPE_1 = /[0-9]{1}[0-9]{2}[\s]?[0-9]{2}[0-9]{1}$/;
const PIN_REGAX_TYPE_2 = /[0-9]{1}$[0-9]{2}[\s]?[0-9]{2}[0-9]{1}$/;

/**
 * @purpose -> UC1 : Create a regex pattern to validate PIN code 400088.
 * @param {*} pinCode 
 * @returns 
 */
function pinValidationType1(pinCode) {
    return pinCode.map(element => (PIN_REGAX_TYPE_1.test(element) == true));
}
/**
 * @purpose -> UC2 : Restrict the PIN code from taking alphabets or special characters at the beginning.
 *          -> UC3 : Restrict the PIN code from taking alphabets or special characters at the End.
 * @param {*} pinCode 
 * @returns 
 */
function pinValidationType2(pinCode) {
    return pinCode.map(element => (PIN_REGAX_TYPE_2.test(element) == true))
}

// -------------------------------------main running -----------------------------------------------------------------------------------

let pinCodeArrayType1 = new Array(400088, "400 088");
let pinCodeArrayType2 = new Array("A400088", "400088B");

console.log(pinValidationType1(pinCodeArrayType1)); // [ true, true ]
console.log(pinValidationType2(pinCodeArrayType2)); // [ false, false ]