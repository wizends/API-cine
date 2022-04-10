const TaskModel = require('./tasks.model')


module.exports = class Tasks {
    static async list(ctx) {
        
        const query = await TaskModel.paginate({},{page:ctx.header.page, limit:5}).then(ctx.ok, ctx.badRequest);
    
        console.log(ctx.headers.page)
        return query;

    }
    
    static async add(ctx){   
        const titulo = await TaskModel.findOne({ 'Title': ctx.request.body.Title });
        if(titulo === null){
            return TaskModel.create(ctx.request.body).then(ctx.ok, ctx.badRequest);
        }else{
            console.log("Ya existe esta pelicula en la bd");
        };
    }

}