const Home = {
  async index(req, res) {
    try {
      return res.status(200).render('index', { title: 'FeesTracker - Homepage' });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

module.exports = Home;
