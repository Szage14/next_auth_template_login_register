import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <div>
            <h1>Hello, Welcome to the Login Page!</h1>
            <Link href="/">
                Go to Home Page
            </Link>
        </div>
    );
}