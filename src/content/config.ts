import { z, defineCollection } from 'astro:content';

const organizationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    location: z.string(),
  }),
});

export const collections = {
  organizations: organizationsCollection,
}
