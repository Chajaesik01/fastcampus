// pages/api/auth/[...nextauth].ts

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { username, password } = credentials;

                // 사용자 데이터베이스에서 사용자 정보 가져오기
                const user = await prisma.user.findUnique({
                    where: { username },
                });

                // 비밀번호 비교 부분 제거 (비밀번호 확인 없이 바로 인증)
                if (user) {
                    return user; // 사용자 정보가 있으면 인증 성공
                }

                return null; // 인증 실패
            },
        }),
    ],
    session: {
        strategy: "jwt", // JWT 세션 사용
    },
    pages: {
        signIn: '/auth/signin', // 사용자 정의 로그인 페이지 경로
    },
};

export default NextAuth(authOptions);
