import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from "@/utils/prismaSingleton";
import { Queue } from "@prisma/client";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        return handleGet(req, res);
    } else if (req.method === "POST") {
        return handlePost(req, res);
    }
}

const handleGet = async (req: NextApiRequest, res: NextApiResponse<Queue[]>) => {
  const users = await prisma.queue.findMany({
    include: {
      role: true,
      department: true,
    },
  });
  res.status(200).json(users);
};

const handlePost = async (req: NextApiRequest, res: NextApiResponse<Queue>) => {
    try {
        const createdQueue = await prisma.queue.create({
            data: {
                ...req.body,
            },
        });
        res.status(200).json(createdQueue);
    } catch (e) {
        //if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(500).end();
    }
};
