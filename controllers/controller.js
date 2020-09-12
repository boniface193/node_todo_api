const Post = require('../models/todos')

exports.renderGetAll = async (req, res) => {
    try {
        const post = await Post.find()
        res.json(post)
    } catch (err) {
        res.json(err)
    }

}

exports.renderPost = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savePost = await post.save()
        res.json(savePost)
    } catch (err) {
        res.json(err)
    }
}

exports.renderPostId = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (err) {
        res.json(err)
    }

}

exports.renderPostUpdate = async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set:
                    { title: req.body.title, description: req.body.description }
            }
        )
        res.json(updatePost)
    } catch (err) {
        res.json(err)
    }
}

exports.renderDelete = async(req, res) => {
    try{
        const post = await Post.deleteOne({_id: req.params.postId})
        res.json(post)
    }catch(err){
        res.json(err)
    }
}