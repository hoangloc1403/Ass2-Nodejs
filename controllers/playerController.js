const Players = require("../models/player");

const clubs = [
  { id: "1", name: "Manchester City" },
  { id: "2", name: "Arsenal" },
  { id: "3", name: "PSG" },
  { id: "4", name: "Manchester Utd" },
  { id: "5", name: "Asernal" },
  { id: "6", name: "Tottenham" },
  { id: "7", name: "Chelsea" },
];

const positions = [
  { id: "1", name: "GoalKeeper" },
  { id: "2", name: "CenterBack" },
  { id: "3", name: "Defender" },
  { id: "4", name: "Sweeper" },
  { id: "5", name: "Midfielder" },
  { id: "6", name: "Central Defensive Midfielder" },
  { id: "7", name: "Attacking midfielder" },
  { id: "8", name: "Central Midfielder" },
  { id: "9", name: "Forward" },
  { id: "10", name: "Striker" },
];

class playerController {
  index(req, res, next) {
    Players.find({})
      .then((players) => {
        res.render("players", {
          title: "The list of Players",
          players: players,
          positions: positions,
          clubs: clubs,
        });
      })
      .catch(next);
  }
  getPlayer(req, res, next) {
    Players.findById(req.params.id)
      .then((player) => {
        res.render("getPlayer", {
          title: "The Player",
          player: player,
          positions: positions,
          clubs: clubs,
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    const player = new Players(req.body);
    player
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
  update(req, res, next) {
    Players.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    });
  }
  delete(req, res, next) {
    Players.findByIdAndRemove(req.params.id, function (err, player) {
      if (err) throw err;
      console.log("Success");
    });
    res.redirect("/");
  }
}
module.exports = new playerController();
