// pages/api/auth/register.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // 비밀번호 해싱

        try {
            const user = await prisma.user.create({
                data: {
                    username,
                    hashedPassword,
                },
            });
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: 'User already exists' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
