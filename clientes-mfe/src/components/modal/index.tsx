import React from "react";
import * as S from "./styles";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
    if (!isOpen) return null;

    return (
        <S.Overlay onClick={onClose} className={className || ""}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}

                <div className="close-button" onClick={onClose}>
                    &times;
                </div>
            </div>
        </S.Overlay>
    );
};

export default Modal;
