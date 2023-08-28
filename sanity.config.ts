import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas'

export default defineConfig({
    name: 'default',
    title: "Haseeb Ahmed's Portfolio",

    projectId: 'habcp4w2',
    dataset: 'production',
    basePath: "/studio",
    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})
