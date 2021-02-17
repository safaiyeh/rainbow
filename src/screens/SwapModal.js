import { useRoute } from '@react-navigation/native';
import React from 'react';
import ExchangeModalTypes from '../helpers/exchangeModalTypes';
import ExchangeModal from './ExchangeModal';

const SwapModal = (props, ref) => {
  const { params = {} } = useRoute();
  const { inputAsset, outputAsset } = params;

  return (
    <ExchangeModal
      defaultInputAsset={inputAsset}
      defaultOutputAsset={outputAsset}
      ref={ref}
      testID="exchange-modal"
      type={ExchangeModalTypes.swap}
      {...props}
    />
  );
};

export default React.forwardRef(SwapModal);
