function getFormattedDate() {
  return new Date().toISOString()
    .replace('T', ' ')
    .split('.')[0];
}

module.exports = { getFormattedDate };
