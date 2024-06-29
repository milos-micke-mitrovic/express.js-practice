import prisma from "../models";
import { comparePasswords, createJWT, hashPassword } from "../utils/authUtils";

export const createNewUser = async (
  username: string,
  password: string
): Promise<string> => {
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
    },
  });
  return createJWT(user);
};

export const signinUser = async (
  username: string,
  password: string
): Promise<string> => {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    throw new Error("User does not exist");
  }
  const isPasswordValid = await comparePasswords(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Incorrect password");
  }
  return createJWT(user);
};
