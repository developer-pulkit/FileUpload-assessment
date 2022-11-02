const express = require("express");
const fileController = require("../controllers/fileController");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }
    if (!fs.existsSync("public/files")) {
      fs.mkdirSync("public/files");
    }
    cb(null, "public/files");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

//get all files
router.get("/all", fileController.getAll);

//post create new media
router.post(
  "/create",
  upload.fields([
    {
      name: "files",
      maxCount: 10,
    },
  ]),
  fileController.create
);

module.exports = router;
