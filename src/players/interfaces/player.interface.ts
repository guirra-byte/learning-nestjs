import { Document } from 'mongoose';

export interface Player extends Document {
  readonly phoneNumber: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  ranking: string;
  rankPosition: number;
  urlPlayerAvatar: string;
}
