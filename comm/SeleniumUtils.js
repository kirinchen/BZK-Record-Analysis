"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_string_operations_1 = require("typescript-string-operations");
class SeleniumUtils {
    static setAttribute(driver, slct, attr, val) {
        return __awaiter(this, void 0, void 0, function* () {
            let temp = "document.querySelector('{0}').setAttribute('{1}','{2}')";
            let exs = typescript_string_operations_1.String.Format(temp, slct, attr, val);
            console.log("exs:" + exs);
            return yield driver.executeScript(exs);
        });
    }
}
exports.SeleniumUtils = SeleniumUtils;
//# sourceMappingURL=SeleniumUtils.js.map