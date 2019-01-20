var Validator = require('jsonschema').Validator,
    personSchema = {
        "id": "/SimplePerson",
        "type": "object",
        "properties": {
            "id": {"type": "number"},
            "firstName": {"type": "string"},
            "lastName": {"type": "string"},
        },
        "required": ["firstName", "lastName"]
    };
    

var personValidator = {

    validate: function(object){
       let v = new Validator();
       return v.validate(object, personSchema);
    } 

}

export default personValidator;
