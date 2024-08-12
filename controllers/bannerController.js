

const Banner = require('../models/bannerModel.js');

const getBanner = (req, res) => {
  Banner.getBanner((err, banner) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(banner);
  });
};

const updateBanner = (req, res) => {
  const { description, is_visible, timer, link } = req.body;
  if (!description || is_visible == null || !timer || !link) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  Banner.updateBanner(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Banner updated successfully' });
  });
};


const createBanner = (req, res) => {
  const { id, description, is_visible, timer, link } = req.body;


  if (id == null || !description || is_visible == null || timer == null || !link) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  Banner.createBanner({ id, description, is_visible, timer, link }, (err, result) => {
    if (err) {
      console.error('Error creating banner:', err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Banner created successfully', result });
  });
};


module.exports = {
  getBanner,
  updateBanner,
  createBanner
};
