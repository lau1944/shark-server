
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
                "click_event": "route://second_page?name=jimmy&age=12",
                "child" : {
                  "type": "Text",
                  "data": "Navigate To next page"
                }
              },
              {
                "type": "RaisedButton",
                "color": "#000000",
                "textColor": "#FFFFFF",
                "click_event": "redirect://second_page?name=jimmy&age=12",
                "child" : {
                  "type": "Text",
                  "data": "Redirect To next page"
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
              },
              {
                "type": "RaisedButton",
                "color": "#000000",
                "textColor": "#FFFFFF",
                "click_event": "pop://?name=jummy",
                "child" : {
                  "type": "Text",
                  "data": "Pop"
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