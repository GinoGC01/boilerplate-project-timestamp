const dateFormat = (date) => {
  const unixTimestamp = date.getTime(); //unix
  const utcDate = date.toUTCString(); //utc

  const jsonDate = { unix: unixTimestamp, utc: utcDate };
  return jsonDate;
};

module.exports = dateFormat;
