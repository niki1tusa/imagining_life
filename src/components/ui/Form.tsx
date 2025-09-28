'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button from '../ui/Button';

import Field from './Field';
import { TUploadScheme, ZUploadFormScheme } from '@/types/zod.types';
import { useMyPhotoStore } from '@/store/my-photo.stroe';

const STORAGE_KEY = 'my_uploads_v1';
const API = 'https://jsonplaceholder.typicode.com';
const MY_ALBUM_ID = 123; // для "моих" фото в демо
const SEND_DEMO_POST = true; // поставь false, если не хочешь дергать JSONPlaceholder

type UploadCard = {
	id: number; // локальный/серверный id
	title: string;
	previewUrl: string; // blob:url для отображения
	fileName: string;
	createdAt: number;
};

export default function Form({ close }: { close?: () => void }) {
	const form = useForm<TUploadScheme>({
		resolver: zodResolver(ZUploadFormScheme),
		defaultValues: { title: '' },
	});

	const {uploads, setUploads} = useMyPhotoStore()
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Загрузка из localStorage
	useEffect(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) {
				const parsed: UploadCard[] = JSON.parse(raw);
				setUploads(parsed);
			}
		} catch {
			// пусто
		}
	}, []);

	// Сохранение в localStorage
	useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(uploads));
		} catch {
			// пусто
		}
	}, [uploads]);

	const onSubmit = async (values: TUploadScheme) => {
		console.log(values);
		setIsSubmitting(true);
		try {
			const file = values.image as File;
			const previewUrl = URL.createObjectURL(file);

			let serverId = Date.now();
			if (SEND_DEMO_POST) {
				const payload = {
					albumId: MY_ALBUM_ID,
					title: values.title,
					url: previewUrl,
					thumbnailUrl: previewUrl,
				};
				const res = await fetch(`${API}/photos`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload),
				});
				const created = await res.json();
				if (created?.id) serverId = created.id;
			}

			const newCard: UploadCard = {
				id: serverId,
				title: values.title,
				previewUrl,
				fileName: file.name,
				createdAt: Date.now(),
			};

			setUploads(prev => [newCard, ...prev]);
			form.reset();
		} finally {
			setIsSubmitting(false);
			if (close) {
				close();
			}
			form.reset()
		}
	};

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-3'>
			<Controller
				control={form.control}
				name='title'
				render={({ field, fieldState }) => (
					<div className='flex flex-col gap-1'>
						<Field query={field.value ?? ''} setQuery={field.onChange} placeholder='Add a title…' />
						{fieldState.error && (
							<span className='text-sm text-red-500'>{fieldState.error.message}</span>
						)}
					</div>
				)}
			/>

			<input
				type='file'
				accept='image/*'
				className='bg-light-white w-full rounded px-3 py-2 shadow ring-1 shadow-neutral-400 ring-transparent focus:shadow-red-300 focus:ring-red-300'
				{...form.register('image')}
			/>
			{form.formState.errors.image && (
				<span className='text-sm text-red-500'>
					{form.formState.errors.image.message?.toString()}
				</span>
			)}

			<div className='flex w-full gap-3'>
				<Button type='submit' disabled={isSubmitting}>
					{isSubmitting ? 'Uploading…' : 'Post'}
				</Button>
				{close ?(
					<Button type='button' onClick={close}>
						Back
					</Button>
				): <div className='w-full'/>}
			</div>
		</form>
	);
}
