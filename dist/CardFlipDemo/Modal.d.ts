import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    content?: string;
}
declare const Modal: ({ isOpen, onClose, children, content }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default Modal;
