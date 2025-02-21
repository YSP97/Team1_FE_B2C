import useModal from '@/hooks/useModal';
import Button from '@/components/Button';

type ConfirmProps = {
  title: string;
  closeText?: string;
  confirmText?: string;
  isOpened: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
};

function Confirm({
  title,
  closeText = '취소',
  confirmText = '확인',
  isOpened,
  onClose = () => {},
  onConfirm = () => {},
}: ConfirmProps) {
  useModal(isOpened);

  return (
    <div
      className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black/70 text-white transition-opacity duration-300 ${
        isOpened ? 'visible z-[100] opacity-100' : 'invisible opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className="m-4 flex max-h-[calc(100%-3rem)] max-w-[calc(100%-3rem)] flex-col items-center gap-8 rounded-base bg-bg-secondary p-8 pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="flex-1 overflow-auto text-center text-md font-bold text-white">
          {title}
        </h3>
        <div className="flex w-full gap-4">
          <Button type="secondary" className="flex-1" onClick={onClose}>
            {closeText}
          </Button>
          <Button type="primary" className="flex-1" onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
