/**
 * Created by Vitaliy on 24.10.2016.
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const personSchema = new Schema({
  published: {},
  draft: {},
  history: {},
  cuid: {type: 'String', required: true},
});

export default mongoose.model('Person', personSchema);
