# How to Add a New Block Component

This guide explains how to add a new block component to your Payload CMS project.

## Step-by-Step Process

### 1. Create the Block Directory
Create a new folder in `src/blocks/` with your block name:
```
src/blocks/YourBlockName/
```

### 2. Create the Config File (`config.ts`)
This file defines the Payload CMS block configuration with its fields.

**Example: `src/blocks/YourBlockName/config.ts`**
```typescript
import type { Block } from 'payload'

export const YourBlockName: Block = {
  slug: 'yourBlockName', // This will be the blockType in RenderBlocks
  interfaceName: 'YourBlockNameBlock', // Used for TypeScript types
  labels: {
    singular: 'Your Block Name',
    plural: 'Your Block Names',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Description',
    },
    // Add more fields as needed
  ],
}
```

### 3. Create the Component File (`Component.tsx`)
This is the React component that renders your block on the frontend.

**Example: `src/blocks/YourBlockName/Component.tsx`**
```typescript
import type { YourBlockNameBlock as YourBlockNameBlockProps } from '@/payload-types'
import React from 'react'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & YourBlockNameBlockProps

export const YourBlockNameBlock: React.FC<Props> = ({
  className,
  title,
  description,
  disableInnerContainer,
}) => {
  return (
    <section className={className}>
      {disableInnerContainer ? (
        <>
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </>
      ) : (
        <div className="container mx-auto">
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>
      )}
    </section>
  )
}
```

### 4. Register Block in Pages Collection
Import and add your block config to `src/collections/Pages/index.ts`:

```typescript
// Add import at the top
import { YourBlockName } from '../../blocks/YourBlockName/config'

// Then add it to the blocks array (around line 83-94)
{
  name: 'layout',
  type: 'blocks',
  blocks: [
    CallToAction,
    Content,
    MediaBlock,
    Archive,
    FormBlock,
    Gallery,
    SponsorsPartners,
    DonationForm,
    CourseCard,
    CoursesBlock,
    YourBlockName, // Add your block here
  ],
  // ... rest of config
}
```

### 5. Register Component in RenderBlocks
Import and add your component to `src/blocks/RenderBlocks.tsx`:

```typescript
// Add import at the top
import { YourBlockNameBlock } from '@/blocks/YourBlockName/Component'

// Add to blockComponents object (around line 17-29)
const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  donate: DonationForm,
  formBlock: FormBlock,
  gallery: Gallery,
  mediaBlock: MediaBlock,
  sponsorsPartners: SponsorsPartnersBlock,
  courseCard: CourseCardBlock,
  courses: CoursesBlock,
  carousel: CarouselBlock,
  yourBlockName: YourBlockNameBlock, // Add your component here
  // The key must match the 'slug' from your config.ts
}
```

### 6. Regenerate TypeScript Types
After adding your block, regenerate Payload types:

```bash
npm run generate:types
# or
pnpm generate:types
# or
yarn generate:types
```

This will update `src/payload-types.ts` with your new block type.

## Important Notes

1. **Block Slug**: The `slug` in your config must match the key in `blockComponents` object in `RenderBlocks.tsx`
2. **Interface Name**: The `interfaceName` in config determines the TypeScript type name (e.g., `YourBlockNameBlock`)
3. **Props**: Your component will receive all fields from your block config as props, plus `disableInnerContainer` and `className` from RenderBlocks
4. **Types**: After adding a block, always regenerate types so TypeScript knows about your new block
5. **Client Components**: If your component needs client-side features (hooks, event handlers), add `'use client'` at the top

## Example: Complete Block

See existing blocks for reference:
- **Simple block**: `src/blocks/Banner/` (minimal fields)
- **Complex block**: `src/blocks/Form/` (multiple nested fields)
- **Media block**: `src/blocks/MediaBlock/` (uses upload field)
- **Rich text block**: `src/blocks/CallToAction/` (uses richText field)

## Common Field Types

- `text` - Single line text input
- `textarea` - Multi-line text input
- `richText` - Rich text editor
- `upload` - Media/file upload (relationTo: 'media')
- `select` - Dropdown selection
- `array` - Repeating fields
- `group` - Grouped fields
- `relationship` - Relationship to another collection
- `checkbox` - Boolean checkbox
- `number` - Number input
- `date` - Date picker

For more field types and options, see [Payload CMS Field Types Documentation](https://payloadcms.com/docs/fields/overview).


