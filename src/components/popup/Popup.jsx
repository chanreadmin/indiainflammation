// Popup.js
import React from 'react';

const Popup = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-2 rounded-lg z-10" data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <button
                            className="text-center float-right font-extrabold text-red-500 hover:text-gray-700"
                            onClick={onClose}
                        >
                            X
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
