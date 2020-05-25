import Mock from "mockjs";
import Qs from 'qs'
export default [
  {
    url: "test",
    type: "post",
    callback: (options) => {
      return Mock.mock({
        code: 1,
        data: {
          "testFunction": function () {
            if (Qs.parse(options.body)) {
              return Mock.mock({
                "name": Qs.parse(options.body)
              })
            } else {
              return Mock.mock({
                "test": "@name"
              })
            }
          },
          "testString|1": "@cname",
          "testStrings|1-4": "@cname",
          "testNumber|1-10": 1,
          "testNumbers|1-10.2-10": 1,
          "testBoolean|1": true,
          "testBooleans|1-10": true,
          "testObject|1": {
            "name|2": "@cname",
            "age|20-25": 1,
          },
          "testArray|1": [1, 2, 3, 4, 5],
          "testArrays|+1": [1, 2, 3, 4, 5],
          "testArrayss|1-10": [
            {
              "name|1": "@cname line @color",
              "id|+1": "@boolean(90,100,1)",
            },
          ],
          "testArraysss|2": [
            {
              "name|1": "@cname",
              "id|+1": 1,
            },
          ],
        },
        msg: "test success",
      })
    },
  },
  {
    url: "Wechat/wxlogin",
    type: 'get',
    callback: () => {
      return Mock.mock({
        "code|": "@string()",
        "msg": "123",
        data: {}
      })
    }
  }
];