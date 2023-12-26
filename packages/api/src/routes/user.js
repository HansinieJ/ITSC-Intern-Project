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
      console.log(`testing 1`, response);
      if (response.length) {
        msg = `Found user in DB`;
      } else {
        msg = `User not found`;
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
