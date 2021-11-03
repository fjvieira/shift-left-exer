import {addParams, getParams} from './paramstore.js';

function addPatientMonitoringParams(req, res) {
  console.log(`adding ${JSON.stringify(req.body)}
    with headers ${JSON.stringify(req.headers)}`);
  if (req.headers && req.headers.authorization) {
    const [scheme, token] = req.headers.authorization.split(' ');
    if (scheme === 'Bearer' && token === 'secret') {
      addParams(req.body);
      console.log(`params: ${JSON.stringify(getParams())}`);
      return res.json({storedStatus: 'ok'});
    }
  }
  return res.status(401).json({storedStatus: 'unauthorized'});
}

export default addPatientMonitoringParams;
