const Taskcontroller = require('./tasks.controller');

module.exports = router => {
    router
        .get('/prueba', Taskcontroller.list);
};