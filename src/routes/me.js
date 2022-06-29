const express = require('express');
const router = express.Router();

const meController = require('../app/newscontroller/MeController');

// đọc tuyến đường từ trên xuống nên phải sắp xếp đường con trước

router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);


module.exports = router;