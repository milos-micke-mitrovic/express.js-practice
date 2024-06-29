import prisma from "../models";

export const getOneUpdatePointService = async (id: string) => {
  return await prisma.updatePoint.findUnique({
    where: { id },
  });
};

export const getAllUpdatePointsService = async (userId: string) => {
  return await prisma.updatePoint.findMany({
    where: {
      update: {
        product: {
          belongsToId: userId,
        },
      },
    },
    include: {
      update: {
        include: {
          product: true,
        },
      },
    },
  });
};

export const createUpdatePointService = async (data: any) => {
  return await prisma.updatePoint.create({
    data: {
      ...data,
      update: {
        connect: {
          id: data.updateId,
        },
      },
    },
  });
};

export const updateUpdatePointService = async (id: string, data: any) => {
  return await prisma.updatePoint.update({
    where: { id },
    data,
  });
};

export const deleteUpdatePointService = async (id: string) => {
  return await prisma.updatePoint.delete({
    where: { id },
  });
};
