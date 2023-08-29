const userSchema = require('../models/userSchema');
module.exports = (request, response, next) => {
    const { error } = userSchema.validate(request.body);
    if (error) {
      response.status(422).render('error', { message: "Campos não foram validados", error: error });
    }
    else {
      next();
    }
  }