import {z, defineCollection} from 'astro:content'

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string().optional(),
        tag: z.array(z.string()).optional()
    })
})

export const collections = {
    blogs: blogCollection
}