const Taskcontroller = require('./tasks.controller');

module.exports = router => {
    router
        .get(`/getall`,Taskcontroller.list)
        .post('/addTodb', Taskcontroller.add)
};