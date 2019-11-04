import React from 'react';
import { Stack, Image, FontSizes, ImageFit } from 'office-ui-fabric-react';
import { Icon } from './Icon';

interface IconPresenterProps {
  icon: Icon
}

export const IconPresenter: React.FunctionComponent<IconPresenterProps> = (props: IconPresenterProps) => {
  const size = 120;

  return (
    <Stack tokens={{maxWidth:size}}>
      <Stack.Item align="center">
        <Image src={String(process.env.PUBLIC_URL) + props.icon.src} imageFit={ImageFit.contain} width={size} height={size}/>
      </Stack.Item>
      <Stack.Item align="center">
        <span style={{ fontSize: FontSizes.medium, textAlign: 'center' }}>
          {props.icon.name}
        </span>
      </Stack.Item>
    </Stack>
  );
};
