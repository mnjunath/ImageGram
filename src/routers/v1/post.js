import express from "express";
import { s3uploader } from "../../config/multerConfig.js";
import { createPost, getAllPosts, deletePost, updatePost } from "../../controllers/postController.js";
import { zodPostSchema } from "../../validator/zodPostSchema.js";
import { validate } from "../../validator/zodValidator.js";

const router = express.Router();

// Create a new post — validate before uploading image to S3
router.post("/", s3uploader.single("image"), validate(zodPostSchema), createPost);

// Get all posts (pagination handled in controller)
router.get("/", getAllPosts);

// Delete post by ID
router.delete("/:id", deletePost);

// Update post (caption or image)
router.put("/:id", s3uploader.single("image"), updatePost);

export default router;
