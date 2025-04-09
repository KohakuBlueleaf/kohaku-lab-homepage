// src/content/config.ts
import { z, defineCollection, reference } from 'astro:content';

// Keep the existing metadataDefinition if needed for projects/publications
const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),
      canonical: z.string().url().optional(),
      robots: z
        .object({ index: z.boolean().optional(), follow: z.boolean().optional() })
        .optional(),
      description: z.string().optional(),
      openGraph: z
        .object({
          /* ... keep structure ... */
        })
        .optional(),
      twitter: z
        .object({
          /* ... keep structure ... */
        })
        .optional(),
    })
    .optional();

// Keep the existing postCollection definition for News
const postCollection = defineCollection({
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),
    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(), // Image path (e.g., '~/assets/images/news/image.jpg')
    category: z.string().optional(), // Optional: Re-enable if needed
    tags: z.array(z.string()).optional(), // Optional: Re-enable if needed
    author: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

// **NEW**: Define the 'projects' collection
const projectsCollection = defineCollection({
  type: 'content', // Use 'content' for MD/MDX files
  schema: z.object({
    title: z.string(),
    // Optional: A short summary for listing pages
    excerpt: z.string().optional(),
    // Optional: Hero image for the project page/listing
    image: z.string().optional(),
    // Optional: Current status (e.g., Ongoing, Completed, Archived)
    status: z.string().optional(),
    // Optional: Link to team members (could reference a 'team' collection later)
    team: z.array(z.string()).optional(),
    // Optional: Start/End dates
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    // Optional: Link related publications (references 'publications' collection)
    relatedPublications: z.array(reference('publications')).optional(),
    // Optional: SEO metadata for the specific project page
    metadata: metadataDefinition(),
    // Add any other relevant fields: methodology_summary, goals, funding_source, etc.
  }),
});

// **NEW**: Define the 'publications' collection
const publicationsCollection = defineCollection({
  type: 'data', // Use 'data' if storing info in YAML/JSON, or 'content' if each has MD page
  schema: z.object({
    title: z.string(),
    // List of authors
    authors: z.array(z.string()),
    // Journal, conference, or preprint server
    journal: z.string().optional(),
    // Publication date
    publishDate: z.date(),
    // Direct URL to the paper (PDF, DOI, arXiv)
    url: z.string().url(),
    // Optional: Short abstract or excerpt
    excerpt: z.string().optional(),
    // Optional: Link back to the project(s) it relates to
    relatedProjects: z.array(reference('projects')).optional(),
    // Add keywords, DOI, bibtex entry, etc. if needed
  }),
});

export const collections = {
  post: postCollection, // For News
  projects: projectsCollection, // NEW
  publications: publicationsCollection, // NEW
};
