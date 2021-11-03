import {expect} from 'chai';

import getPatientMonitoringStats from '../modules/get-stats.js';

it('gets statistics on patient monitoring parameters', async () => {
  const res = {
    json: function(jsonResponse) {
      this.jsonResponse = jsonResponse;
    },
    status: function(statusCode) {
      this.status = statusCode;
      return {json: function() { }};
    },
  };
  await getPatientMonitoringStats(
      {headers: {authorization: 'Bearer secret'}}, res);
  expect(res.jsonResponse).is.not.undefined;
});
