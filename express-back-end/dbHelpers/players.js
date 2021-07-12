module.exports = (db) => {
  const getPlayers = () => {
    const query = {
      text: "SELECT * FROM players",
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  return {
    getPlayers
  };
};