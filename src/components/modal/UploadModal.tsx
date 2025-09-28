'use client';

// import { toast } from 'react-toastify';
import Form from '../ui/Form';

import Modal from './Modal';

export const UploadModal = ({ close }: { close: () => void }) => {
	return (
		<Modal title='Upload Photo' close={close}>
			<Form close={close} />
		</Modal>
	);
};
