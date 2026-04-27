import type { Language, TranslationDictionary } from "../../core/i18n/i18n.types";

export const bloomOvenTranslations = {
  en: {
    common: {
      orderingRulesTitle: "Ordering rules",
    },
    order: {
      backToHome: "Back to",
      title: "Build your order",
    },
  },
  pt: {
    common: {
      orderingRulesTitle: "Regras de pedido",
    },
    order: {
      backToHome: "Voltar para",
      title: "Monte seu pedido",
    },
  },
  es: {
    common: {
      orderingRulesTitle: "Reglas de pedido",
    },
    order: {
      backToHome: "Volver a",
      title: "Arma tu pedido",
    },
  },
} satisfies Record<Language, TranslationDictionary>;
