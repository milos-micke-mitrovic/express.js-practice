import prisma from "../models";

export const getOneUpdateService = async (updateId: string) => {
  return await prisma.update.findUnique({
    where: { id: updateId },
  });
};

export const getAllUpdatesService = async (userId: string) => {
  return await prisma.update.findMany({
    where: {
      product: {
        belongsToId: userId,
      },
    },
    include: {
      product: true,
    },
  });
};

export const createUpdateService = async (data: any) => {
  return await prisma.update.create({
    data,
  });
};

export const updateUpdateService = async (updateId: string, data: any) => {
  return await prisma.update.update({
    where: { id: updateId },
    data,
  });
};

export const deleteUpdateService = async (id: string) => {
  return await prisma.update.delete({
    where: { id },
  });
};
