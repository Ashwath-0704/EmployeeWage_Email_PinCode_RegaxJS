/**
 * @author Ashwath Naidu <ashwath.bly@gmail.com>
 * @version v16.13.2
 * @purpose -> Email validation with REGAX 
 */

const EMAIL_REGAX_TYPE_1 = /^[A-Za-z0-9.+-]*[a-zA-Z0-9]+[@]{1}[b][r][i][d][g][e][l][a][b][z]+[.][a-z]+$/g;

/**
 * @purpose -> Validate Email address with a regex. The email consists of minimum 3 and optional 2 more parts with mandatory @ and .
 * @param {*} emailId 
 */


function emailValidationType1(emailId) {
    return emailId.map(element => (EMAIL_REGAX_TYPE_1.test(element) == true));
}

let emailIdsArrayType1 = new Array("abc@bridgelabz.co", "abc@bridge.co");

console.log(emailValidationType1(emailIdsArrayType1)); // UC1 This email id is corrrect -> [ abc@bridgelabz.co ]