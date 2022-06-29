const Course = require('../models/Courses');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] home
    home(req, res, next) {
        // res.json({
        //     name: 'test'
        // })
        // dùng call back
        // Course.find({}, function(err, courses) {
        //         if (!err) {
        //             res.json(courses);
        //         } else { res.status(400).json({ error: 'ERROR !!!' }); }
        //     })

        // dùng promise
        Course.find({})
            .then((courses) => {
                // courses = courses.map(course => course.toObject())
                res.render('home', {
                    /*courses*/ courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
        // res.render('home');
    }
    // GET /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
