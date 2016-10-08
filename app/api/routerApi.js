import express from 'express';
import userApi from './user';
import validateApi from './validate';
import articlesApi from './articles'
import uploadedImagesApi from './uploadImage';

const router = express.Router();

router.use('/user', userApi);
router.use('/validate',validateApi);
router.use('/articles', articlesApi);
router.use('/uploadImage', uploadedImagesApi);

export default router;
