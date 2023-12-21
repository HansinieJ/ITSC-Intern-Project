const { Assessment } = require(`../database/models`);

exports.submit = async (assessmentPayload) => {
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
  console.log(`testing 2`);
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

    const { catDoB } = assessment;
    // const formattedDate = CatDoB.toLocaleDateString();
    // const CatDoBDate = Date.parse(formattedDate);
    // console.log(assessment.CatDoB);

    const score = calculateScore(assessment);
    const riskLevel = calculateRisk(score);

    const currentDate = new Date().toDateString();
    const createAt = currentDate;
    const updateAt = currentDate;
    const deleteAt = currentDate;

    return (
      {
        catDateOfBirth: catDoB,
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

  const test = StoreToDB(assessmentPayload);
  console.log(`DB object to parse`, test);
  const result = await Assessment.create(StoreToDB(assessmentPayload));
  if (result) {
    console.log(`result stored in DB`);
    return result;
  }
  console.log(`error`);
};

exports.getList = async () => {
  // use the sequelize model Assessments from packages/api/src/database/models to fetch
  // the assessment data from the PostgreSQL database
  // const assessment = [];
  const retrievedResults = await Assessment.findAll();
  if (retrievedResults) {
    console.log(`results received`);
    console.log(retrievedResults);
    return retrievedResults;
  }
  console.log(`error`);
};
