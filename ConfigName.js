"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigName;
(function (ConfigName) {
    ConfigName[ConfigName["SeleniumBrowser"] = 0] = "SeleniumBrowser";
})(ConfigName = exports.ConfigName || (exports.ConfigName = {}));
class ConfigNameF {
    static path(c) {
        if (c == ConfigName.SeleniumBrowser)
            return "webspider.selenium.browser";
        throw new Error("not support :" + c);
    }
}
exports.ConfigNameF = ConfigNameF;
//# sourceMappingURL=ConfigName.js.map