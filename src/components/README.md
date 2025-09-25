# SAGNAR Website Components

This directory contains reusable Astro components organized by atomic design principles.

## Structure

```
components/
├── atoms/           # Basic building blocks
│   ├── Button/      # Reusable button component
│   ├── SocialLinks/ # Social media icons list
│   └── FooterSection/ # Footer content sections
├── molecules/       # Groups of atoms
│   ├── TeamMemberCard/   # Individual team member profile
│   └── ContactForm/      # Contact form with validation
└── layouts/         # Page layouts
    └── MassivelyLayout/  # Main site layout
```

## Component Usage

### Button
```astro
<Button href="#link" size="large">Click Me</Button>
<Button variant="icon" icon="fa-arrow-down">Icon Button</Button>
```

### SocialLinks
```astro
<SocialLinks variant="alt" links={[
  { platform: 'instagram', url: '#', icon: 'fa-instagram', label: 'Instagram' }
]} />
```

### TeamMemberCard
```astro
<TeamMemberCard 
  name="Team Member"
  role="Position"
  image="/images/photo.jpg"
  description="Bio text"
/>
```

### ContactForm
```astro
<ContactForm action="/submit" submitText="Send Message" />
```

### FooterSection
```astro
<FooterSection title="Contact" variant="alt">
  <p>Content goes here</p>
</FooterSection>
```

## Benefits

- **Reusable**: Components can be used across multiple pages
- **Maintainable**: Changes to a component update everywhere it's used
- **Consistent**: Ensures design consistency across the site
- **Type Safe**: TypeScript interfaces for component props
- **Modular**: Easy to test and modify individual components