const db = require("../models/Excercises");
const router = require("express").Router();

router.post("/api/workouts", (req, res) => {
    db.create()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});


// router.put("/api/workouts", (req, res) => {
//     db.create({})
//         .then(data => {
//             console.log(data);
//             res.json(data);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

router.get("/api/workouts/range", function (req, res) {
    db.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});


router.put("/api/workouts/range", function (req, res) {
    db.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    const id = mongojs.ObjectId(req.params.id);
    db.find({ _id: id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.delete("/api/workouts", ({ body }, res) => {
    db.findByIdAndDelete(body.id)
        .then(() =>
            res.json(true);
})
    .catch(err => {
        res.json(err);
    });
    
}

module.exports = router;