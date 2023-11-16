import { defineRule } from "vee-validate";
import * as AllRules from "@vee-validate/rules";
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

import { configure } from "vee-validate";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

// 配置訊息
configure({
  generateMessage: localize({ zh_TW: zhTW }),
});

setLocale("zh_TW");

export default defineNuxtPlugin((_nuxtApp) => {});
