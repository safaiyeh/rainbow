import { useRoute } from '@react-navigation/native';
import React from 'react';
import ExchangeModalTypes from '../helpers/exchangeModalTypes';
import { ExchangeNavigatorFactory } from '../navigation/ExchangeModalNavigator';
import useStatusBarManaging from '../navigation/useStatusBarManaging';
import ExchangeModal from './ExchangeModal';

const DepositModal = ({ navigation, ...props }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  android && useStatusBarManaging();
  const { params } = useRoute();
  const defaultInputAsset = params?.defaultInputAsset;
  const underlyingPrice = params?.underlyingPrice;
  return (
    <ExchangeModal
      defaultInputAsset={defaultInputAsset}
      navigation={navigation}
      type={ExchangeModalTypes.deposit}
      typeSpecificParams={{ underlyingPrice }}
      {...props}
    />
  );
};

export default ExchangeNavigatorFactory(DepositModal);
