const AJV = require("ajv");
const ajv = new AJV();

//#region  User Validation
const userSchema = {
    type: "object",
    properties: {
        name: { type: "string", minLength: 4 },
        age: { type: "number", minimum: 10 },
        address: { type: "string" },
        email: {
            type: "string",
            pattern: "^\\S+@\\S+\\.\\S+$" 
        },
        password: {
            type: "string",
            minLength: 8, 
        }
    },
    required: ["name", "age", "address", "email", "password"],
    additionalProperties: false
};

//#endregion  User Validation
module.exports = ajv.compile(userSchema);


