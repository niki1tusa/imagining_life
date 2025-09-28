'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';

import Button from '../ui/Button';
import Field from './Field';

import { TUploadScheme, ZUploadFormScheme } from '@/types/zod.types';
import { useMyPhotoStore } from '@/store/my-photo.store';
import { createLocalTPhoto } from '@/lib/photo-helper';
import { toast } from 'react-toastify';

export default function Form({ close }: { close?: () => void }) {
  const form = useForm<TUploadScheme>({
    resolver: zodResolver(ZUploadFormScheme),
    defaultValues: { description: '' },
  });

  const addUpload = useMyPhotoStore((s) => s.addUpload);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: TUploadScheme) => {
    setIsSubmitting(true);
    try {
      const file = values.image as File;   
      const photo = await createLocalTPhoto(file, values.description);

      addUpload(photo);                    
      form.reset();
      close?.();
    } finally {
      setIsSubmitting(false);
	  toast.success('Your photo has been uploaded successfully!')
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <Controller
        control={form.control}
        name="description"
        render={({ field, fieldState }) => (
          <div className="flex flex-col gap-1">
            <Field
              query={field.value ?? ''}
              setQuery={field.onChange}
              placeholder="Add a description…"
            />
            {fieldState.error && (
              <span className="text-sm text-red-500">{fieldState.error.message}</span>
            )}
          </div>
        )}
      />

      <input
        type="file"
        accept="image/*"
        className="bg-light-white w-full rounded px-3 py-2 shadow ring-1 shadow-neutral-400 ring-transparent focus:shadow-red-300 focus:ring-red-300"
        {...form.register('image')}
      />
      {form.formState.errors.image && (
        <span className="text-sm text-red-500">
          {form.formState.errors.image.message?.toString()}
        </span>
      )}

      <div className="flex w-full gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Uploading…' : 'Post'}
        </Button>
        {close ? (
          <Button type="button" onClick={close}>
            Back
          </Button>
        ) : (
          <div className="w-full" />
        )}
      </div>
    </form>
  );
}
