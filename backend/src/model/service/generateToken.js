import jwt from "jsonwebtoken";

export default function generateToken(payload = {}){
    const token = jwt.sign(payload, 'secret', {
        expiresIn: "1h"
    })
    return token;
}