
export class Widget {
    static container: string = `{
        "type": "Container",
        "color": "#FF00FF",
        "alignment": "center",
        "child": {
          "type": "Text",
          "data": "Flutter dynamic widget",
          "maxLines": 3,
          "overflow": "ellipsis",
          "style": {
            "color": "#00FFFF",
            "fontSize": 20.0
          }
        }
      }`

    static row: string = `
    {
        "type": "Row",
        "crossAxisAlignment": "start",
        "mainAxisAlignment": "start",
        "textBaseline": "alphabetic",
        "textDirection": "ltr",
        "children":[
          {
            "type" : "Text",
            "data" : "Flutter"
          },
          {
            "type": "RaisedButton",
            "color": "##FF00FF",
            "padding": "8,8,8,8",
            "textColor": "#00FF00",
            "elevation" : 8.0,
            "splashColor" : "#00FF00",
            "child" : {
              "type": "Text",
              "data": "Widget"
            }
          },
          {
            "type" : "Text",
            "data" : "Demo"
          },
          {
            "type" : "Expanded",
            "child" : {
              "type" : "Container",
              "color" : "#FFFF00",
              "alignment" : "center",
              "child" : {
                "type" : "Text",
                "data" : "Expanded Widget"
              }
            }
          }
        ]
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