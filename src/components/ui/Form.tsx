'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useMyPhotoStore } from '@/store/my-photo.store';

import Button from '../ui/Button';

import Field from './Field';
import FieldFile from './FieldFile';
import { createLocalTPhoto } from '@/lib/photo-helper';
import { TUploadScheme, ZUploadFormScheme } from '@/types/zod.types';

export default function Form({ close }: { close?: () => void }) {
	const { reset, control, handleSubmit } = useForm<TUploadScheme>({
		resolver: zodResolver(ZUploadFormScheme),
		defaultValues: { description: '' },
	});

	const addUpload = useMyPhotoStore(s => s.addUpload);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = async (values: TUploadScheme) => {
		setIsSubmitting(true);
		try {
			const file = values.image as File;
			const photo = await createLocalTPhoto(file, values.description);

			addUpload(photo);
			reset();
			close?.();
		} finally {
			setIsSubmitting(false);
			toast.success('Your photo has been uploaded successfully!');
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
			<Controller
				control={control}
				name='description'
				render={({ field, fieldState }) => (
					<Field
						query={field.value ?? ''}
						setQuery={field.onChange}
						placeholder='Add a description…'
						error={fieldState.error?.message}
					/>
				)}
			/>
			<Controller
				control={control}
				name='image'
				render={({ field, fieldState }) => (
					<FieldFile onChange={file => field.onChange(file)} error={fieldState.error?.message} />
				)}
			/>

			<div className='flex w-full gap-3'>
				<Button type='submit' disabled={isSubmitting}>
					{isSubmitting ? 'Uploading…' : 'Post'}
				</Button>
				{close && (
					<Button type='button' onClick={close}>
						Back
					</Button>
				)}
			</div>
		</form>
	);
}
