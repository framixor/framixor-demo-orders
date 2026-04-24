import type { BusinessContract } from "../../core/tenant/tenant.types";

type FooterSectionProps = {
  business: Pick<BusinessContract, "name" | "contact">;
};

export function FooterSection({ business }: FooterSectionProps) {
  return (
    <footer>
      <p>{business.name}</p>
      <p>{business.contact.email}</p>
    </footer>
  );
}