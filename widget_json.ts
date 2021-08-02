
export class Widget {
  static firsPage: string = `{
        "type": "Container",
        "color": "#FFFFFF",
        "alignment": "center",
        "child": {
          "type" : "Container",
          "child" : {
            "type": "Column",
            "mainAxisAlignment": "center",
            "children": [
              {
                "type": "RaisedButton",
                "color": "#000000",
                "textColor": "#FFFFFF",
                "click_event": "route://second_page",
                "child" : {
                  "type": "Text",
                  "data": "To next page"
                }
              }
            ]
          }
        }
      }`

  static secondPage: string = `{
        "type": "Container",
        "color": "#800080",
        "alignment": "center",
        "child": {
          "type" : "Container",
          "child" : {
            "type": "Column",
            "mainAxisAlignment": "center",
            "children": [
              {
                "type": "RaisedButton",
                "color": "#000000",
                "textColor": "#FFFFFF",
                "click_event": "link://https://google.com",
                "child" : {
                  "type": "Text",
                  "data": "To goog.gl"
                }
              }
            ]
          }
        }
      }`

  static networkImage: string = `
    {
        "type": "Container",
        "color": "#FFFFFF",
        "alignment": "center",
        "child": {
          "type": "NetworkImage",
          "src": "https://i.ytimg.com/vi/tveP-w-eIIc/maxresdefault.jpg"
        }
      }`
}