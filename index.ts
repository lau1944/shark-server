import express from "express";
import { Widget } from './widget_json';

const app = express();
const port = 8080;

app.get("/container", (req, res) => {
    res.send(Widget.container);
})

app.get("/row", (req, res) => {
    res.send(Widget.row);
})

app.get("/networkImage", (req, res) => {
    res.send(Widget.networkImage);
})

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`)
});