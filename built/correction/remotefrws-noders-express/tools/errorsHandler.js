"use strict";
module.exports.error = (err, req, res, next) => {
    res.status(500).send("Something went wrong");
};
//# sourceMappingURL=errorsHandler.js.map