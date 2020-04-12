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
  let days;
  if (input.periodType === 'days') {
    days = input.timeToElapse;
  } else if (input.periodType === 'weeks') {
    days = input.timeToElapse * 7;
  } else if (input.periodType === 'months') {
    days = input.timeToElapse * 30;
  }

  const value = Math.trunc(days / 3);

  return {
    data: input,
    impact: {
      currentlyInfected: input.reportedCases * 10,
      infectionsByRequestedTime: Math.trunc(input.reportedCases * 10 * value),
      severeCasesByRequestedTime: Math.trunc(
        0.15 * (input.reportedCases * 10 * value)
      ),
      hospitalBedsByRequestedTime: Math.trunc(
        0.35 * input.totalHospitalBeds -
          0.15 * (input.reportedCases * 10 * value)
      )
    },
    severeImpact: {
      currentlyInfected: input.reportedCases * 50,
      infectionsByRequestedTime: Math.trunc(input.reportedCases * 50 * value),
      severeCasesByRequestedTime: Math.trunc(
        0.15 * (input.reportedCases * 50 * value)
      ),
      hospitalBedsByRequestedTime: Math.trunc(
        0.35 * input.totalHospitalBeds -
          0.15 * (input.reportedCases * 50 * value)
      )
    }
  };
};
export default covid19ImpactEstimator;
