module.exports = (database, DataTypes) => {
  const books = database.define("bookss", {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    auther: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    ISBN: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    shelf_loc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return books;
};
