const { Users } = require(`../database/models`);

exports.submit = async (LoginData) => {
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
  console.log(`testing 2`, LoginData);
  const result = await Users.findAll({
    where: {
      password: LoginData.pwd,
      username: LoginData.username,

    },
  });
  if (result) {
    console.log(`User found in DB`);
    return result;
  }
};
