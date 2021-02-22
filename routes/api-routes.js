var path = require("path");
const { Router } = require("express");
const Exercise = require("../exerciseModel");

module.exports = function (app) {
    // create a new excercise
    app.post("/submit", ({ body }, res) => {
        Exercise.create(data)
            .then(workout => {
                console.log(workout);
            })
            .catch(({ message }) => {
                console.log(message);
            });
    });
};
