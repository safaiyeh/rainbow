import React from 'react';
import styled from 'styled-components';
import { ColumnWithMargins } from '../../layout';
import SwapDetailsContractRow from './SwapDetailsContractRow';
import SwapDetailsPriceRow from './SwapDetailsPriceRow';
import SwapDetailsRow, {
  SwapDetailsRowHeight,
  SwapDetailsValue,
} from './SwapDetailsRow';
import SwapDetailsUniswapRow from './SwapDetailsUniswapRow';
import { useSwapCurrencies } from '@rainbow-me/hooks';
import { padding } from '@rainbow-me/styles';
import { isETH } from '@rainbow-me/utils';

const contentRowMargin = 24;
export const SwapDetailsContentMinHeight =
  (SwapDetailsRowHeight + contentRowMargin) * 4;

const Container = styled(ColumnWithMargins).attrs({
  flex: 1,
  margin: contentRowMargin,
})`
  ${({ isHighPriceImpact }) => padding(isHighPriceImpact ? 24 : 30, 19, 30)};
`;

export default function SwapDetailsContent({
  isHighPriceImpact,
  priceImpactColor,
  priceImpactPercentDisplay,
  onCopySwapDetailsText,
  tradeDetails,
  ...props
}) {
  const { inputCurrency, outputCurrency } = useSwapCurrencies();

  return (
    <Container
      isHighPriceImpact={isHighPriceImpact}
      testID="swap-details-state"
      {...props}
    >
      <SwapDetailsRow label="Price impact">
        <SwapDetailsValue color={priceImpactColor} letterSpacing="roundedTight">
          {`${priceImpactPercentDisplay}%`}
        </SwapDetailsValue>
      </SwapDetailsRow>
      <SwapDetailsPriceRow tradeDetails={tradeDetails} />
      {!isETH(inputCurrency?.address) && (
        <SwapDetailsContractRow
          asset={inputCurrency}
          onCopySwapDetailsText={onCopySwapDetailsText}
        />
      )}
      {!isETH(outputCurrency?.address) && (
        <SwapDetailsContractRow
          asset={outputCurrency}
          onCopySwapDetailsText={onCopySwapDetailsText}
        />
      )}
      <SwapDetailsUniswapRow />
    </Container>
  );
}
