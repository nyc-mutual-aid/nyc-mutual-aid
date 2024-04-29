import { z, defineCollection } from 'astro:content';

const possibleServices = z.enum([
  'charging',
  'clothing',
  'food',
  'hygiene',
  'misc',
  'resources',
  'rest',
  'toiletries',
]);

const possibleDonations = z.enum([
  'clothing',
  'food',
  'funding',
  'hygiene',
]);

const timePattern = /^\d\d:\d\d$/
const operatingTime = z.object({
  openTime: z.string().regex(timePattern),
  closeTime: z.string().regex(timePattern).optional(),
});

const organizationSchema = z.object({
  title: z.string(),
  location: z.string(),
  link: z.string().url().optional(),
  inTompkinsSquare: z.boolean().optional(),
  services: possibleServices.array(),
  accepting: possibleDonations.array().optional(),
  operatingTimes: z.object({
    sunday: operatingTime.array().optional(),
    monday: operatingTime.array().optional(),
    tuesday: operatingTime.array().optional(),
    wednesday: operatingTime.array().optional(),
    thursday: operatingTime.array().optional(),
    friday: operatingTime.array().optional(),
    saturday: operatingTime.array().optional(),
  }),
});

export type Organization = z.infer<typeof organizationSchema>;
export type OperatingTime = z.infer<typeof operatingTime>;

const organizationsCollection = defineCollection({
  type: 'content',
  schema: organizationSchema,
});

export const collections = {
  organizations: organizationsCollection,
};
