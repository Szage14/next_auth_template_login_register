import React from 'react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="container">
            <h1 className="heading">Hello, Welcome to the Home Page!</h1>
            <Link href="/login">
                Go to Login Page
            </Link>
        </div>
    );
}