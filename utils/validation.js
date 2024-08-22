const Joi = require('joi');

const eventSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.date().required(),
  sessions: Joi.array().items(Joi.object({
    title: Joi.string().required(),
    startTime: Joi.date().required(),
    endTime: Joi.date().required(),
    speaker: Joi.string().required()
  })),
  participants: Joi.array().items(Joi.string())
});

module.exports = { eventSchema };
