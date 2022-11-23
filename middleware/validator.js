import { Validator } from "express-json-validator-middleware";

const { validate } = new Validator();

const catCreateSchema = {
    type: "object",
    required: ["name"],
    additionalProperties: false,
    properties: {
        name: {
            type: "string",
            minLength: 2
        },
        age: {
            type: "number",
            minimum: 0,
            maximum: 50
        },
        description: {
            type: "string"
        },
        favourite: {
            type: "boolean"
        },
        rate: {
            type: "number",
            minimum: 0,
            maximum: 10
        },
        img_link: {
            type: "string"
        }
    }
}

const catPutSchema = {
    type: "object",
    additionalProperties: false,
    minProperties: 1,
    properties: {
        name: {
            type: "string",
            minLength: 2
        },
        age: {
            type: "number",
            minimum: 0,
            maximum: 50
        },
        description: {
            type: "string"
        },
        favourite: {
            type: "boolean"
        },
        rate: {
            type: "number",
            minimum: 0,
            maximum: 10
        },
        img_link: {
            type: "string"
        }
    }
}

const catPatchSchema = {
    type: "object",
    additionalProperties: false,
    minProperties: 1,
    maxProperties: 1,
    properties: {
        name: {
            type: "string",
            minLength: 2
        },
        age: {
            type: "number",
            minimum: 0,
            maximum: 50
        },
        description: {
            type: "string"
        },
        favourite: {
            type: "boolean"
        },
        rate: {
            type: "number",
            minimum: 0,
            maximum: 10
        },
        img_link: {
            type: "string"
        }
    }
}

export {
    validate,
    catCreateSchema,
    catPutSchema,
    catPatchSchema
}