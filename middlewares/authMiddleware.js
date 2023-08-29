module.exports = (request, response, next) => {
    if (request.headers['authorization'] !== '123') {
        response.status(401).render('error', {
            message:"Login Required",
            error:{status:401, stack:Error().stack}
        });
    }
    else {
        next();
    }
}