# Specification

## Summary
**Goal:** Add premium, interactive love-story sections to the existing Valentine-themed storytelling site, matching the current luxury visual system and motion patterns.

**Planned changes:**
- Create reusable React section components for: Love Puzzle, Question–Answer Game, Travel Memories, Voice Note Messages, Flipbook Love Story, Monthly Memories, and Polaroid Love Wall, aligned with existing glassmorphism/gradient/glow/film-grain styling and Reveal/SectionTimeline/ParallaxLayer animation patterns.
- Implement Love Puzzle as a touch-friendly tile/card rearrangement experience that reveals a romantic message on completion and includes an in-section reset/replay control.
- Implement Question–Answer Game as a multi-prompt Q&A flow with premium answer cards, animated feedback on selection, a gentle progression indicator, keyboard-accessible controls, and restart support.
- Implement Travel Memories as a browsable timeline/carousel/stepper of destinations that expands into detailed memory cards with smooth transitions and optional image placeholders (no maps/geolocation).
- Implement Voice Note Messages as a curated list of predefined audio notes with an elegant mini-player (play/pause, progress, duration) and premium reveal when opening a note (no recording/uploading).
- Implement Flipbook Love Story as a paged story with forward/back navigation and cinematic page-turn transitions that degrade gracefully under reduced-motion settings.
- Implement Monthly Memories as a month selector that reveals a highlight memory card per month, with next/previous navigation and smooth, reduced-motion-friendly transitions.
- Implement Polaroid Love Wall as an interactive polaroid wall (building on existing polaroid styling) where selecting a polaroid opens an expanded focused view with cinematic transitions and accessible close behavior.
- Integrate the new sections into the existing pages (Home, Our Story, Gallery, Forever) to preserve narrative pacing, consistent headers/spacing, and mobile-first responsiveness, while keeping all user-facing text in English.

**User-visible outcome:** Visitors can progress through a richer, more immersive Valentine love-story experience featuring interactive puzzle, romantic Q&A, travel memory browsing, playable voice notes, a flipbook story, month-by-month memories, and an expandable polaroid wall—seamlessly integrated into the existing site flow.
