const {valiationResult} = require ('express-validator')

exports.runValidation=(req,res,next) => {
    const errors = valiationResult(req)
}