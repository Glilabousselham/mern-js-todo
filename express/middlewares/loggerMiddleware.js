module.exports = function loggerMiddleware(req, res, next) {
    const { url, method } = req;
    const d = new Date();
    console.log(method, url, `${d.getHours()}:${d.getMinutes}`);
    next();
};
