const { Users } = require(`../database/models`);
const bcrypt = require(`bcrypt`);

exports.submit = async (LoginData) => {
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
  console.log(`testing 2`, LoginData);
  const result = await Users.findOne({
    where: {
      username: LoginData.username,

    },
  });
  if (result) {
    console.log(`User found in DB`);
    const passwordMatch = await bcrypt.compare(LoginData.pwd, result.password);
    if (passwordMatch) {
      // Create a new object without including the password property
      const userWithoutPassword = {
        created_at: result.created_at,
        deleted_at: result.deleted_at,
        first_name: result.first_name,
        is_supervisor: result.is_supervisor,
        last_name: result.last_name,
        updated_at: result.updated_at,
        userid: result.userid, // Include other properties as needed
        username: result.username,

      };

      return userWithoutPassword;
    }

  } return null;
};

exports.create = async (LoginData) => {
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
  console.log(`insert new user`, LoginData);
  const currentDate = new Date().toDateString();
  const pwd = await bcrypt.hash(LoginData.password, 10);

  const result = await Users.create({
    created_at: currentDate,
    first_name: LoginData.first_name,
    is_supervisor: LoginData.is_supervisor,
    last_name: LoginData.last_name,
    password: pwd,
    username: LoginData.username,

  });
  if (result) {
    console.log(`User found in DB`);
    return result;
  }
};
