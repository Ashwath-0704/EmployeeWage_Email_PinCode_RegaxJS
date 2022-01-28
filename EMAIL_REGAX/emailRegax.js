/**
 * @author Ashwath Naidu <ashwath.bly@gmail.com>
 * @version v16.13.2
 * @purpose -> Email validation with REGAX 
 */

const EMAIL_REGAX_TYPE_1 = /^[A-Za-z0-9.+-]*[a-zA-Z0-9]+[@]{1}[b][r][i][d][g][e][l][a][b][z]+[.][a-z]+$/g;
const EMAIL_REGAX_TYPE_2 = /^[A-Za-z0-9.+-_]*[a-zA-Z0-9]+[@][b][r][i][d][g][e][l][a][b][z]+[.][a-z]+[.]?[a-z]{2}$/g;
/**
 * @purpose -> Validate Email address with a regex. The email consists of minimum 3 and optional 2 more parts with mandatory @ and .
 *          -> Ensure @ and validate the mandatory 2nd part i.e. bridgelabz
 * @param {*} emailId 
 */


function emailValidationType1(emailId) {
    return emailId.map(element => (EMAIL_REGAX_TYPE_1.test(element) == true));
}

/**
 * @purpose -> Ensure “.” after bridgelabz and validate the mandatory 3rd part i.e. co
 * @param {*} emailId 
 * @returns 
 */
function emailValidationType2(emailId) {
    return emailId.map(element => (EMAIL_REGAX_TYPE_2.test(element) == true));
}

let emailIdsArrayType1 = new Array("abc@bridgelabz.co", "abc@bridge.co");
let emailIdsArrayType2 = new Array("abc.xyz@bridgelabz.co.in");

console.log(emailValidationType1(emailIdsArrayType1)); // UC1 and UC2 This email id is corrrect -> [ abc@bridgelabz.co ] 
console.log(emailValidationType2(emailIdsArrayType2)); // UC3 and UC4 This email id is corrrect -> [ abc.xyz@bridgelabz.co.in ]