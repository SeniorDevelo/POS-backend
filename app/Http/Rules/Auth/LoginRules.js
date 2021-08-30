const { body } = require("express-validator")

const LoginRules = [
    body("email", "field email can't be null").exists(),
    body("email", "not email").isEmail(),
    body("password", "field password can't be null").exists()
]
