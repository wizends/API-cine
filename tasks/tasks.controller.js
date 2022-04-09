const TaskModel = require('./tasks.model')

module.exports = class Tasks {
    static async list(ctx) {
        const query = await TaskModel.find().exec().then(ctx.ok, ctx.badRequest);
        return query;

    }

}