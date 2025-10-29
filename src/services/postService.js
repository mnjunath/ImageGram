import { createPost, findAllPost, countAllPosts, deletePostById, updatePostById } from "../repositories/postRepository.js";

export const createPostService = async (createPostObjest) => {
    const caption = createPostObjest.caption?.trim();
    const image = createPostObjest.image;
    //const user = createPostObjest.user;

    const post = await createPost(caption, image);
    return post;
}

export const getAllPostsService = async (offset, limit) => {
    const posts = await findAllPost(offset, limit);
    const totalDocuments = await countAllPosts();

    const totalPages = Math.ceil(totalDocuments / limit);
    return { posts, totalPages, totalDocuments };
}

export const deletePostService = async (id) => {
    const response = await deletePostById(id);
    return response;
}

export const updatePostService = async (id, updateObj) => {
    const updatedPost = await updatePostById(id, updateObj);
    return updatedPost;
}