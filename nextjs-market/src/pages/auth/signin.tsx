// pages/auth/signin.tsx

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            username,
            password: '', // 비밀번호 없이 시도
        });

        if (result?.error) {
            setError(result.error); // 오류 메시지 설정
        } else {
            // 로그인 성공 시 리다이렉트
            router.push('/'); // 홈 페이지로 리다이렉트
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="mb-4 text-2xl">Sign In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mb-2 p-2 border"
                    required
                />
                <button type="submit" className="p-2 bg-blue-500 text-white">Sign In</button>
                {error && <p className="text-red-500">{error}</p>} {/* 오류 메시지 표시 */}
            </form>
        </div>
    );
};

export default SignIn;
