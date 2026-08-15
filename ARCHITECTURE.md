# Architecture Notes

## Ownership

- `components/ui`: generic reusable visual primitives.
- `components/layout`: global Navbar and Footer.
- `sections`: page-specific sections and section-owned subcomponents.
- `features/order`: order-specific modal behavior.
- `hooks`: shared behavior used by more than one feature/section or clearly reusable.
- `data`: static content used by the site.
- `types`: shared TypeScript contracts.
- `assets`: product media and brand assets.
- `styles/index.css`: global CSS, responsive helpers and shared animations.

## Dependency Direction

Reusable layers should not depend on page sections.

```text
App
  ↓
layout / sections / features
  ↓
shared UI / hooks / data / types
  ↓
assets
```

Avoid circular dependencies and do not move page-specific business logic into generic UI components.

## Order Flow

`App.tsx` owns the single `isOrderModalOpen` state. `Navbar` and `Hero` receive an `onOpenOrderModal` callback. The one `features/order/OrderModal.tsx` instance receives `isOpen` and `onClose`.

## Styling

Global rules remain in `styles/index.css`. Section-specific visual behavior remains close to the section JSX through Tailwind classes; the existing responsive/animation CSS classes were preserved in the global stylesheet.
