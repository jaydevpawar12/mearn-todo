const TODO = require("./../models/Todo")
exports.addTodo = async (req, res) => {
    try {
        const result = await TODO.create(req.body)
        res.json({
            message: "add todo success",
            result
        })
    } catch (error) {
        res.json({
            message: "something went wrong" + error,
        })

    }
}
exports.getTodos = async (req, res) => {
    try {
        const result = await TODO.find()
        // const result =await TODO.create(),
        // const result =await TODO.find(),
        // const result =await TODO.findByIdAndUpdate()
        // const result =await TODO.findByIdAndUpdate()
        res.json({
            message: "get todo success",
            result
        })
    } catch (error) {
        res.json({
            message: "something went wrong" + error,
        })

    }
}
exports.updateTodo = async (req, res) => {
    try {
        // const result = await TODO.find()
        // const result =await TODO.create(),
        // const result =await TODO.find(),
        const todoId = req.params.id
        const result = await TODO.findByIdAndUpdate(todoId, req.body, { new: true })

        res.json({
            message: "add todo success",
            result
        })
    } catch (error) {
        res.json({
            message: "something went wrong" + error,
        })

    }
}
exports.deleteTodo = async (req, res) => {
    try {
        // const result = await TODO.find()
        // const result =await TODO.create(),
        // const result =await TODO.find(),
        const todoId = req.params.id
        // const result =await TODO.findByIdAndUpdate(todoId,req.body)
        const result = await TODO.findByIdAndDelete(todoId)
        // const result =await TODO.findByIdAndUpdate()
        res.json({
            message: "get todo success",
            result
        })
    } catch (error) {
        res.json({
            message: "something went wrong" + error,
        })

    }
}