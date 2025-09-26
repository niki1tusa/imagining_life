'use client';

import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Modal from './Modal';




export const UploadModal = ({ close }: { close: () => void }) => {

const form = useForm()
	return (
		<Modal  title='Upload Photo' close={close}>
			<form onSubmit={()=>{
				console.log('data example')
			}}>
				<input type='text' />
				<input type='file' />
			</form>
		</Modal>
	);
};
