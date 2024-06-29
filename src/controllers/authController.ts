import { Request, Response } from "express";
import { createNewUser, signinUser } from "../services/authService";

// Register a new user
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const token = await createNewUser(username, password);
    res.status(201).json({ token });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Sign in an existing user
export const signin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const token = await signinUser(username, password);
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(401).json({ error: error.message });
  }
};
