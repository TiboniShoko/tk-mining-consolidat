# TK Mining Consolidation - Corporate Website

A professional corporate website showcasing the operations, legacy, and investment opportunities of TK Mining Consolidation, a Zimbabwean mining conglomerate led by visionary entrepreneur Anderson Tsikira.

**Experience Qualities**:
1. **Professional** - Conveys credibility and corporate excellence through polished design and clear information hierarchy
2. **Powerful** - Projects strength and industry leadership through bold typography, metallic accents, and impactful imagery
3. **Trustworthy** - Builds investor confidence through transparency in operations, community impact, and growth timeline

**Complexity Level**: Content Showcase (information-focused)
This is a multi-page corporate presentation site with rich content sections, statistics, and project information presented through cards, timelines, and tables. No user accounts or complex state management required.

## Essential Features

### Multi-Page Navigation
- **Functionality**: Smooth navigation between 5 distinct pages (Home, About, Operations, Community, Investment)
- **Purpose**: Organize information logically for different stakeholder interests
- **Trigger**: User clicks navigation links in header or footer
- **Progression**: User on any page → clicks nav link → smooth scroll/transition → new page content loads
- **Success criteria**: All pages accessible within 2 clicks, active page clearly indicated in navigation

### Hero Section with Brand Identity
- **Functionality**: Full-width hero banner showcasing company name, founder profile, and key messaging
- **Purpose**: Create immediate visual impact and establish brand authority
- **Trigger**: Page load on homepage
- **Progression**: Site loads → hero animates in → displays company tagline → CTA button invites exploration
- **Success criteria**: Hero visible above fold on all screen sizes, text readable over background imagery

### Business Timeline Visualization
- **Functionality**: Interactive timeline showing company milestones from 2010-2025
- **Purpose**: Demonstrate growth trajectory and build credibility through historical achievement
- **Trigger**: User scrolls to timeline section on About page
- **Progression**: User reaches section → timeline entries animate in sequentially → hover reveals additional details
- **Success criteria**: Timeline readable on mobile, clear chronological flow, key dates prominent

### Operations Statistics Dashboard
- **Functionality**: Display operational metrics as visually engaging cards/infographics
- **Purpose**: Quantify company scale and capabilities for potential investors
- **Trigger**: User navigates to Operations page
- **Progression**: Page loads → stat cards count up to final values → hover effects reveal context
- **Success criteria**: Numbers prominent and digestible, cards responsive, clear visual hierarchy

### Investment Projects Table
- **Functionality**: Responsive data table showing 9 investment opportunities with key details
- **Purpose**: Present partnership opportunities in structured, comparable format
- **Trigger**: User navigates to Investment page
- **Progression**: Page loads → table renders with sortable columns → user reviews projects → clicks CTA for contact
- **Success criteria**: Table adapts to mobile (cards), all data visible, contact CTA prominent

### Contact Information Footer
- **Functionality**: Persistent footer with contact details on every page
- **Purpose**: Make it easy for interested parties to reach out
- **Trigger**: Always visible at bottom of every page
- **Progression**: User needs contact info → scrolls to footer → finds email, phone, location
- **Success criteria**: Contact info visible on all pages, clickable phone/email links work

## Edge Case Handling
- **Long company names on mobile**: Typography scales down gracefully, uses responsive font sizing
- **Missing images**: Fallback to solid gradients with mining-inspired geometric patterns
- **Small screens**: Navigation collapses to hamburger menu, tables convert to stacked cards
- **Slow connections**: Content structure visible immediately, images lazy load progressively
- **Accessibility**: All interactive elements keyboard-navigable, color contrast meets WCAG AA

## Design Direction
The design should feel powerful, premium, and industrial — evoking the weight and value of mining operations while maintaining corporate sophistication. It should project stability and growth potential, balancing raw industrial imagery with refined modern UI. The interface should be rich with visual interest through metallic accents and geological textures while maintaining clean information architecture.

## Color Selection
**Complementary palette** with industrial metallics and earthy tones that represent mining operations and precious metals.

- **Primary Color (Deep Metallic Gold #b89400 / oklch(0.63 0.15 85))**: Represents gold mining operations, prosperity, and premium quality. Used for CTAs, accents, and brand moments.
- **Secondary Color (Dark Charcoal #1c1c1c / oklch(0.18 0 0))**: Conveys industrial strength, professionalism, and stability. Used for headers, navigation, and text overlays.
- **Accent Color (Industrial Silver #c0c0c0 / oklch(0.79 0 0))**: Reflects mineral/metal processing and modern industrial design. Used for borders, secondary elements, and hover states.
- **Foreground/Background Pairings**:
  - Background (White #ffffff / oklch(1 0 0)): Black text (oklch(0.18 0 0)) - Ratio 11.4:1 ✓
  - Card (Light Gray oklch(0.97 0 0)): Dark text (oklch(0.18 0 0)) - Ratio 10.8:1 ✓
  - Primary (Gold #b89400): White text (oklch(1 0 0)) - Ratio 5.2:1 ✓
  - Secondary (Charcoal #1c1c1c): White text (oklch(1 0 0)) - Ratio 11.4:1 ✓
  - Accent (Silver #c0c0c0): Dark text (oklch(0.18 0 0)) - Ratio 7.1:1 ✓

## Font Selection
Typography should convey modern corporate professionalism with strong presence — bold geometric sans-serifs for headings that command attention, paired with clean humanist sans-serif for body text that maintains readability across long content sections.

**Google Fonts**: Montserrat (headings) and Open Sans (body)

- **Typographic Hierarchy**:
  - H1 (Page Titles): Montserrat Bold/48px/tight letter-spacing -0.02em
  - H2 (Section Headers): Montserrat SemiBold/36px/tight letter-spacing -0.01em
  - H3 (Subsections): Montserrat SemiBold/24px/normal letter-spacing
  - Body Text: Open Sans Regular/16px/1.6 line-height
  - Small Text (Captions): Open Sans Regular/14px/1.5 line-height
  - Stats/Numbers: Montserrat Bold/56px/tight (for impact metrics)

## Animations
Animations should feel substantial and deliberate — like heavy machinery starting up or precious metals being revealed. Motion should reinforce the sense of scale and value while guiding user attention through content hierarchies.

- **Purposeful Meaning**: Parallax scrolling on hero sections creates depth like geological layers; count-up animations on statistics emphasize impressive scale; fade-in-up on scroll reveals content progressively like excavation
- **Hierarchy of Movement**: Hero elements animate first (establishing presence) → navigation follows → content sections reveal on scroll → micro-interactions on hover provide tactile feedback

## Component Selection
- **Components**: 
  - Card (operational stats, project listings) with custom gold borders and shadow depth
  - Button (CTAs throughout) with primary gold variant and white text
  - Separator (section dividers) using industrial silver with gradient effects
  - Tabs (switching between operational hubs) with underline active state
  - Table (investment projects) with responsive breakpoint to card layout
  - Badge (status indicators) for project statuses with subtle animations
- **Customizations**: 
  - Custom timeline component using vertical line with milestone markers
  - Hero banner with parallax effect and overlay gradient
  - Statistics cards with count-up animation on viewport entry
  - Navigation with transparent-to-solid background on scroll
- **States**: 
  - Buttons: default gold → hover brighter gold with lift shadow → active pressed state
  - Cards: default flat → hover elevated shadow with subtle scale → focus ring gold
  - Links: default gold → hover underline slide-in → visited maintains color
- **Icon Selection**: 
  - HardHat (operations), Users (community), TrendUp (investment), MapPin (location)
  - Briefcase (business), Hammer (mining), GraduationCap (education), Buildings (infrastructure)
- **Spacing**: 
  - Consistent 8px base unit: sections py-16, cards p-6, buttons px-6 py-3, gaps gap-6
  - Hero sections py-24 for prominence, content sections py-12 for breathing room
- **Mobile**: 
  - Navigation collapses to hamburger menu below 768px with slide-in drawer
  - Hero text scales to 32px on mobile, maintains hierarchy
  - Statistics grid: 4 columns → 2 columns → 1 column
  - Investment table converts to stacked cards with all information visible
  - Parallax effects disabled on mobile for performance
