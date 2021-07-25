"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
var Widget = /** @class */ (function () {
    function Widget() {
    }
    Widget.container = "{\n        \"type\": \"Container\",\n        \"color\": \"#FF00FF\",\n        \"alignment\": \"center\",\n        \"child\": {\n          \"type\": \"Text\",\n          \"data\": \"Flutter dynamic widget\",\n          \"maxLines\": 3,\n          \"overflow\": \"ellipsis\",\n          \"style\": {\n            \"color\": \"#00FFFF\",\n            \"fontSize\": 20.0\n          }\n        }\n      }";
    Widget.row = "\n    {\n        \"type\": \"Row\",\n        \"crossAxisAlignment\": \"start\",\n        \"mainAxisAlignment\": \"start\",\n        \"textBaseline\": \"alphabetic\",\n        \"textDirection\": \"ltr\",\n        \"children\":[\n          {\n            \"type\" : \"Text\",\n            \"data\" : \"Flutter\"\n          },\n          {\n            \"type\": \"RaisedButton\",\n            \"color\": \"##FF00FF\",\n            \"padding\": \"8,8,8,8\",\n            \"textColor\": \"#00FF00\",\n            \"elevation\" : 8.0,\n            \"splashColor\" : \"#00FF00\",\n            \"child\" : {\n              \"type\": \"Text\",\n              \"data\": \"Widget\"\n            }\n          },\n          {\n            \"type\" : \"Text\",\n            \"data\" : \"Demo\"\n          },\n          {\n            \"type\" : \"Expanded\",\n            \"child\" : {\n              \"type\" : \"Container\",\n              \"color\" : \"#FFFF00\",\n              \"alignment\" : \"center\",\n              \"child\" : {\n                \"type\" : \"Text\",\n                \"data\" : \"Expanded Widget\"\n              }\n            }\n          }\n        ]\n      }";
    Widget.networkImage = "\n    {\n        \"type\": \"Container\",\n        \"color\": \"#FFFFFF\",\n        \"alignment\": \"center\",\n        \"child\": {\n          \"type\": \"NetworkImage\",\n          \"src\": \"https://i.ytimg.com/vi/tveP-w-eIIc/maxresdefault.jpg\"\n        }\n      }";
    return Widget;
}());
exports.Widget = Widget;
//# sourceMappingURL=widget_json.js.map