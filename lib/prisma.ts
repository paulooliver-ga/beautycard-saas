// Mock Prisma para desenvolvimento
export const prisma = {
  user: {
    findUnique: async () => null,
    findFirst: async () => null,
    create: async (data: any) => ({ id: "mock", ...data }),
    update: async (data: any) => data,
  },
  salon: {
    findUnique: async () => null,
    create: async (data: any) => ({ id: "mock", ...data }),
  },
};