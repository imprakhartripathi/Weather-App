import express from "express";
import { WeatherController } from "./controllers/weather";
import { login, signup } from "./controllers/auth";
import { addLocation, deleteLocation, deleteUser, editUser } from "./controllers/user.ops";
export const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.post("/add-location", addLocation);
router.put("/edit-user", editUser);
router.delete("/delete-location", deleteLocation);
router.delete("/delete-user", deleteUser);

router.get('/weather', WeatherController);