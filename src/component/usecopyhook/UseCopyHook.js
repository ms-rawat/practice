import React, { useState, useEffect } from 'react';
import useCopy from './useCopy';

function UseCopyHook() {
    const [copy] = useCopy();
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleCopyText = () => {
        const textToCopy = document.querySelector('.textbox').innerText;
        copy(textToCopy);
        setButtonClicked(true);

        setTimeout(() => {
            setButtonClicked(false);
        }, 300); // Reset the effect after 300ms (adjust as needed)
    };

    useEffect(() => {
        const handlePaste = (event) => {
            if (event.clipboardData && event.clipboardData.getData) {

            }
        };

        document.addEventListener('paste', handlePaste);

        return () => {
            document.removeEventListener('paste', handlePaste);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-6">useCopy hook Demo</h1>
            <div className='flex flex-row p-10 gap-2'>
                <div className='flex flex-col w-1/2 border-4 p-3'>
                    <div>
                        <p className='textbox font-semibold'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                        </p>
                    </div>
                    <div className='m-2 text-end'>
                        <button
                            className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${buttonClicked ? 'bg-opacity-50' : ''}`}
                            onClick={handleCopyText}
                        >
                            {buttonClicked ? 'Copying...' : 'Copy Text'}
                        </button>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 p-3 border-4'>
                    <textarea
                        className="w-full h-full p-2"
                        placeholder='Paste here (Ctrl+V)'

                    />
                </div>
            </div>
        </div>
    );
}

export default UseCopyHook;
