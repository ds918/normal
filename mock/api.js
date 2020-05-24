export default [
  {
    url: "test",
    type: "post",
    data: {
      code: 1,
      data: {
        "testString|1": "@cname",
        "testStrings|1-4": function() {
          // if (true) {
          return {
            id: "@cname",
          };
          // } else {
          // return "@name";
          // }
        },
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
    },
  },
];
