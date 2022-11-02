const File = require("../Models/File");

exports.getAll = async (req, res) => {
  try {
    const file = await File.find();
    res.json(file);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.create = async (req, res) => {
  const { name } = req.body;
  let filesPaths = [];

  if (Array.isArray(req.files.files) && req.files.files.length > 0) {
    for (let file of req.files.files) {
      filesPaths.push("/" + file.path);
    }
  }

  try {
    const createdFile = await File.create({
      name,
      files: filesPaths,
    });
    res.json({ message: "Media created successfully", createdFile });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
