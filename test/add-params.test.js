import {expect} from 'chai';

import addPatientMonitoringParams from '../modules/add-params.js';

it('adds params on POST request', async () => {
  const res = {
    json: function(jsonResponse) {
      this.jsonResponse = jsonResponse;
    },
    status: function(statusCode) {
      this.status = statusCode;
      return {json: function() { }};
    },
  };
  await addPatientMonitoringParams(
      {body: {spo2: 96}, headers: {authorization: 'Bearer secret'}}, res);
  expect(res.jsonResponse).is.not.undefined;
});
