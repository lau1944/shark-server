import express from "express";
import { Widget } from './widget_json';

const app = express();
const port = process.env.PORT || 8080;

app.get("/first_page", (req, res) => {
    res.send(Widget.firsPage);
})

app.get("/second_page", (req, res) => {
    res.send(Widget.secondPage);
})

app.get("/networkImage", (req, res) => {
    res.send(Widget.networkImage);
})

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`)
});