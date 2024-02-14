"use server";

import { prisma } from "@/lib/prisma";

export const getAssignments = async () => {
  return await prisma.assignment.findMany();
};
