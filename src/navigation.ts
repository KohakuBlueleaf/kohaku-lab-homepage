// src/navigation.ts
// Modified for Kohaku Lab

import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

// Header Navigation Data
export const headerData = {
  // Main navigation links
  links: [
    // Simple link example
    {
      text: 'About',
      href: getPermalink('/about'), // Links to the /about page
    },
    // Dropdown menu example for Research section
    {
      text: 'Research',
      links: [
        // Link to the main project listing page
        {
          text: 'Projects',
          href: getPermalink('/research/projects'),
        },
        // Link to the main publications listing page
        {
          text: 'Publications',
          href: getPermalink('/research/publications'),
        },
        // You could add a link to a Research Overview page here if you create one:
        // {
        //   text: 'Overview',
        //   href: getPermalink('/research'),
        // },
      ],
    },
    // Simple link example
    {
      text: 'Team',
      href: getPermalink('/team'), // Links to the /team page
    },
    // Simple link example
    {
      text: 'Join Us',
      href: getPermalink('/join-us'), // Links to the /join-us or /careers page
    },
    // Simple link example - using the blog system for news
    {
      // Assuming you set the blog pathname to 'news' in config.yaml
      text: 'News',
      href: getBlogPermalink('news'), // Use getBlogPermalink if using the blog system
    },
    // Simple link example
    {
      text: 'Contact',
      href: getPermalink('/contact'), // Links to the /contact page
    },
  ],

  // Action buttons in the header
  actions: [
    // Example: A prominent "Contact Us" button
    {
      text: 'Contact Us',
      href: getPermalink('/contact'),
      // variant: 'primary' // Optional: make it stand out
    },
    // Remove or replace the template's default "Download" button
    // { text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }
  ],
};

// Footer Navigation Data
export const footerData = {
  // Footer link sections
  links: [
    // Example section 1: Quick Links
    {
      title: 'Kohaku Lab',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Team', href: getPermalink('/team') },
        { text: 'Join Us', href: getPermalink('/join-us') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    // Example section 2: Research Focus
    {
      title: 'Research',
      links: [
        { text: 'Projects', href: getPermalink('/research/projects') },
        { text: 'Publications', href: getPermalink('/research/publications') },
        // Add links to specific research areas if desired
        // { text: 'Natural Language Processing', href: '#' },
        // { text: 'Computer Vision', href: '#' },
      ],
    },
    // Example section 3: Stay Updated
    {
      title: 'Updates',
      links: [
        { text: 'News', href: getBlogPermalink('news') }, // Adjust 'news' if pathname differs
        // Add other update links like events if applicable
      ],
    },
    // Example section 4: Resources (Optional)
    // {
    //   title: 'Resources',
    //   links: [
    //     { text: 'Tools', href: '#' },
    //     { text: 'Datasets', href: '#' },
    //   ],
    // },
  ],

  // Secondary links like Privacy Policy, Terms
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],

  // Social media links - **UPDATE THESE WITH YOUR LAB'S ACTUAL LINKS**
  socialLinks: [
    // Example: Twitter/X (replace '#' with actual URL)
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // Example: LinkedIn (replace '#' with actual URL)
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    // Example: GitHub (replace '#' with actual URL if lab has public repos)
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
    // RSS Feed for News section (uses blog system)
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }, // Keep if using blog for news
  ],

  // Footer footnote - **UPDATE THIS**
  footNote: `
    © ${new Date().getFullYear()} Kohaku Lab · All rights reserved.
  `,
};
