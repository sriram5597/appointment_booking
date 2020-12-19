const { verifyToken } = require('./JwtProvider');

module.exports = async (req, res, next) => {
    try {
        if (!(req.headers.authorization && req.headers.authorization.startsWith('Bearer '))) {
            console.log('No token found');
            return res.status(403).send({ message: 'Unauthorized' });
        }

        const token = req.headers.authorization.split('Bearer ')[1];
        const decoded = await verifyToken(token);

        req.user = {
            id: decoded.userId,
            role: decoded.role,
        };

        return next();
    } catch (err) {
        console.log(err.message);
        return res.status(403).send({ message: err.message });
    }
};
