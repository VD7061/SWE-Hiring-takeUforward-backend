const db = require('../db.js');

const Banner = {
  getBanner(callback) {
    const query = 'SELECT * FROM banners WHERE id = 1';
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  },

  updateBanner(data, callback) {
    const query = `
      UPDATE banners 
      SET description = ?, is_visible = ?, timer = ?, link = ?
      WHERE id = 1
    `;
    const { description, is_visible, timer, link } = data;
    db.query(query, [description, is_visible, timer, link], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  createBanner(data, callback) {
    const query = `
      INSERT INTO banners (id, description, is_visible, timer, link)
      VALUES (?, ?, ?, ?, ?)
    `;
    const { id, description, is_visible, timer, link } = data;
    db.query(query, [id, description, is_visible, timer, link], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }
};

module.exports = Banner;
