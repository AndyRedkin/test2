module.exports = function renderView(data, options, withoutBundle) {
  let res = this.res;
  if (!withoutBundle) {
    res.locals.pageBundle = [
      data.replace('/', '.')
    ];
  }
  return res.view(data, options);
};

