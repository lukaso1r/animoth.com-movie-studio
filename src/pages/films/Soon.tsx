// biome-ignore lint/style/useImportType: <explanation>
import React, { useEffect } from 'react';

const Soon: React.FC = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = '/';
        }, 1000);

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    const handleBackToMainPage = () => {
        window.location.href = '/';
    };

    return (
        <>
            <p className='flex justify-center '>Work in progress</p>
            <div className="w-full max-w-4xl mx-auto">
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid" />
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handleBackToMainPage}
                        type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Back to Main Page
                    </button>
                </div>
            </div>
        </>
    );
};

export default Soon;
