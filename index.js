import addPatientMonitoringParams from './modules/add-params.js';

import getPatientMonitoringStats from './modules/get-stats.js';

import express, {json} from 'express';
const app = express();

app.use(json());
app.post('/pm-params', addPatientMonitoringParams);
app.get('/pm-stats', getPatientMonitoringStats);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
