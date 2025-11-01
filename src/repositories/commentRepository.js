import Comment from "../schema/comment.js";

export const createComment = async (content, userId, onModel, commentableId) => {
    try {
        const newComment = await Comment.create({ content, userId, onModel, commentableId, likes: [], replies: [] });
        return newComment;
    } catch (error) {
        console.log(error);
    }
};

export const findCommentById = async (commentId) => {
    try {
        const comment = await Comment.findById(commentId);
        return comment;
    } catch (error) {
        console.log(error);
    }
}