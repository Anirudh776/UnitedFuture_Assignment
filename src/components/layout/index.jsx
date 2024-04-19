import React from 'react';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-full w-full">
            <div className="w-full text-white text-center p-2 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-600">Logo Header</div>
            <main>{children}</main>
        </div>
    );
}
