import { Request, Response } from "express";
import axios from "axios";

const API_KEY = process.env.API_KEY;

export const WeatherController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { city } = req.body;

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await axios.get(weatherUrl);

    res.json(response.data);
  } catch (error) {
    console.error("Error occurred in WeatherController:", error);
    res.status(500).json({ message: "Error fetching weather data" });
  }
};
