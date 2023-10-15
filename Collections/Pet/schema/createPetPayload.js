module.exports = {
    type: "object",
    properties: {
        id: {
            type: "number"
        },
        petName: {
            type: "string"
        },
        age: {
            type: "number"
        },
        image: {
            type: "string"
        },

    },
    required: ["id","petName","age","image"],
    additionalProperties: false,
}