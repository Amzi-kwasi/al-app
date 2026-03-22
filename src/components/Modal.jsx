import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

export default function Modal({ isOpen, onClose, title, children, maxWidth = 640 }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-box"
            style={{ maxWidth }}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: 'spring', damping: 28, stiffness: 380 }}
            onClick={e => e.stopPropagation()}
          >
            {title && (
              <div className="modal-header">
                <h2 className="modal-title">{title}</h2>
                <button className="modal-close" onClick={onClose}>✕</button>
              </div>
            )}
            {!title && (
              <button
                className="modal-close"
                onClick={onClose}
                style={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}
              >
                ✕
              </button>
            )}
            <div className="modal-body">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
