const db = require("../models/workout");
const mongojs = require("mongojs");

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        db.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });


    app.put("/api/workouts", (req, res) => {
        db.create({})
            .then(data => {
                console.log(data);
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", function (req, res) {
        db.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });


    app.put("/api/workouts/range", function (req, res) {
        db.create({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        const id = mongojs.ObjectId(req.params.id);
        db.find({ _id: id })
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            });
    });
}
