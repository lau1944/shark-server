"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
var Widget = /** @class */ (function () {
    function Widget() {
    }
    Widget.firsPage = "{\n        \"type\": \"Container\",\n        \"color\": \"#FFFFFF\",\n        \"alignment\": \"center\",\n        \"child\": {\n          \"type\" : \"Container\",\n          \"child\" : {\n            \"type\": \"Column\",\n            \"mainAxisAlignment\": \"center\",\n            \"children\": [\n              {\n                \"type\": \"RaisedButton\",\n                \"color\": \"#000000\",\n                \"textColor\": \"#FFFFFF\",\n                \"click_event\": \"route://second_page?name=jimmy&age=12\",\n                \"child\" : {\n                  \"type\": \"Text\",\n                  \"data\": \"Navigate To next page\"\n                }\n              },\n              {\n                \"type\": \"RaisedButton\",\n                \"color\": \"#000000\",\n                \"textColor\": \"#FFFFFF\",\n                \"click_event\": \"redirect://second_page?name=jimmy&age=12\",\n                \"child\" : {\n                  \"type\": \"Text\",\n                  \"data\": \"Redirect To next page\"\n                }\n              }\n            ]\n          }\n        }\n      }";
    Widget.secondPage = "{\n        \"type\": \"Container\",\n        \"color\": \"#800080\",\n        \"alignment\": \"center\",\n        \"child\": {\n          \"type\" : \"Container\",\n          \"child\" : {\n            \"type\": \"Column\",\n            \"mainAxisAlignment\": \"center\",\n            \"children\": [\n              {\n                \"type\": \"RaisedButton\",\n                \"color\": \"#000000\",\n                \"textColor\": \"#FFFFFF\",\n                \"click_event\": \"link://https://google.com\",\n                \"child\" : {\n                  \"type\": \"Text\",\n                  \"data\": \"To goog.gl\"\n                }\n              },\n              {\n                \"type\": \"RaisedButton\",\n                \"color\": \"#000000\",\n                \"textColor\": \"#FFFFFF\",\n                \"click_event\": \"pop://?name=jummy\",\n                \"child\" : {\n                  \"type\": \"Text\",\n                  \"data\": \"Pop\"\n                }\n              }\n            ]\n          }\n        }\n      }";
    Widget.networkImage = "\n    {\n        \"type\": \"Container\",\n        \"color\": \"#FFFFFF\",\n        \"alignment\": \"center\",\n        \"child\": {\n          \"type\": \"NetworkImage\",\n          \"src\": \"https://i.ytimg.com/vi/tveP-w-eIIc/maxresdefault.jpg\"\n        }\n      }";
    return Widget;
}());
exports.Widget = Widget;
//# sourceMappingURL=widget_json.js.map