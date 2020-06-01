import Mock from "mockjs";
import Qs from "qs";
const Random = Mock.Random;
const code = Random.boolean(90, 10, true) ? 1 : 0;
export default [
  {
    url: "test",
    type: "post",
    callback: () => {
      // console.log(Qs.parse(options.body));
      return Mock.mock({
        code: 1,
        data: {
          testFunction: function() {
            if (Qs.parse(options.body)) {
              return Mock.mock({
                name: Qs.parse(options.body),
              });
            } else {
              return Mock.mock({
                test: "@name",
              });
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
      });
    },
  },
  {
    url: "Wechat/wxlogin",
    type: "get",
    callback: (options) => {
      console.log(options);
      if (code === 1) {
        return Mock.mock({
          code: code,
          msg: "Wechat/wxlogin success",
          data: {
            "all_count|1-100": 1,
            all_line: {
              "date|19": ["@date(MM-dd)"],
              "home|19": ["@natural(0,2)"],
              "post|19": ["@natural(10,30)"],
              "watch|19": ["@natural(0,5)"],
            },
            "company_count|1-100": 1,
            "noReceiptList|20-30": [
              {
                "id|+1": 2,
                truename: "@cname",
              },
            ],
            root_url: "@url(https)",
            appid: "@string(10,20)",
            image: "@image(600x300,@color,@color,jpg,@name)",
          },
        });
      } else {
        return Mock.mock({
          code: code,
          msg: "Wechat/wxlogin fail",
          data: {
            code: 0,
          },
        });
      }
    },
  },
];
