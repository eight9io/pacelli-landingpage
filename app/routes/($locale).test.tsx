import QuoteAdminTemplate from '~/lib/email/templates/quote.admin';

export default function PartnershipServicesPage() {
  return (
    <>
      <QuoteAdminTemplate data={data} />
    </>
  );
}

const data = {
  items: [
    {
      id: 46755706667306,
      properties: {},
      quantity: 2,
      variant_id: 46755706667306,
      key: '46755706667306:e43888fa88767f18c84fdffe651f7032',
      title:
        'Prodotto di prova per vedere gli attributi - Nero / 200x60x400 / Con cassettiere interne',
      price: 100,
      original_price: 100,
      discounted_price: 100,
      line_price: 200,
      original_line_price: 200,
      total_discount: 0,
      discounts: [],
      sku: '123456791',
      grams: 0,
      vendor: 'Pacelli',
      taxable: true,
      product_id: 8678632096042,
      product_has_only_default_variant: false,
      gift_card: false,
      final_price: 100,
      final_line_price: 200,
      url: '/products/prodotto-di-prova-per-vedere-gli-attributi?variant=46755706667306',
      featured_image: {
        aspect_ratio: 0.75,
        alt: 'Prodotto di prova per vedere gli attributi',
        height: 4032,
        url: 'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/Martinacucinafoto3.jpg?v=1696323338',
        width: 3024,
      },
      image:
        'https://cdn.shopify.com/s/files/1/0816/1971/4346/files/Martinacucinafoto3.jpg?v=1696323338',
      handle: 'prodotto-di-prova-per-vedere-gli-attributi',
      requires_shipping: true,
      product_type: '',
      product_title: 'Prodotto di prova per vedere gli attributi',
      product_description:
        "Prodotto di prova per vedere gli attributi è un'opzione di arredamento moderno e durevole. Con una libreria di design unica e scaffali in molti colori, questo prodotto è ideale per qualsiasi stile di ambiente. La libreria fornisce spazio di archiviazione resistente e moderno.",
      variant_title: 'Nero / 200x60x400 / Con cassettiere interne',
      variant_options: ['Nero', '200x60x400', 'Con cassettiere interne'],
      options_with_values: [
        {
          name: 'Color',
          value: 'Nero',
        },
        {
          name: 'Size',
          value: '200x60x400',
        },
        {
          name: 'Versione',
          value: 'Con cassettiere interne',
        },
      ],
      line_level_discount_allocations: [],
      line_level_total_discount: 0,
      has_components: false,
    },
  ],
  customer: {
    name: '34234',
    email: 'trungtrs1998@gmail.com',
    message: '12123123',
  },
  base_url: 'https://pacelli-e9.myshopify.com',
};
