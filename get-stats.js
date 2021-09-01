function getPatientMonitoringStats(req, res) {
  return res.json({
    spo2: {
      min: null,
      max: null,
    },
  });
}

module.exports = {getPatientMonitoringStats};
