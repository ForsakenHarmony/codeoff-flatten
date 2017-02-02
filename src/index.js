const flatten = source => source.reduce((out, e) =>
    out.concat(Array.isArray(e) ? flatten(e) : e)
  , []);

//TODO: return empty array? throw error?
module.exports = input => Array.isArray(input) ? flatten(input) : undefined;
