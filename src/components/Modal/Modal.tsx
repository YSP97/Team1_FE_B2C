import { ReactNode } from 'react';
import useModal from '@/hooks/useModal';
import Button from '../Button';
import SVGIcon from '../SVGIcon';

type ModalProps = {
  title: string;
  isOpened: boolean;
  onClose: () => void;
  children: ReactNode;
};

function Modal({ title, isOpened, onClose, children }: ModalProps) {
  useModal(isOpened);

  if (!isOpened) return null;

  const dimdClass =
    'z-[100] fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black/70 text-white';
  const modalClass =
    'flex flex-col gap-6 md:gap-10 max-h-[85%] w-[calc(100%-3rem)] md:max-w-[64rem] pt-6 pb-10 rounded-base bg-bg-secondary';

  return (
    <div className={dimdClass} onClick={onClose}>
      <div className={modalClass} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 pl-6 pr-4 md:pl-10 md:pr-8">
          <h3 className="text-md font-bold text-white md:text-lg">{title}</h3>
          <Button type="invisible" onClick={onClose} className="px-[0.5rem]">
            <SVGIcon name="icon-close" size={24} />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
