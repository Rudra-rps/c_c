import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AmbassadorForm from './AmbassadorForm';

type Props = {
  open: boolean;
  onClose: () => void;
};

const AmbassadorModal: React.FC<Props> = ({ open, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    // lock body scroll when modal open
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      // focus the first focusable element inside panel when open
      setTimeout(() => {
        const el = panelRef.current?.querySelector<HTMLElement>(
          'button, a, input, textarea, [tabindex]:not([tabindex="-1"])'
        );
        el?.focus();
      }, 0);

      // simple focus trap
      const onFocus = (e: FocusEvent) => {
        if (!panelRef.current) return;
        if (panelRef.current.contains(e.target as Node)) return;
        // redirect focus back to panel
        const first = panelRef.current.querySelector<HTMLElement>('button, a, input, textarea, [tabindex]:not([tabindex="-1"])');
        first?.focus();
      };
      document.addEventListener('focusin', onFocus);
      return () => document.removeEventListener('focusin', onFocus);
    } else if (previouslyFocused.current) {
      previouslyFocused.current.focus();
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4 py-4 sm:py-8">
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.99 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
          >
            <div ref={panelRef} className="glass-card rounded-xl sm:rounded-2xl overflow-hidden max-h-[90vh] sm:max-h-[85vh]">
              <div className="p-4 sm:p-6 border-b border-white/6 flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold">Ambassador Application</h2>
                <button onClick={onClose} aria-label="Close" className="text-gray-300 px-3 py-1 text-lg sm:text-xl">✕</button>
              </div>
              <div className="p-4 sm:p-6 overflow-auto" style={{ maxHeight: 'calc(90vh - 70px)' }}>
                <AmbassadorForm />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AmbassadorModal;
