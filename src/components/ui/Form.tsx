'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useMyPhotoStore } from '@/store/my-photo.store';

import Button from '../ui/Button';

import Field from './Field';
import FieldFile from './FieldFile';
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
			const formData = new FormData();
			formData.append('image', values.image as File);
			formData.append('description', values.description || '');

			// POST к локальному mock endpoint!
			const res = await fetch('/api/photos', {
				method: 'POST',
				body: formData,
			});
			const photo = await res.json();
			const previewUrl = values.image ? URL.createObjectURL(values.image) : '';

			addUpload({
				...photo,
				urls: {
					raw: previewUrl,
					full: previewUrl,
					regular: previewUrl,
					small: previewUrl,
					thumb: previewUrl,
				},
				links: { ...photo.links, download: previewUrl, download_location: previewUrl },
			});
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
