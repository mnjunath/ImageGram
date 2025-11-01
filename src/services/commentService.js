import { createComment, findCommentById } from "../repositories/commentRepository.js";
import { findPostById } from "../repositories/postRepository.js"

export const createCommentService = async (Content, userId, onModel, commentableId) => {
    try {
        let parent = await fetchCommentParent(onModel, commentableId);
        if(!parent) {
            throw {
                status: 404,
                message: `${onModel} not found`
            }
        }

        const newComment = await createComment(Content, userId, onModel, commentableId);
        await addChildCommentToParent(onModel, newComment, parent);
        return newComment;
    } catch (error) {
        console.log(error);
    }
}

export const findCommentByIdservice = async (commentId) => {
    try {
        return await Comment.findCommentById(commentId);
    } catch (error) {
        console.log(error);
    }
}

const addChildCommentToParent = async (onModel, comment, parent) => {
    try {
        if(onModel === 'Post') {
            parent.comments.push(comment._id);
        } else if(onModel === 'Comment') {
            parent.replies.push(comment._id);
        }
        await parent.save();
    } catch (error) {
        console.log(error);
    }
}

const fetchCommentParent = async (onModel, commentableId) => {
    try {
        let parent;
        if(onModel === 'Post') {
            parent = await findPostById(commentableId);
        }   
        else if(onModel === 'Comment') {
            parent = await findCommentById(commentableId);
        }
        return parent;
    } catch (error) {
        console.log(error);
    }
}
