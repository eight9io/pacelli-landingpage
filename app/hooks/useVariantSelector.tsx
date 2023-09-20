// import { Product, ProductOption, ProductVariantConnection } from 'graphql/graphql';

import { Product, ProductOption, ProductVariantConnection } from '@shopify/hydrogen-react/storefront-api-types';
import lodash from 'lodash';
import { useState } from 'react';

declare type Options = {
  name: string;
  values: {
    value: string;
    selected: boolean;
    disabled: boolean;
  }[];
}[];

const transformOptions = (options: Array<ProductOption>) => {
  return options.map((item, optionIndex) => {
    const { name, values } = item;

    return {
      name: name,
      values: values?.map(function (value) {
        return {
          value: value,
          selected: false,
          disabled: optionIndex === 0 ? false : true,
        };
      }),
    };
  });
};

const getAvailableValues = (variants: ProductVariantConnection, draftOptions: Options, currentIndex: number) => {
  const selectedOptions = draftOptions
    .map((item) => ({
      name: item.name,
      value: item.values.find((i) => {
        var selected = i.selected;
        return selected;
      })?.value,
    }))
    .filter((_, index) => index < currentIndex);
  var availabileVariants = variants.nodes.filter(function (variant) {
    var conditions = selectedOptions.map(function (selectedOption) {
      return !!variant.selectedOptions.find(function (_ref4) {
        var name = _ref4.name,
          value = _ref4.value;
        return name === selectedOption.name && value === selectedOption.value;
      });
    });
    return !conditions.includes(false);
  });
  var nextValues: string[] = [];
  availabileVariants.forEach((_ref5) => {
    var selectedOptions = _ref5.selectedOptions;
    selectedOptions.forEach((selectedOption) => {
      if (draftOptions[currentIndex].name === selectedOption.name) nextValues.push(selectedOption.value);
    });
  });
  return lodash.uniq(nextValues);
};

export const useVariantSelector = (product: Product) => {
  const [variantId, setVariantId] = useState<string | null>(null);
  const [options, setOptions] = useState(transformOptions(product.options));
  const selectOption = (name: string, value: string) => {
    const draftOptions: Options = JSON.parse(JSON.stringify(options));
    var currentOptionIndex = draftOptions.findIndex((draftOption) => {
      return draftOption.name === name;
    });
    draftOptions.forEach((draftOption, optionIndex: number) => {
      var availableValues = getAvailableValues(product.variants, draftOptions, optionIndex);
      draftOption.values.forEach(function (draftValue) {
        if (availableValues.includes(draftValue.value)) {
          draftValue.disabled = false;
        } else {
          draftValue.disabled = true;
        }
        // Select current value
        if (optionIndex === currentOptionIndex) {
          draftValue.selected = false;
          if (draftValue.value === value) {
            draftValue.selected = true;
          }
        }
        // Clear dependent options
        if (optionIndex > currentOptionIndex) {
          draftValue.selected = false;
        }
        if (optionIndex > currentOptionIndex + 1) {
          draftValue.disabled = true;
        }
      });
    });
    var selectedOptions = draftOptions
      .map((i) => {
        return {
          name: i.name,
          value: i.values.find(function (_ref7) {
            var selected = _ref7.selected;
            return selected;
          })?.value,
        };
      })
      .filter((i) => i);
    const variantId =
      product.variants.nodes.find((variant) => {
        const selecteds = [...variant.selectedOptions];
        selecteds.map((i) => delete i.__typename);
        return variant.availableForSale && lodash.isEqual(selecteds, selectedOptions);
      })?.id || null;
    setVariantId(variantId);
    setOptions(draftOptions);
  };

  return {
    variantId: variantId,
    options: options,
    selectOption: selectOption,
  };
};
