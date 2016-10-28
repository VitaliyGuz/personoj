/**
 * Created by Vitaliy on 24.10.2016.
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const personAttributeSchema = new Schema({
  name: {type: 'String', required: true, match: /\w+/},
  type: {type: 'String', required: true, enum: ['String', 'Number', 'Date', 'Boolean']},
  values: [],
  localizationLabel: {},
  allowArbitraryValues: {type: 'Boolean'}, //values which aren't in the list
  needApproval: {type: 'Boolean'},
  cuid: {type: 'String', required: true},
});

export default mongoose.model('PersonAttribute', personAttributeSchema);
