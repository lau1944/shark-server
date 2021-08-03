"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var widget_json_1 = require("./widget_json");
var app = express_1.default();
var port = process.env.PORT || 8080;
app.get("/first_page", function (req, res) {
    res.send(widget_json_1.Widget.firsPage);
});
app.get("/second_page", function (req, res) {
    res.send(widget_json_1.Widget.secondPage);
});
app.get("/networkImage", function (req, res) {
    res.send(widget_json_1.Widget.networkImage);
});
// start the Express server
app.listen(port, function () {
    // tslint:disable-next-line:no-console
    console.log("server started at http://localhost:" + port);
});
//# sourceMappingURL=index.js.map