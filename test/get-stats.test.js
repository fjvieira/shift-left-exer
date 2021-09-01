const {expect} = require('chai');
const {getPatientMonitoringStats} = require('../get-stats');

it('gets statistics on patient monitoring parameters', async ()=> {
  const res = {json: function(jsonResponse) {
    this.jsonResponse = jsonResponse;
  }};
  await getPatientMonitoringStats({}, res);
  expect(res.jsonResponse).is.not.undefined;
});
