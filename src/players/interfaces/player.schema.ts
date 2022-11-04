import * as mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema(
  {
    phonenumber: { type: String, unique: true },
    email: { type: String, unique: true },
    name: { type: String },
    password: { type: String },
    ranking: { type: String },
    rankPoisition: { type: String },
    urlPlayerAvatar: { type: String },
  },
  { timestamps: true, collection: 'players' },
);
