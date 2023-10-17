import {
  Metaobject,
  MetaobjectField,
} from '@shopify/hydrogen/storefront-api-types';
import {parseObject} from './utils';

export const parseCarousel = (metaobject: Metaobject) => {
  const carousel: any = {};
  let fields = parseObject(metaobject, 'fields');
  fields = fields.map((field: MetaobjectField) => {
    const carouselItem: any = {};
    switch (field.type) {
      case 'single_line_text_field':
        carousel[field.key] = field.value;
        break;
      case 'list.metaobject_reference':
        carousel[field.key] = parseCarouselItem(field);
        break;
      default:
        break;
    }
    return carouselItem;
  });

  return carousel;
};

export const parseCarouselItem = (field: MetaobjectField) => {
  const nodes = parseObject(field, 'references.nodes');
  const carouselItems = nodes.map((node: Metaobject) => {
    const carouselItem: any = {};
    if (node.fields) {
      carouselItem.id = node.id;
      carouselItem.handle = node.handle;
      node.fields.forEach((field: MetaobjectField) => {
        if (!field.type.includes('list.')) {
          if (field.type === 'file_reference') {
            carouselItem[field.key] = parseObject(field, 'reference.image.url');
          } else carouselItem[field.key] = field.value;
        } else {
          if (field.type === 'list.file_reference') {
            let listImage = parseObject(field, 'references.nodes');
            listImage = listImage.map((image: any) =>
              parseObject(image, 'image.url'),
            );
            carouselItem[field.key] = listImage;
          } else carouselItem[field.key] = JSON.parse(field.value as any);
        }
      });
    }
    return carouselItem;
  });

  console.log('carouselItems', carouselItems);

  return carouselItems;
};
