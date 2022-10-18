const cloudinary = require("cloudinary");
const router = require("express").Router();
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// CLOUD_FOLDER named in frontend
router.delete(`/${process.env.CLOUD_FOLDER}/:public_id`, async (req, res) => {
  const { public_id } = req.params;

  try {
    await cloudinary.uploader.destroy(
      `${process.env.CLOUD_FOLDER}/${public_id}`
    );
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
