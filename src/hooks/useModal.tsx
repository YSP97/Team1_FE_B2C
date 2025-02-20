import { useEffect } from 'react';

let openModalCount = 0;

function useModal(isOpened: boolean) {
  useEffect(() => {
    if (isOpened) {
      openModalCount += 1;
      document.body.style.overflow = 'hidden';
    } else if (openModalCount > 0) {
      openModalCount -= 1;
      if (openModalCount === 0) {
        document.body.style.overflow = '';
      }
    }

    return () => {
      openModalCount -= 1;
      if (openModalCount === 0) {
        document.body.style.overflow = '';
      }
    };
  }, [isOpened]);
}

export default useModal;
