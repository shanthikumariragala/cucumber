[
  {
    "line": 1,
    "elements": [
      {
        "line": 4,
        "name": "display welcome message",
        "description": "",
        "type": "background",
        "keyword": "Background",
        "steps": [
          {
            "result": {
              "duration": 2598800,
              "status": "passed"
            },
            "line": 5,
            "name": "application displaying welcome message",
            "match": {
              "location": "test.application_displaying_welcome_message()"
            },
            "keyword": "Given "
          }
        ]
      },
      {
        "start_timestamp": "2019-07-22T12:02:00.418Z",
        "line": 8,
        "name": "validate login functionality",
        "description": "",
        "id": "purchase-products-in-online;validate-login-functionality",
        "type": "scenario",
        "keyword": "Scenario",
        "steps": [
          {
            "result": {
              "duration": 32177921100,
              "status": "passed"
            },
            "line": 10,
            "name": "user opens login application",
            "match": {
              "location": "test.user_opens_login_application()"
            },
            "keyword": "When "
          },
          {
            "result": {
              "duration": 142662500,
              "status": "passed"
            },
            "line": 11,
            "name": "entering username as \"mercury\"",
            "match": {
              "arguments": [
                {
                  "val": "\"mercury\"",
                  "offset": 21
                }
              ],
              "location": "test.entering_username_as(String)"
            },
            "keyword": "And "
          },
          {
            "result": {
              "duration": 117452500,
              "status": "passed"
            },
            "line": 12,
            "name": "entering password as \"mercury\"",
            "match": {
              "arguments": [
                {
                  "val": "\"mercury\"",
                  "offset": 21
                }
              ],
              "location": "test.entering_password_as(String)"
            },
            "keyword": "And "
          }
        ]
      }
    ],
    "name": "purchase products in Online",
    "description": "",
    "id": "purchase-products-in-online",
    "keyword": "Feature",
    "uri": "file:test/test.feature",
    "tags": []
  }
]