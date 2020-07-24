module.exports = (req, res, next) => {
    console.log(`METHOD: ${req.method}`);
    next();
};