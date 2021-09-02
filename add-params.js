const {addParams, params} = require('./paramstore');

function addPatientMonitoringParams(req, res) {
  console.log(`adding ${JSON.stringify(req.body)}
    with headers ${JSON.stringify(req.headers)}`);
  addParams(req.body);
  console.log(`params: ${JSON.stringify(params)}`);
  return res.json({storedStatus: 'ok'});
}

module.exports = {addPatientMonitoringParams};
