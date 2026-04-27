# Framixor Demo Orders Architecture

This project follows a contract-first, tenant-driven architecture.

## Core Rules

- Tenant data lives under `src/tenants/<tenant-slug>/`.
- UI components must not hardcode tenant-specific business content.
- UI components must not hardcode tenant-specific colors.
- Tenant resolution happens through `core/tenant/useTenant.ts`.
- Translation resolution happens through `core/i18n/useTranslation.ts`.
- Pages compose data and components.
- Feature components receive typed props and remain presentational.

## Source of Truth

- Business content: `business.ts`
- Theme tokens: `theme.ts`
- Translation labels: `translations.ts`
- Tenant wiring: `tenantRegistry.ts`
- Contract types: `tenant.types.ts` and `i18n.types.ts`

## AI Generation Rules

AI tools may:
- improve layout
- improve spacing
- improve typography
- improve visual hierarchy
- refactor presentational markup inside feature components

AI tools must not:
- move tenant content into components
- move theme values into components
- hardcode client-specific copy
- hardcode client-specific colors
- change tenant registry behavior
- change hooks
- add new architecture without approval
- add dependencies without approval
- rename folders or core contracts without approval

## Current Design Constraint

The current UI is intentionally minimal. Visual polish should happen inside existing landing components first.

## Implementation Enforcement

Before submitting AI-generated changes:

- Run `npm run build`.
- Verify tenant-specific text exists only in `business.ts` or `translations.ts`.
- Verify tenant-specific colors exist only in `theme.ts`.
- Verify landing components receive data through typed props.
- Verify AI output includes a short execution report listing changed files and confirming which architecture rules were followed.