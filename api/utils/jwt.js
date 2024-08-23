const jwt = require("jsonwebtoken");

const sendToken = async (payload, status, res, next) => {
    try {
        const accessTokenExpire = parseInt(process.env.ACCESS_TOKEN_EXPIRE)
        const refreshTokenExpire = parseInt(process.env.REFRESH_TOKEN_EXPIRE)


        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, { expiresIn: accessTokenExpire });
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_KEY, { expiresIn: refreshTokenExpire });

        const accessTokenOption = {
            expires: new Date(Date.now() + accessTokenExpire * 1000),
            maxAge: accessTokenExpire * 1000,
            httpOnly: true,
            sameSite: 'lax'
        }
        const refreshTokenOption = {
            expires: new Date(Date.now() + refreshTokenExpire * 1000),
            maxAge: refreshTokenExpire * 1000,
            httpOnly: true,
            sameSite: 'lax'
        }
        res.cookie('access_token', accessToken, accessTokenOption)
        res.cookie('refresh_token', refreshToken, refreshTokenOption)
        res.status(status).send({success: true, payload, accessToken})
    } catch (error) {
        next(error)
    }
}
module.exports = sendToken