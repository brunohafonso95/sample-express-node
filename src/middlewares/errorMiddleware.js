const httpStatus = require("http-status");

const HttpError = require("../errors/HttpError");

module.exports = (error, req, res, next) => {
  if (error) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({ message: error.message });
    }

    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "internal server error" });
  }

  next();
};
