const covid19ImpactEstimator = () => {
  const input = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  };
  return {
    data: input,
    impact: {},
    severeImpact: {}
  };
};
export default covid19ImpactEstimator;
