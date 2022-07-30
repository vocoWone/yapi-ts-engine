const generate = require("../src/index");
const json = require("./index.json");

generate({
  customData: json,
  serverUrl: "https://test.com",
  projectId: "666",
  servicePath: "/output",
  requestImportExpression: "import ajax from 'utils/ajax';\nimport BaseResult from 'utils/type';",
  hiddenBodyInGET: true,
  apiRename:(name)=>{
    return name.replace(/^((\/v\w\.\w)?\/nuwa\/)|(\/demo)/,"")
  },
  responseType: (type)=> {
    return `BaseResult<${type}>`
  },
  ajaxName: "ajax",
  hiddenTypes:["headers"],
  additionalPageHeader: `
/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
`,
});