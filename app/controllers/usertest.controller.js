exports.allAccess = (req, res) => {
  res.status(200).send("Public Content. No need to login, open to guest user!");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content. open to all login user.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content. has to be ROLE_ADMIN permission.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content. open to all login user.");
};
