export enum ConfigName {
    SeleniumBrowser
}

export class ConfigNameF {

    public static path(c: ConfigName): string {
        if (c == ConfigName.SeleniumBrowser) return "webspider.selenium.browser";
        throw new Error("not support :" + c);
    }

}