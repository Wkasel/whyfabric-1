const Winston = require('winston');
const Moment = require('moment');

const formatOption = Winston.format.combine(
  Winston.format.colorize(),
  Winston.format.timestamp(),
  Winston.format.simple(),
  Winston.format.printf(
    (info) =>
      `[${Moment(info.timestamp).format('YYYY-MM-DD hh:mm:ss')}] ${
        info.level
      }: ${info.message}`,
  ),
);

const config = {
  level: process.env.LOGGER_LEVEL,
  format: formatOption,
};

module.exports = config;
