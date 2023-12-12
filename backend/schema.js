const joi = require("joi");

module.exports.userSchema=joi.object({
        name:joi.string().required(),
        email:joi.string().min(3).required().email(),
        password:joi.string().min(5).max(30).required(),
        location:joi.string().required()
});

module.exports.userLoginSchema=joi.object({
        email:joi.string().min(3).required().email(),
        password:joi.string().min(5).max(30).required(),
});