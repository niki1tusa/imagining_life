import { UploadModal } from '@/components/modal/UploadModal';
import { useModalStore } from '@/store/modal.store';

export default function ModalProvider() {
  const { type, payload, close } = useModalStore();
  if (type !== 'uploadPhoto') return null;

  return <UploadModal {...payload} close={close} />;
}
