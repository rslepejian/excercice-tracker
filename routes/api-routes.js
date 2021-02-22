var path = require("path");
const { Router } = require("express");
const db = require("../exerciseModel");
const mongoose = require("mongoose");

module.exports = function (app) {
    // api route for getting all workouts
    app.get("/api/workouts", function (req, res) {


        db.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                }
            }
        ]).then(function (error, data) {
            if (error) {
                res.send(error);
            } else {
                res.json(data);
            }
        });
    });

    app.post("/api/workouts", function (req, res) {
        db.create({}, function (error, data) {
            if (error) {
                res.send(error);
            } else {
                res.json(data);
            }
        })
    });

    app.put("/api/workouts/:id", function (req, res) {
        db.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, function (error, data) {
            if (error) {
                res.send(error);
            } else {
                res.json(data);
            }
        });
    });

    app.get("/api/workouts/range", function (req, res) {
        db.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                }
            }
        ]).limit(7).then(function (error, data) {
            if (error) {
                res.send(error);
            } else {
                res.json(data);
            }
        });
    });

};