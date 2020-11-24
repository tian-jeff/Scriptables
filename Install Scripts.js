// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: brown; icon-glyph: download;
/**
 * Author: GideonSenku
 * Github: https://github.com/GideonSenku
 */
const scripts = [
  {
    moduleName: "BilibiliMonitor",
    url:
      "https://raw.githubusercontent.com/tian-jeff/Scriptables/master/BilibiliMonitor.js",
  },

  {
    moduleName: "WeiboMonitor",
    url:
      "https://raw.githubusercontent.com/tian-jeff/Scriptables/master/WeiboMonitor.js",
  },
  {
    moduleName: "ZhihuMonitor",
    url:
      "https://raw.githubusercontent.com/tian-jeff/Scriptables/master/ZhihuMonitor.js",
  },
  {
    moduleName: "DoubanMonitor",
    url:
      "https://raw.githubusercontent.com/tian-jeff/Scriptables/master/DoubanMonitor.js",
  },
  {
    moduleName: "Env",
    url:
      "https://raw.githubusercontent.com/tian-jeff/Scriptables/master/Env.js",
  },
  {
    moduleName: "Install Scripts",
    url:
      "https://raw.githubusercontent.com/tian-jeff/Scriptables/master/Install%20Scripts.js",
  },

];
// Install Scripts.js
const $ = importModule("Env");
function update() {
  log("🔔更新脚本开始!");
  scripts.forEach((script) => {
    $.getFile(script);
  });
  log("🔔更新脚本结束!");
}
update();
