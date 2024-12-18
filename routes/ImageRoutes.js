import express from "express";
import {
    viewImage,
    getImages,
    getImagesById,
    uploadImages,
    createImages,
    updateImages,
    deleteImages
} from "../controllers/ImageController.js";
import upload from "../multerConfig.js";

const router = express.Router();

router.get('/view/:fileName', viewImage);
router.post('/upload', upload.single('file'), uploadImages);

router.get('/images', getImages);
router.get('/images/:id', getImagesById);
router.post('/images', createImages);
router.patch('/images/:id', updateImages);
router.delete('/images/:id', deleteImages);

export default router;