const { Router } = require(`express`);
const { ResponseHandler } = require(`../utils`);
const { UserService } = require(`../microservices`);

const userRouter = Router();

// Place your routes in here
userRouter.post(
  `/`,
  async (req, res, next) => {
    try {
      const { LoginData } = req.body;
      console.log(`server api user accessed`, LoginData);
      // verify that your data is making it here to the API by using console.log(assessment);
      // call the AssessmentService.submit function from packages/api/src/microservices/Assessment-Service.js and
      // supply the correct parameters
      const response = await UserService.submit(LoginData);
      let msg = ``;
      let status;
      console.log(`testing 1`, response);
      if (response) {
        msg = `Found user in DB`;
      } else {
        msg = `User not found`;
        status = `FAIL`;
      }
      ResponseHandler(
        res,
        msg,
        response,
        status,
      );
      console.log(`testing 5`, response);
    } catch (err) {
      next(err);
    }
  },
);

userRouter.post(
  `/create`,
  async (req, res, next) => {
    try {
      const { user } = req.body;
      console.log(`server api user accessed`, user);
      // verify that your data is making it here to the API by using console.log(assessment);
      // call the AssessmentService.submit function from packages/api/src/microservices/Assessment-Service.js and
      // supply the correct parameters
      const response = await UserService.create(user);
      let msg = ``;
      console.log(`testing 1`, response);
      if (response) {
        msg = `create user in DB`;
      } else {
        msg = `User did not create`;
      }
      ResponseHandler(
        res,
        msg,
      );
    } catch (err) {
      next(err);
    }
  },
);

module.exports = { userRouter };
