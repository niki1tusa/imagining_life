import { z } from 'zod';

export const ZUploadFormScheme = z.object({
	title: z.string(),
	image: z.file(),
});
export type TUploadScheme = z.infer<typeof ZUploadFormScheme>;
