/**
 * Created by Vitaliy on 24.10.2016.
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: 'String', required: true },
  password: { type: 'String', required: true },
  password_salt: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  roles: [],
  personFilter: { type: 'String'}
});

export default mongoose.model('User', userSchema);
