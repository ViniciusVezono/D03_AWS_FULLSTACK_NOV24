import { z } from 'zod';
// import { validPlantTypeIds } from './validTypes';
let validPlantTypeIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
export const formSchema = z.object({
  name: z.string().min(3, 'The plant name must have at least 3 characters.').max(40, 'The plant name must have at most 40 characters.'),

  subtitle: z.string().min(3, 'The subtitle must have at least 3 characters.').max(50, 'The subtitle must have at most 50 characters.'),

  typeId: z.number().refine((id) => validPlantTypeIds.includes(id), {
    message: 'Invalid plant type. Please select a valid type.',
  }),

  price: z
    .string()
    .transform((value) => parseFloat(value))
    .refine((value) => !isNaN(value) && value > 0, {
      message: 'The price must be a positive number.',
    }),

  discountPercentage: z
    .string()
    .transform((value) => parseFloat(value))
    .refine((value) => !isNaN(value) && value >= 0 && value <= 100, {
      message: 'The discount percentage must be between 0 and 100.',
    }),

  label: z.enum(['Indoor', 'Outdoor'], {
    errorMap: () => ({ message: 'Select one of the options: Indoor or Outdoor.' }),
  }),

  features: z.string().min(10, 'The features must have at least 10 characters.').max(200, 'The features must have at most 200 characters.'),

  description: z.string().min(10, 'The description must have at least 10 characters.').max(500, 'The description must have at most 500 characters.'),

  imgUrl: z.string().optional().or(z.literal('')),
});

export type FormSchema = z.infer<typeof formSchema>;
