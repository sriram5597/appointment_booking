const Jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync(`${__dirname}/../keys/private.pem`);
const publicKey = fs.readFileSync(`${__dirname}/../keys/public.pem`);

exports.generateToken = (user) => {
    const payload = {
        userId: user.id,
        role: user.role,
    };

    const signOptions = {
        issuer: 'Appointment Booking App',
        subject: user.email,
        audience: '',
        expiresIn: '1h',
        algorithm: 'RS256',
    };

    return Jwt.sign(payload, privateKey, signOptions);
};

exports.verifyToken = (token) => new Promise((resolve, reject) => {
    Jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
        if (err) {
            reject(err);
        }
        resolve(decoded);
    });
});
