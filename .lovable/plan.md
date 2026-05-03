## Goal
Convert the entire project from TSX/TS to JSX/JS, delete the `src/components/ui/` folder, and replace the few UI primitives actually in use with simple inline components inside `src/components/site/`.

## Scope of UI usage to replace
Only these primitives are imported anywhere in the app code:
- `Button` (used in Hero, Pricing, PreOrder, etc.)
- `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` (used in Faq + Pricing)
- `TooltipProvider` (in App.tsx — can be removed; no `<Tooltip>` is used)
- `Toaster` and `Sonner` (in App.tsx — replace with a single tiny toast)
- `toast` from `@/hooks/use-toast` (used in Contact, PreOrder, Footer)

Everything else in `src/components/ui/` is unused and gets deleted with the folder.

## Plan

### 1. Create lightweight replacements in `src/components/site/`
- `Button.jsx` — minimal cva-based button keeping the variants currently in use (`default`, `outline`, `hero`, `outlineGlow`, sizes `default`, `lg`, `xl`, `icon`).
- `Accordion.jsx` — thin wrapper around `@radix-ui/react-accordion` exporting `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` (already a dep).
- `toast.js` — tiny helper exporting `toast({ title, description })` that uses `sonner`'s `toast` directly (sonner is already a dep). Also export a `<Toaster />` component wrapping sonner's `Toaster`.

### 2. Rewrite all `.tsx`/`.ts` files as `.jsx`/`.js`
Strip TypeScript: type annotations, generics, `as` casts, `interface`/`type` declarations, `React.FC`, `React.forwardRef<...>` generics, `import type`, etc.

Files to convert (and delete originals):
- `src/main.tsx` → `src/main.jsx`
- `src/App.tsx` → `src/App.jsx` (drop TooltipProvider + dual toasters; use new local Toaster)
- `src/pages/Index.tsx` → `src/pages/Index.jsx`
- `src/pages/NotFound.tsx` → `src/pages/NotFound.jsx`
- All `src/components/site/*.tsx` → `.jsx`, updating imports to `./Button`, `./Accordion`, `./toast`
- `src/components/NavLink.tsx` → `.jsx` (or delete if unused — currently unused by site code)
- `src/lib/utils.ts` → `src/lib/utils.js`
- `src/hooks/use-mobile.tsx` → delete (unused)
- `src/hooks/use-toast.ts` → delete (replaced)
- `src/vite-env.d.ts` → keep (harmless, type-only) or delete; will delete for cleanliness
- `src/test/*.ts` → convert to `.js`
- `src/App.css` → keep

### 3. Delete
- Entire `src/components/ui/` folder
- `src/hooks/` folder (after migrating use-toast)
- `src/components/NavLink.tsx` (unused)
- Old `.tsx`/`.ts` files after their `.jsx`/`.js` counterparts exist

### 4. Update config
- `index.html` — change `/src/main.tsx` → `/src/main.jsx`
- `components.json` — set `"tsx": false` (cosmetic)
- Keep `tsconfig*.json` as-is (allowJs is true; harmless) — TS configs don't break a JSX project served by Vite SWC.
- `vite.config.ts` — leave as TS (it's a Node config file, not app code). Per the user's "only jsx not tsx" rule scoped to the React project, config files commonly stay TS. I'll convert it too for consistency: `vite.config.ts` → `vite.config.js`, and same for `vitest.config.ts`, `tailwind.config.ts`, `postcss.config.js` (already js), `eslint.config.js` (already js).

### 5. Verify
- Run the build to ensure no broken imports or stray TS syntax.
- Fix any leftover issues.

## Final structure (simplified)
```
src/
  assets/...
  components/
    site/
      Accordion.jsx
      Button.jsx
      toast.js
      About.jsx
      Contact.jsx
      Faq.jsx
      Footer.jsx
      Hero.jsx
      Highlights.jsx
      HowItWorks.jsx
      Impact.jsx
      Navbar.jsx
      Partnerships.jsx
      PreOrder.jsx
      Pricing.jsx
      Product.jsx
      Reveal.jsx
  lib/utils.js
  pages/
    Index.jsx
    NotFound.jsx
  App.jsx
  App.css
  index.css
  main.jsx
```

## Notes / risks
- `sonner` and `@radix-ui/react-accordion` are already installed — no new deps.
- Removing `TooltipProvider` is safe: no `<Tooltip>` is used anywhere in app code.
- Replacing the dual toaster setup (shadcn toaster + sonner) with sonner-only is a minor behavior change but matches existing `toast()` calls (they only pass `title`/`description`, which sonner supports as `toast(title, { description })`).
