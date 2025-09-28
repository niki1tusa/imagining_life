import { z } from 'zod';

export const ZUploadFormScheme = z.object({
  description: z.string().min(1, 'Description is required'),
  image: z
    .any()
    .refine(
      (v) => (v instanceof FileList && v.length > 0) || v instanceof File,
      'Image file is required'
    )
    .transform((v) => {
      if (v instanceof File) return v;
      if (v instanceof FileList && v.length) return v[0];
      return null;
    }),
});

export type TUploadScheme = z.infer<typeof ZUploadFormScheme>;
