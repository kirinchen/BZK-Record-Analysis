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
const selenium_webdriver_1 = require("selenium-webdriver");
const ConfigName_1 = require("../ConfigName");
const SeleniumUtils_1 = require("./SeleniumUtils");
require('chromedriver');
class SeleniumKit {
    constructor(c) {
        this.config = c;
    }
    get driver() { return this._driver; }
    static getKit() {
        return { By: selenium_webdriver_1.By, Key: selenium_webdriver_1.Key, until: selenium_webdriver_1.until };
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this._driver = yield new selenium_webdriver_1.Builder().forBrowser(this.config.get(ConfigName_1.ConfigNameF.path(ConfigName_1.ConfigName.SeleniumBrowser), 'chrome')).build();
        });
    }
    findEditDom(slct) {
        return __awaiter(this, void 0, void 0, function* () {
            let dom = yield this._driver.findElement(selenium_webdriver_1.By.css(slct));
            return new EditDOM(slct, dom);
        });
    }
    setAttribute(slct, attr, val) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SeleniumUtils_1.SeleniumUtils.setAttribute(this._driver, slct, attr, val);
        });
    }
}
exports.SeleniumKit = SeleniumKit;
class EditDOM {
    constructor(_s, _d) {
        this.select = _s;
        this.dom = _d;
    }
    setAttribute(attr, val) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SeleniumUtils_1.SeleniumUtils.setAttribute(this.dom.getDriver(), this.select, attr, val);
        });
    }
}
exports.EditDOM = EditDOM;
//# sourceMappingURL=SeleniumKit.js.map