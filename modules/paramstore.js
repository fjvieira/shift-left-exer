
const params = {};

function addParams(p) {
  for (const [key, value] of Object.entries(p)) {
    if (!params[key]) params[key] = [];
    params[key].push(value);
  }
}

function getParams() {
  return params;
}

export {addParams, getParams};
