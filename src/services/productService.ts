import prisma from "../models";

export const getOneProductService = async (
  productId: string,
  userId: string
) => {
  return await prisma.product.findFirst({
    where: {
      id: productId,
      belongsToId: userId,
    },
  });
};

export const getAllProductsService = async (userId: string) => {
  return await prisma.product.findMany({
    where: { belongsToId: userId },
    include: { updates: true },
  });
};

export const createProductService = async (
  name: string,
  belongsToId: string
) => {
  return await prisma.product.create({
    data: {
      name,
      belongsToId,
    },
  });
};

export const updateProductService = async (
  productId: string,
  name: string,
  userId: string
) => {
  return await prisma.product.update({
    where: { id_belongsToId: { id: productId, belongsToId: userId } },
    data: {
      name,
      belongsToId: userId,
    },
  });
};

export const deleteProductService = async (
  productId: string,
  userId: string
) => {
  return await prisma.product.delete({
    where: { id_belongsToId: { id: productId, belongsToId: userId } },
  });
};
