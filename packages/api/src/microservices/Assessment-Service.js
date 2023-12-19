const { Assessments } = require(`../database/models`);

exports.submit = async (assessmentPayload) => {
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database

  const calculateScore = (assessment) => {
    const score = Number(assessment.Prev_Cat) +
      Number(assessment.alt_Cats) +
      Number(assessment.alt_owner) +
      Number(assessment.Play_dog) +
      Number(assessment.Hiss_Str);
    return score;
  };

  const calculateRisk = (score) => {

    if (score) {
      return `High`;
    }
    return `Low`;

  };

  const StoreToDB = (assessment) => {

    const instrumentType = String(assessment.instrumentType);
    const { catName } = assessment;
    const { CatDoB } = assessment;
    const score = calculateScore(assessment);
    const riskLevel = calculateRisk(score);
    const date = new Date();
    const createAt = date.getDate();
    const updateAt = date.getDate();
    const deleteAt = date.getDate();

    return (
      {
        CatDoB,
        catName,
        createAt,
        deleteAt,
        instrumentType,
        riskLevel,
        score,
        updateAt,

      }
    );

  };

  const test = convertFormValuesToStoreInDB(assessmentPayload);
  console.log(test);
  const result = await Assessments.create(StoreToDB(assessmentPayload));
  if (result) {
    console.log(`result stored in DB`);
    return result;
  }
  console.log(`error`);
};

exports.getList = () => {
  // use the sequelize model Assessments from packages/api/src/database/models to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];

  return assessments;
};
