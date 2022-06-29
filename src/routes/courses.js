const express = require('express');
const router = express.Router();

const courseController = require('../app/newscontroller/CourseController');

// đọc tuyến đường từ trên xuống nên phải sắp xếp đường con trước
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-action', courseController.handleFormActions);
router.post('/handle-form-action_restore', courseController.handleFormActions_restore);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);
router.get('/create', courseController.create);
router.post('/store', courseController.store);



router.get('/:slug', courseController.show);

module.exports = router;