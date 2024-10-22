const dateFormat = (date) => {
  const unixTimestamp = date.getTime(); //unix
  const utcDate = date.toUTCString(); //utc

  console.log(date);
  const jsonDate = { unix: unixTimestamp, utc: utcDate };
  return jsonDate;
};

module.exports = dateFormat;
