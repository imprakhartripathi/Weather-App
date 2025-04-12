import mongoose, { Schema, Document } from "mongoose";

interface ILocation {
  city: string;
  lat: number;
  lon: number;
}

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  savedLocations: ILocation[];
}

const LocationSchema = new Schema<ILocation>({
  city: { type: String, required: true },
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
});

const UserSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedLocations: { type: [LocationSchema], default: [] },
});

export default mongoose.model<IUser>("User", UserSchema);
