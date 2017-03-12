"use strict";
function forbiddenStringValidator(strReg) {
    // This line returns an object with a key value pair
    return function (control) {
        var str = control.value;
        var invalid = strReg.test(str);
        // pass an object back giving details about the error
        return invalid ? { 'forbiddenString': { str: str } } : null;
    };
}
exports.forbiddenStringValidator = forbiddenStringValidator;
//# sourceMappingURL=forbidden-string.validator.js.map