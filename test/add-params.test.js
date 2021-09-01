const {expect} = require('chai');
const {addPatientMonitoringParams} = require('../add-params');

it('adds params on POST request', async ()=> {
  const res = {json: function(jsonResponse) {
    this.jsonResponse = jsonResponse;
  }};
  await addPatientMonitoringParams({}, res);
  expect(res.jsonResponse).is.not.undefined;
});
