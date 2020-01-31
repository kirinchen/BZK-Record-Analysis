import { WebDriver } from "selenium-webdriver";
import { String, StringBuilder } from 'typescript-string-operations';
export class SeleniumUtils {

    public static async setAttribute(driver: WebDriver, slct: string, attr: string, val: any) {
        let temp = "document.querySelector('{0}').setAttribute('{1}','{2}')";
        let exs = String.Format(temp, slct, attr, val);
        console.log("exs:" + exs);
        return await driver.executeScript(exs);
    }

}