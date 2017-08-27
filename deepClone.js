/**
 * deeply copy object or arrays with nested attributes
 * @param  {any} obj
 * @return {any}     a depply copied replica of arguement passed
 */
const deepClone = (obj) => {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  let newObj = {};
  if (Array.isArray(obj)) {
    newObj = obj.map(item => deepClone(item));
  } else {
    Object.keys(obj).forEach((key) => {
      return newObj[key] = deepClone(obj[key]);
    })
  }
  return newObj;
}

module.exports = deepClone;
