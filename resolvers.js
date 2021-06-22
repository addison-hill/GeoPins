const user = {
  _id: "1",
  name: "Addy",
  email: "addy@gmail.com",
  picture: "https://cloudinary.com/asdf",
};

module.exports = {
  Query: {
    me: () => user,
  },
};
