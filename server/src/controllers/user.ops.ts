import { Request, Response } from "express";
import User from "../model/user";

export const addLocation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, location } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    user.savedLocations.push(location);
    await user.save();

    res.status(200).json({ message: "Location added successfully", savedLocations: user.savedLocations });
  } catch (error) {
    console.error("Add Location Error:", error);
    res.status(500).json({ message: "Failed to add location" });
  }
};


export const editUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, fullName, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { fullName, email },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "User details updated", user: updatedUser });
  } catch (error) {
    console.error("Edit User Error:", error);
    res.status(500).json({ message: "Failed to update user details" });
  }
};


export const deleteLocation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, locationId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    user.savedLocations = user.savedLocations.filter(
      (loc: any) => loc._id.toString() !== locationId
    );

    await user.save();

    res.status(200).json({ message: "Location deleted", savedLocations: user.savedLocations });
  } catch (error) {
    console.error("Delete Location Error:", error);
    res.status(500).json({ message: "Failed to delete location" });
  }
};


export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.body;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete User Error:", error);
    res.status(500).json({ message: "Failed to delete user" });
  }
};
