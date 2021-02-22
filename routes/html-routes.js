var path = require("path");

module.exports = function (app) {

  app.get("/", function (req, res) {
    console.log("go to index");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", function (req, res) {
    console.log("go to ex");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function (req, res) {
    console.log("go to stats");
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

};
