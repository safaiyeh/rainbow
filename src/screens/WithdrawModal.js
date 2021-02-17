import React from 'react';
import ExchangeModalTypes from '../helpers/exchangeModalTypes';
import useStatusBarManaging from '../navigation/useStatusBarManaging';
import ExchangeModal from './ExchangeModal';

const WithdrawModal = ({ route, navigation, ...props }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  android && useStatusBarManaging();
  const cTokenBalance = route.params?.cTokenBalance;
  const defaultInputAsset = route.params?.defaultInputAsset;
  const underlyingPrice = route.params?.underlyingPrice;
  const supplyBalanceUnderlying = route.params?.supplyBalanceUnderlying;

  const typeSpecificParams = {
    cTokenBalance,
    supplyBalanceUnderlying,
    underlyingPrice,
  };

  return (
    <ExchangeModal
      defaultInputAsset={defaultInputAsset}
      navigation={navigation}
      type={ExchangeModalTypes.withdrawal}
      typeSpecificParams={typeSpecificParams}
      {...props}
    />
  );
};

export default WithdrawModal;
