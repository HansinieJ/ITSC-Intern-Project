const { AssessmentService } = require(`../microservices`);
const { ResponseHandler } = require(`../utils`);

const { Router } = require(`express`);

const assessmentRouter = Router();

assessmentRouter.post(
  `/`,
  (req, res, next) => {
    try {
      const { assessment } = req.body;
      console.log(`server api assessment accessed`, assessment);
      // verify that your data is making it here to the API by using console.log(assessment);
      // call the AssessmentService.submit function from packages/api/src/microservices/Assessment-Service.js and
      // supply the correct parameters
      AssessmentService.submit(assessment);

      ResponseHandler(
        res,
        `Submitted assessment to DB`,
        {},
      );
    } catch (err) {
      next(err);
    }
  },
);

assessmentRouter.get(
  `/`,
  async (req, res, next) => {
    try {
      // verify that your data is making it here to the API by using console.log();
      // call the AssessmentService.getList function from packages/api/src/microservices/Assessment-Service.js
      const assessments = [];

      ResponseHandler(
        res,
        `Fetched assessments`,
        { assessments },
      );
    } catch (err) {
      next(err);
    }
  },
);

module.exports = { assessmentRouter };
