const ObjectID = require('bson-objectid')
const { Types } = require('mongoose')
const generatedObjectID = ObjectID(new Date().getTime()).toHexString()
const isValidOrInvalid = ObjectID.isValid(generatedObjectID)
console.log(
  `ObjectId (${generatedObjectID}) is ${
    isValidOrInvalid ? 'Valid' : 'Invalid'
  }`,
)
const isValidUsingMongoose = Types.ObjectId.isValid(generatedObjectID)
console.log('valid for mongoose', isValidUsingMongoose)

console.log(ObjectID('54495ad94c934721ede76d90'))

console.log(ObjectID(1414093117)) //time
console.log(ObjectID([84, 73, 90, 217, 76, 147, 71, 33, 237, 231, 109, 144]))
console.log(
  ObjectID(new Buffer([84, 73, 90, 217, 76, 147, 71, 33, 237, 231, 109, 144])),
)
