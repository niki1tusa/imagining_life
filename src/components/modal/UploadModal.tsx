'use client';

import { type SubmitHandler, useForm } from 'react-hook-form';

import Button from '../ui/Button';
// import { toast } from 'react-toastify';

import Field from '../ui/Field';

import Modal from './Modal';


export const UploadModal = ({ close }: { close: () => void }) => {
	const form = useForm();
	
	return (
		<Modal title='Upload Photo' close={close}>
			<form
				onSubmit={() => {
					console.log('data example');
				}}
				className='flex flex-col gap-3'
			>
				<Field placeholder='Add a description...' />
				<Field type='file' />
				<div className='flex gap-3 w-full'>
					<Button>Post</Button>
					<Button onClick={()=>close()}>Back</Button>
				</div>
			</form>
		</Modal>
	);
};
