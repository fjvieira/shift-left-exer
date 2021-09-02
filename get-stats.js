const {params} = require('./paramstore');

function getPatientMonitoringStats(req, res) 
{
  const minmaxes = Object.entries(params).map(([key, values])=>
    ({[key]: {min: Math.min(...values), max: Math.max(...values)}}));
  return res.json(minmaxes);
}

module.exports = {getPatientMonitoringStats};
