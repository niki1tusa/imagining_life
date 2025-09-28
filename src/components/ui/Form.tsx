'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Button from '../ui/Button';

import Field from './Field';
import { TUploadScheme, ZUploadFormScheme } from '@/types/zod.types';

interface Props {
	close?: () => void;
}
export default function Form({ close }: Props) {
	const form = useForm<TUploadScheme>({ resolver: zodResolver(ZUploadFormScheme) });
	return (
		<form
			onSubmit={() => {
				console.log('data example');
			}}
			className='flex flex-col gap-3'
		>
			<Field placeholder='Add a description...' />
			<Field type='file' />
			<div className='flex w-full gap-3'>
				<Button>Post</Button>
				{close && <Button onClick={() => close()}>Back</Button>}
			</div>
		</form>
	);
}
