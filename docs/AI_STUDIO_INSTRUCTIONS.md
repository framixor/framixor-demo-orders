# AI Studio Instructions

You are working inside an existing Framixor demo product.

Your role is not to reinvent the application.

Your role is to complete the current MVP while preserving the existing contract-first, tenant-driven architecture.

## Required Reading

Before making changes, read:

1. `docs/ARCHITECTURE.md`
2. `src/core/tenant/tenant.types.ts`
3. `src/core/catalog/catalog.types.ts`
4. `src/core/i18n/i18n.types.ts`
5. `src/pages/OrderPage.tsx`
6. `src/features/order/*`
7. `src/tenants/bloom-oven/*`

## Main Objective

Finish The Bloom Oven order-intake MVP.

The `/order` page should work like a simple cart-based ordering flow.

## Deliverables

Implement:

- product listing from tenant catalog
- add to cart
- remove from cart
- quantity increase/decrease
- cart summary
- total calculation
- pickup/shipping selection
- shipping minimum validation
- order summary generation
- contact CTA using tenant business contact data
- EN/PT/ES visible labels
- visual polish using existing theme tokens

## Strict Constraints

Do not:

- rewrite the app
- change tenant resolution
- change i18n resolution
- hardcode tenant-specific product data
- hardcode tenant-specific pricing
- hardcode tenant-specific colors
- hardcode primary visible copy
- add routing libraries
- add global state libraries
- add backend logic
- add auth
- add payment
- add checkout
- add Supabase
- add chatbot logic
- rename core folders
- rename tenant folders
- add dependencies without explicit approval

## State Management Rule

For this MVP, cart state should stay local to `OrderPage.tsx`.

Do not introduce Redux, Zustand, Context, or other global state.

## Component Rule

Prefer small presentational components under:

`src/features/order/`

The page should orchestrate state and handlers.

Feature components should render UI and call handlers passed through props.

## Contract Rule

If required data is missing, extend the correct typed contract.

Do not bypass contracts by hardcoding values in UI components.

## Translation Rule

All primary visible UI copy must come from translations.

If a translation key is missing, add it to:

- `src/core/i18n/i18n.types.ts`
- `src/tenants/bloom-oven/translations.ts`

for all supported languages:

- `en`
- `pt`
- `es`

## Theme Rule

Use `tenant.theme` tokens for tenant-specific colors, spacing, and radius.

Do not hardcode client-specific colors in components.

## Output Requirement

After changes, provide an execution report with:

1. Files changed
2. Files added
3. Contract changes
4. Translation changes
5. Any intentional hardcoded compromises
6. Build status
7. Remaining TODOs