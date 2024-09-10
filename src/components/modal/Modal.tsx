import React, { ReactNode, useEffect, useState } from 'react';
import './Modal.css'; 

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
}

export default function Modal ({ isOpen, onClose, size = 'medium', children }:ModalProps) {
    const [isVisible, setIsVisible] = useState(isOpen);
    const [isOpening, setIsOpening] = useState(false);
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            const timeoutId = setTimeout(() => setIsOpening(true), 100); 
            return () => clearTimeout(timeoutId); 
        } else {
            const timeoutId = setTimeout(() => setIsVisible(false), 300); 
            setIsOpening(false)
            return () => clearTimeout(timeoutId); 
        }
    }, [isOpen]);

    const modalSize = {
        small: 'modal-small',
        medium: 'modal-medium',
        large: 'modal-large',
    }[size];

    return (
        isVisible && ( <div
            className={`modal-overlay ${isOpening && isOpen ? 'show' : ''}`}
            onClick={onClose}
        >
            <div className={`modal ${modalSize}`} onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    ));
};
