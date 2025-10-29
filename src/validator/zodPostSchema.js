import { z } from 'zod';
const ACCEPTED_IMAGE_TYPES = ["image/jpg", "image/jpeg", "image/png", "image/webp"];

export const zodPostSchema = z.object({
    caption: z.string({message: "Caption is required"}).min(1)
});