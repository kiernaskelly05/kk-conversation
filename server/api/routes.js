module.exports = function (app) {
    // whenever someone goes to "localhost:3000/api/watson"
    // return the contents in the '/watson' directory.
    app.use('/api/watson', require('./watson'));
};
