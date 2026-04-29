# Order Intake MVP

## Product Goal

Create a polished, functional order-intake demo for The Bloom Oven.

This is not a full e-commerce system.

This is a lightweight ordering experience designed to collect a structured order and hand it off through a contact CTA.

## User Flow

1. User opens landing page.
2. User clicks order CTA.
3. User lands on `/order`.
4. User sees available products.
5. User adds products to cart.
6. User adjusts quantities.
7. User selects pickup or shipping.
8. User sees validation rules.
9. User reviews cart summary and total.
10. User clicks contact CTA.
11. System generates an order summary for handoff.

## Required MVP Features

### Product List

- Render products from `tenant.catalog`.
- Show product name.
- Show product description.
- Show product price.
- Show product badge if available.
- Show recommended state if available.

### Cart

- Add item.
- Remove item.
- Increase quantity.
- Decrease quantity.
- Prevent negative quantity.
- Remove item when quantity reaches zero.
- Show empty cart state.
- Show subtotal/total.

### Fulfillment

Supported methods:

- pickup
- shipping

Rules:

- pickup has no minimum order value
- shipping requires minimum order value from tenant contract
- shipping cost is paid by customer outside this demo flow

### Validation

- If shipping is selected and cart total is below the shipping minimum, show a validation message.
- Do not block pickup based on minimum order value.
- Do not allow order CTA when the cart is empty.
- Do not allow shipping CTA when below minimum.

### Order Summary

The order summary should include:

- business name
- selected fulfillment method
- product names
- quantities
- line totals
- order total
- customer note placeholder if available

### Contact CTA

The CTA should use tenant business contact data.

For the MVP, the CTA may generate a `mailto:` link or a WhatsApp link if contact data exists.

Do not add checkout or payment.

## Supported Languages

- English
- Portuguese
- Spanish

## Out of Scope

- Online payment
- Checkout
- Tax calculation
- Shipping calculation
- Inventory
- Login
- Admin
- Backend persistence
- Supabase
- Chatbot
- AI assistant
- Order database