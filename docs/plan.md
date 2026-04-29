# The Bloom Oven — Final Visual & UX Specification

A clean, modern boutique-bakery landing page focused on a single hero product (The 6-Cookie Box) with WhatsApp as the primary conversion channel. The aesthetic is warm, artisanal, and appetizing — built on a cream background with sage-green brand accents and dark charcoal text.

---

## 1. Page Structure (Top to Bottom)

The page is a single, long-scroll landing experience composed of these sections, in order:

1. **Announcement bar** — full-width, sage-green strip with a single-line urgency message ("Limited batches every week — order before we sell out"). Always visible at the very top before scroll.
2. **Header / Navigation** — fixed, overlays the hero initially.
3. **Hero section** — full-bleed cookie photography with headline, price, and primary CTA on the left; product showcase card on the right (desktop).
4. **Ordering & Delivery** — two-card explainer for shipping vs. pickup, plus a contact email line.
5. **Product showcase ("The 6-Cookie Box")** — three flavor cards followed by a centered price + CTA panel.
6. **Brand story ("Our Story")** — short, centered editorial paragraph block.
7. **Testimonials** — three short customer reviews with star ratings.
8. **Instagram / Social proof** — grid of 6 image tiles plus a follow link.
9. **Final CTA** — short closing pitch with a single WhatsApp button.
10. **Footer** — logo, address, contact email, social icons, copyright.
11. **Floating WhatsApp button** — persistent, bottom-right, on every viewport once the page loads.

Each content section uses generous vertical padding (large on desktop, slightly reduced on mobile), a centered max-width container, and alternates between the cream background and a slightly darker cream "card" surface to create rhythm without visual noise. On mobile, every multi-column layout collapses to a single stacked column with consistent gaps.

---

## 2. Header Behavior

- **Fixed position** at the top of the viewport, layered above all content.
- **Two visual states** controlled by scroll position:
  - **Transparent state (top of page):** no background fill; the cookie hero photo shows through. Navigation links and the social icon use a light/white tone with a soft drop shadow for readability. The logo sits inside a soft, semi-transparent cream "pill" with light backdrop blur so it remains legible against any bright spot of the photo.
  - **Solid state (after scrolling past the hero zone):** a near-opaque cream background with backdrop blur and a subtle shadow appears. Navigation links and icon switch to dark charcoal at reduced opacity, with a sage-green hover color. The logo pill disappears — the logo sits flat on the cream bar.
- **Transition** between states is smooth (short fade/transition on background, color, and shadow).
- **Layout:** logo on the left, a small horizontal nav on the right (Menu, About, Instagram icon). Vertical padding is tight to keep the header slim over the hero. The header sits just below the announcement bar when at the top, and snaps to viewport top once scrolled.
- **Mobile:** text nav links are hidden; only the logo and the Instagram icon remain visible. The same two-state contrast logic applies.

---

## 3. Hero Section

- **Full-bleed cookie photograph** as the background, edge-to-edge, filling at least ~92% of the viewport height. The image is the dominant visual element — not abstract, not decorative.
- **Asymmetric gradient overlay** running left-to-right: strong cream on the left (to protect the headline and menu), fading through a midtone to fully transparent on the right (so the cookies remain vivid and appetizing on that side).
- **Two-column layout on desktop**, single column on mobile:
  - **Left column (copy):**
    1. A small sage-outlined pill badge with a pulsing dot, listing the dietary credentials (Gluten-Free · Dairy-Free · Refined Sugar-Free).
    2. A large, two-line serif headline. The first line is the concrete product promise ("Freshly Baked Cookies."), in dark charcoal. The second line is a warm-toned italic-feeling emphasis ("Limited Batches Every Week.") in a warm caramel/toffee tone — not green, to keep the headline strong and readable.
    3. A short supporting paragraph naming the box and flavors and the city of origin.
    4. The price ("$42 / box") in a large serif weight, with the "/ box" smaller and muted.
    5. **Primary CTA button:** a high-contrast sage-green pill labeled "Order via WhatsApp" with a chat icon. It carries an outer ring/halo on a cream offset and a strong colored shadow to lift it off the background. Hover lifts it slightly and deepens the shadow.
    6. A small reassurance line beneath ("We reply within 30 minutes · No apps, no accounts").
  - **Right column (desktop only):** a rounded, shadowed photo card showing the same cookie box with two small floating chips at the bottom ("Allergen-Friendly", "Made Fresh Weekly") on a soft dark gradient.
- **Top spacing:** the inner content has extra top padding so the headline never collides with the fixed header.
- **Mobile:** the right-column product card is hidden; the hero compresses to the copy column with the same hierarchy. The background photo and gradient remain.

---

## 4. Product Presentation

- **Single hero product:** "The 6-Cookie Box" — explicitly framed as a signature/limited offering.
- **Section intro:** small uppercase eyebrow label flanked by thin sage rules ("Our Signature Box"), a large serif heading, and a short subhead explaining what's inside.
- **Three flavor cards in a row** (Chocolate Chip, Red Velvet, Pistachio):
  - Each card has a soft, distinct tinted background (warm gold, soft pink, soft sage) with a matching subtle border.
  - A large flavor symbol/illustration sits at the top, then the flavor name in serif, a one-line taste descriptor in muted text, and a small sage label "× 2" indicating quantity per box.
  - Cards lift slightly and grow their shadow on hover; the symbol scales gently.
- **Price + CTA panel** below the cards: a large rounded card with a soft sage glow in one corner, a small uppercase "Limited Batches" pill, the price in oversized serif, a short emotional subline, and a sage WhatsApp CTA button. A reassurance line ("We reply within 30 minutes") sits beneath.
- **Mobile:** the three flavor cards stack vertically; the price panel keeps its centered layout with reduced padding.

---

## 5. Ordering / Delivery Section

- Sits on a slightly darker cream "card" surface to separate it from the main background.
- **Section header:** the same eyebrow + serif heading pattern ("Good to Know" / "Ordering & Delivery"), centered.
- **Two equal cards side-by-side** on desktop, stacked on mobile:
  - **Shipping card:** truck icon in a soft sage tile, "Shipping" title, then a bulleted list (minimum order, who pays shipping, delivery area). Bullet markers are sage; emphasized values (e.g., the $20 minimum) are in full charcoal weight.
  - **Pickup card:** map-pin icon in the same sage tile, "Pickup" title, bulleted list (no minimum, address, "Schedule via WhatsApp").
- **Neither option is visually weighted above the other** — they're presented as two equal paths. Constraints (minimums, location) are communicated as plain bullets, not as warnings.
- Below the two cards, a small centered line offers an email contact for questions, with a sage hyperlink.

---

## 6. Brand / Story Section

- Centered, narrow column (max ~2/3 of the content width). Plenty of negative space.
- **Eyebrow label** ("Our Story"), a two-line serif heading where the second line is in italic emphasis, then **two short paragraphs** of muted body text.
- Inline emphasis is rare and gentle: an italicized "and" tinted in sage adds a single moment of brand color in the prose.
- Tone is warm, personal, and confident — not corporate. The section is purely textual; no images, no buttons. It's a quiet pause between product and proof.

---

## 7. Social / Proof Section (Testimonials + Instagram)

This is split into two consecutive sections:

**Testimonials**
- On the darker cream "card" surface.
- Eyebrow ("Real Reviews") + serif heading ("What Our Customers Say"), centered.
- **Three review cards in a row** on desktop, stacked on mobile.
- Each card: a row of five filled gold stars at the top, an italic quote in muted charcoal, and the customer first name + initial in bold beneath.
- Cards are quiet — soft borders, light shadow, no hover interactions. Their job is reassurance, not engagement.

**Instagram**
- Centered intro with a sage Instagram icon, a serif heading ("Follow the Journey"), and a short subhead.
- **A grid of six square tiles** (3×2 on mobile, 6×1 on desktop) with rounded corners. Each tile has a different soft background tint pulled from the brand palette (biscuit, frosting, dough, sage, golden, neutral) and a single content symbol centered. Tiles scale slightly on hover.
- Below the grid, a sage handle link ("@thebloomoven") with the Instagram icon.
- The interaction expectation is "tap to see more on Instagram" — the section is an invitation, not a feed.

---

## 8. Final CTA Section

- Sits on a very soft sage-tinted background to set it apart as the closing moment.
- Centered, narrow column.
- **Two-line serif headline** ("Ready to Taste / Something Special?") where the second line is sage and italic — the only place green is used at headline scale, intentionally, to signal "this is the action moment."
- A short, friendly supporting paragraph that lowers the barrier ("Just say hi — we'll help you pick the perfect treat. No forms, no waiting.").
- **A single sage WhatsApp pill button** with chat icon, sized large but slightly less heavy than the hero CTA — this is the second ask, not the first impression.
- Expected user action: tap the button, which opens WhatsApp with a pre-filled friendly message.

---

## 9. Footer

- Dark charcoal background — the only fully dark surface on the page — providing strong end-of-page closure.
- **Two-zone layout** on desktop, stacked and centered on mobile:
  - **Left:** logo (brightened to remain visible on dark), "Licensed Home Bakery" line, address line, and a sage email link.
  - **Right:** a horizontal row of social/contact icons (WhatsApp, Instagram, Facebook, phone) in low-opacity light gray, each turning sage on hover.
- A thin divider, then a small centered copyright line in low-opacity light gray.
- Contrast strategy: muted secondary text, sage for any actionable element, white-ish for the logo — keeping the dark surface calm and readable.

---

## 10. Floating CTA

- A persistent **WhatsApp pill button** fixed to the bottom-right of the viewport, above all content.
- Sage background, white chat icon, the label "Order Now" in bold.
- Strong colored shadow lifts it off the page; on hover it nudges up and deepens its shadow.
- Visible on every section of the page and on every viewport size. It animates in with a subtle fade/rise on first paint.
- Its job is to guarantee that the primary action is never more than one tap away, especially during long scrolls through story and proof sections.

---

## 11. Visual System

**Color roles** (described, not hex-coded):
- **Background (primary surface):** a warm off-white cream — the dominant page color. Never pure white.
- **Surface (secondary):** a very slightly darker, warmer cream used for alternating sections (delivery, testimonials) and large product panels. Creates rhythm without contrast jumps.
- **Foreground / text:** a dark warm charcoal, never pure black. Body copy uses a muted variant of the same charcoal.
- **Primary brand accent:** a soft, slightly desaturated sage green. Used for the announcement bar, primary CTA buttons, eyebrow labels, bullet markers, icon tiles, hover/link states, and the closing-section background tint. It is *visible but never dominant* — small UI accents and key conversion moments only.
- **Warm complementary accent:** a caramel/toffee/honey tone used sparingly for the second line of the hero headline, for star ratings (golden), and inside soft tinted card backgrounds. This keeps food appeal warm without bringing back heavy oranges or browns.
- **Dark surface:** charcoal, used only in the footer.

**Contrast strategy:**
- Sections alternate between cream and slightly-darker-cream to segment content quietly.
- High-contrast moments are reserved for the hero photo, the primary CTAs (sage on cream with halo and shadow), and the dark footer.
- Text always sits on a cream or white-ish surface; sage is used for accents and small emphasis but never as a large background behind body copy.

**Typography hierarchy:**
- **Display / headings:** an elegant serif with tight letter spacing (Playfair Display family). Used for H1, all section H2s, the price, and product card titles. Often paired with an italic emphasis on the second line of two-line headings.
- **Body / UI:** a refined neutral sans-serif (Inter family) in light to semi-bold weights. Used for paragraphs, navigation, buttons, badges, captions.
- **Eyebrow labels:** small, uppercase, semi-bold sans-serif with wide letter-spacing, in sage, flanked by thin sage rules — a signature pattern used at the top of nearly every content section.
- Hierarchy follows: oversized serif H1 → large serif H2 → serif product/price → sans body → small muted captions.

**Spacing rhythm:**
- Sections use consistent generous vertical padding (larger on desktop, modestly reduced on mobile).
- Content inside sections is constrained to comfortable max-widths (narrower for prose, wider for grids).
- Cards and panels use generous internal padding and consistent gaps between siblings.
- Negative space is treated as part of the design — particularly around the brand story and around the hero CTA.

**Border radius usage:**
- **Pills (fully rounded):** all CTA buttons, badges, eyebrow chips, the announcement-bar feel, the floating button, the logo backdrop in transparent header state.
- **Large rounded cards:** product flavor cards, delivery cards, testimonial cards, Instagram tiles, the price panel.
- **Larger still:** the hero product photo card and the price panel use a more pronounced radius for a softer, premium feel.
- **No sharp corners** anywhere except the announcement bar, header bar, and footer (full-width strips).

---

## 12. Interaction Quality

- **Buttons:** all primary CTAs are pill-shaped, sage-filled, white-text, with a colored shadow matching the button color at reduced opacity. On hover they lift slightly (small upward translate), deepen their shadow, and slightly darken/lighten their fill. The hero CTA additionally carries an outer ring on a cream offset to make it the loudest button on the page.
- **Secondary buttons / links:** text-only sage links with an underline on hover, or muted charcoal that transitions to sage on hover.
- **Cards:** product flavor cards lift and intensify their shadow on hover; their inner symbol scales subtly. Testimonial and delivery cards are static — they're for reading, not interacting.
- **Header transitions:** color, background, and shadow transitions are short and smooth as the user crosses the scroll threshold.
- **Pulsing dot** on the dietary-credentials pill in the hero adds a tiny moment of life without distracting.
- **No form validation** appears anywhere on the page — the entire conversion flow is intentionally off-site (WhatsApp), so there are no inputs, no errors, no loading states to design. Reassurance text ("We reply within 30 minutes", "No apps, no accounts") replaces traditional form trust signals.
- **Motion is restrained:** subtle fade/rise on the floating button entrance, soft pulse on the badge dot, small hover lifts. No autoplaying animations, no parallax, no scroll-jacked effects.

---

## 13. Mobile-First Behavior

- **All multi-column layouts collapse to a single stacked column.** Specifically:
  - Hero: the right-side product card is hidden; only the copy column is shown over the cookie photo with its protective gradient.
  - Delivery cards: stack vertically with the same internal layout.
  - Flavor cards: stack vertically, each remaining full-width within the container.
  - Testimonials: stack vertically.
  - Instagram grid: changes from a 6-across row to a 3×2 grid.
  - Footer: logo block and social icons stack and center.
- **Header simplifies:** text navigation links hide, leaving only the logo and Instagram icon. The two-state contrast rules still apply.
- **Spacing reduces gracefully:** section vertical padding, container horizontal padding, and card internal padding all step down at smaller breakpoints, but the rhythm and hierarchy stay intact.
- **Typography scales down** at smaller breakpoints — the hero H1 and product price drop one tier on mobile but remain the largest elements on screen.
- **The floating WhatsApp button is especially important on mobile:** it remains pinned bottom-right and acts as the always-available primary action, since the desktop hero's right-column product card is no longer visible.
- **Touch targets** for all CTAs, social icons, and tiles meet generous tap-area sizes by virtue of the pill shape and padding — no element relies on hover to be discoverable.
- **The announcement bar** stays full-width and single-line; its message is short enough to never wrap on common mobile widths.

---

**Design intent in one sentence:** a warm, modern, artisanal bakery landing page that uses appetizing close-up product photography, a calm cream-and-sage palette, elegant serif/sans typography, and a single relentlessly clear conversion path — chat on WhatsApp — to turn appetite into orders.
