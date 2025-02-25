'use client';
import { useEffect } from 'react';

function useModal(isOpened: boolean) {
  useEffect(() => {
    if (!isOpened) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpened]);
}

export default useModal;
