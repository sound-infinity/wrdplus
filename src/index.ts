//
import "./modules/wrd-lib-v2"
import "./scripts-v2/precedents"
import "./scripts-v2/patches"
import "./scripts-v2/settings"

/*
// Loader
require("./scripts/theme-loader");
require("./scripts/patches");

// Modules
import { searchThreadSync } from "./modules/wrd-lib";
import { LatestThreads as LT } from "./scripts/globals";

let oncomplete = () => {
  if (!document.body.innerText.match("Checking your browser")) {
    // require('./scripts/key-binds')
    require("./scripts/click-handler");
    LT.Migrate(searchThreadSync());
    require("./scripts/link-handler");
    require("./scripts/changelog");
    require("./scripts/addons");
  }
};

if (document.readyState === "complete") {
  require("./scripts/precedents");
  oncomplete();
} else {
  document.onreadystatechange = () => {
    switch (document.readyState) {
      case "complete":
        oncomplete();
        break;
      case "interactive":
        require("./scripts/settings");
        require("./scripts/precedents");
        break;
      default:
        break;
    }
  };
}
*/
