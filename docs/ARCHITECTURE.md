# Framixor Demo Orders Architecture

This project follows a contract-first, tenant-driven architecture.

The main goal is to build reusable order-intake demos where tenant-specific data, visual identity, copy, and business rules are isolated from UI implementation.

## Architecture Principles

- Contract-first
- Tenant-driven
- Typed data boundaries
- Presentational feature components
- Minimal runtime complexity
- No backend dependency for the MVP
- No premature platform abstraction

## Folder Responsibilities

### `src/core/`

Reusable platform-level code.

Allowed:
- shared types
- tenant resolution
- i18n helpers
- formatting helpers
- reusable UI typing

Not allowed:
- tenant-specific business content
- tenant-specific product data
- tenant-specific colors
- page-specific cart logic

### `src/tenants/<tenant-slug>/`

Tenant-specific source of truth.

Allowed:
- business content
- catalog data
- theme tokens
- translations
- tenant configuration

Not allowed:
- React components
- cart state
- page layout
- UI interaction logic

### `src/pages/`

Page-level orchestration.

Allowed:
- composing sections
- local MVP state
- selecting tenant data
- wiring handlers
- preparing derived view data

For the current MVP, cart state may live in `OrderPage.tsx`.

Not allowed:
- hardcoded tenant content
- hardcoded product data
- hardcoded tenant colors

### `src/features/landing/`

Landing page presentational sections.

Allowed:
- visual layout
- rendering tenant-provided data
- using theme tokens
- using translated labels

Not allowed:
- hardcoded client-specific copy
- hardcoded client-specific colors
- tenant data ownership

### `src/features/order/`

Order-intake presentational sections.

Allowed:
- product list UI
- product card UI
- cart summary UI
- fulfillment selection UI
- order CTA UI
- quantity controls

Not allowed:
- owning product catalog
- owning business rules
- hardcoding prices
- hardcoding shipping minimums
- hardcoding primary visible copy
- introducing global state

## Source of Truth

- Tenant identity and wiring: `src/core/tenant/tenantRegistry.ts`
- Tenant types: `src/core/tenant/tenant.types.ts`
- Catalog types: `src/core/catalog/catalog.types.ts`
- i18n types: `src/core/i18n/i18n.types.ts`
- Business content: `src/tenants/<tenant-slug>/business.ts`
- Product catalog: `src/tenants/<tenant-slug>/catalog.ts`
- Theme tokens: `src/tenants/<tenant-slug>/theme.ts`
- Translation labels: `src/tenants/<tenant-slug>/translations.ts`

## Hard Rules

1. UI components must not own tenant data.
2. Product names, descriptions, prices, and options must come from `tenant.catalog`.
3. Business rules must come from tenant contracts.
4. Tenant-specific colors must come from `tenant.theme`.
5. Primary visible copy must come from translations.
6. Do not move tenant data into React components.
7. Do not move theme values into React components.
8. Do not change tenant resolution behavior without explicit approval.
9. Do not change i18n resolution behavior without explicit approval.
10. Do not rename core folders or contracts without explicit approval.
11. Do not add dependencies without explicit approval.
12. Do not introduce backend, auth, checkout, payment, or Supabase logic for this MVP.
13. Do not introduce routing libraries for this MVP.
14. Do not introduce global state libraries for this MVP.
15. If a required field is missing, extend the typed contract explicitly instead of hardcoding.

## Current MVP Scope

The current product target is The Bloom Oven demo order-intake flow.

In scope:

- Landing page
- Order page
- Product rendering from catalog
- Add to cart
- Remove from cart
- Quantity increase/decrease
- Cart summary
- Cart total
- Pickup/shipping selection
- Shipping minimum validation
- Order summary generation
- Contact CTA
- EN/PT/ES labels
- Visual polish using existing theme tokens

Out of scope:

- Payment
- Checkout
- User accounts
- Inventory management
- Admin panel
- Backend persistence
- Supabase
- AI chatbot
- Order history
- Multi-tenant dashboard
- Complex routing

## Order Intake Rules

- `OrderPage.tsx` may own local cart state for the MVP.
- `src/features/order/*` should remain mostly presentational.
- Product data must come from `tenant.catalog`.
- Product prices must come from `tenant.catalog`.
- Business contact information must come from `tenant.business`.
- Shipping and pickup rules must come from tenant contracts.
- Shipping minimum logic must not be hardcoded inside presentational components.
- Order summary generation may live in the page layer or in a small helper.
- Generated order summaries must use tenant data and selected cart state.

## AI Generation Rules

AI tools may:

- improve layout
- improve spacing
- improve typography
- improve visual hierarchy
- add presentational order components
- add cart interaction within the approved MVP scope
- add missing translation keys
- extend typed contracts when needed
- refactor presentational markup inside feature components

AI tools must not:

- rewrite the architecture
- move tenant content into components
- move theme values into components
- hardcode client-specific copy
- hardcode client-specific colors
- change tenant registry behavior
- change tenant hooks
- change i18n hooks
- add new architecture without approval
- add dependencies without approval
- rename folders or core contracts without approval
- add backend logic
- add payment logic
- add checkout logic
- add Supabase logic
- add chatbot logic

## Implementation Enforcement

Before submitting AI-generated changes:

- Run `npm run build`.
- Verify tenant-specific text exists only in `business.ts`, `catalog.ts`, or `translations.ts`.
- Verify tenant-specific colors exist only in `theme.ts`.
- Verify products and prices come from `catalog.ts`.
- Verify business rules come from typed tenant contracts.
- Verify feature components receive data through typed props.
- Verify no new dependency was added without approval.
- Verify AI output includes an execution report listing changed files and architecture rules followed.

## Required AI Execution Report

Every AI-assisted change must include:

1. Files changed
2. New files added
3. Contract fields added or changed
4. Translation keys added or changed
5. Any hardcoded compromises
6. Build result
7. Architecture rules followed
8. Remaining TODOs