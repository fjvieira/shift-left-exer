const {addParams} = require('./paramstore');

function addPatientMonitoringParams(req, res) {
  console.log(`adding ${JSON.stringify(req.body)}`);
  addParams(req.body);
  return res.json({storedStatus: 'ok'});
}

module.exports = {addPatientMonitoringParams};
