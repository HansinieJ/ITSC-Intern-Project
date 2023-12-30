module.exports = (res, message, data = {}, status = `SUCCESS`) => {
  res.status(200);
  res.json({
    data,
    message,
    status,
  });
};
