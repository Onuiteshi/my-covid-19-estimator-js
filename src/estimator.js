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
    impact: {
      currentlyInfected: input.reportedCases * 10,
      infectionsByRequestedTime: input.reportedCases * 10 * 512,
      severeCasesByRequestedTime: 0.15 * (input.reportedCases * 10 * 512),
      hospitalBedsByRequestedTime:
        0.35 * input.totalHospitalBeds - 0.15 * (input.reportedCases * 10 * 512)
    },
    severeImpact: {
      currentlyInfected: input.reportedCases * 50,
      infectionsByRequestedTime: input.reportedCases * 50 * 512,
      severeCasesByRequestedTime: 0.15 * (input.reportedCases * 50 * 512),
      hospitalBedsByRequestedTime:
        0.35 * input.totalHospitalBeds - 0.15 * (input.reportedCases * 50 * 512)
    }
  };
};
export default covid19ImpactEstimator;
