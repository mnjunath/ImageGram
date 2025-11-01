import { createCommentService, findCommentByIdservice } from "../services/commentService.js";

export async function createComment(req, res) {
    try {
        const { content, onModel, commentableId } = req.body;
        const response = await createCommentService(content, req.user.id, onModel, commentableId);
        return res.status(201).json({
            success: true,
            message: 'Comment created successfully',
            data: response
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to create comment',
            error: error.message
        });
    }
}

export async function getCommentById(req, res) {
    try {
        const commentId = req.params.id;
        const response = await findCommentByIdservice(commentId);
        if(!response) {
            return res.status(404).json({
                success: false,
                message: 'Comment not found'
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Comment fetched successfully',
            data: response
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch comment',
            error: error.message
        });
    }
}