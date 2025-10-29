import { createPostService, getAllPostsService, deletePostService, updatePostService } from "../services/postService.js"

export async function createPost(req, res){
    if(!req.file || !req.file.location) {
        return res.status(400).json({
            success: false,
            message: 'Image is required',
        });
    };

    const post = await createPostService({
        caption: req.body.caption,
        image: req.file.location
    });

    return res.json({
        success: true,
        message: 'post created successfully',
        data: post
    });
};

// get all posts with pagination
export async function getAllPosts(req, res){
    try {
        const limit = req.query.limit || 10;
        const offset = req.query.offset || 0;

        const paginatedPosts = await getAllPostsService(offset, limit);

        return res.status(200).json({
            success: true,
            message: 'posts fetched successfully',
            data: paginatedPosts
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

export async function deletePost(req, res){
    try {
        const id = req.params.id;
        const response = await deletePostService(id);

        if(!response){
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Post deleted successfully',
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

export async function updatePost(req, res) {
    try {
        const updateObject = req.body;

        if(req.file) {
            updateObject.image = req.file.location;
        }

        const response = await updatePostService(req.params.id, updateObject);

        if(!response) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Post updated successfully',
            data: response,
        });
    } catch (error) {
        console.log(error); 
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}