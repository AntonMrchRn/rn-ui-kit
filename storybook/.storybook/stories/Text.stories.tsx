import React from 'react';
import { View } from 'react-native';
import { MyText } from '../../src/components/MyText';
import { TextProps } from '../../../lib/typescript/components/Text';

const MyTextMeta = {
  title: 'Text',
  component: MyText,
  decorators: [
    (Story) => (
      <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyTextMeta;

const title1Props: TextProps = {
  children: 'title1',
  variant: 'title1',
};
export const Title1 = { args: title1Props };

const title2Props: TextProps = {
  children: 'title2',
  variant: 'title2',
};
export const Title2 = { args: title2Props };

const title3Props: TextProps = {
  children: 'title3',
  variant: 'title3',
};
export const Title3 = { args: title3Props };

const bodyMRegularProps: TextProps = {
  children: 'bodyMRegular',
  variant: 'bodyMRegular',
};
export const BodyMRegular = { args: bodyMRegularProps };

const bodyMBoldProps: TextProps = {
  children: 'bodyMBold',
  variant: 'bodyMBold',
};
export const BodyMBold = { args: bodyMBoldProps };

const bodySRegularProps: TextProps = {
  children: 'bodySRegular',
  variant: 'bodySRegular',
};
export const BodySRegular = { args: bodySRegularProps };

const bodySBoldProps: TextProps = {
  children: 'bodySBold',
  variant: 'bodySBold',
};
export const BodySBold = { args: bodySBoldProps };

const captionRegularProps: TextProps = {
  children: 'captionRegular',
  variant: 'captionRegular',
};
export const CaptionRegular = { args: captionRegularProps };

const captionBoldProps: TextProps = {
  children: 'captionBold',
  variant: 'captionBold',
};
export const CaptionBold = { args: captionBoldProps };

const tabBarLabelProps: TextProps = {
  children: 'tabBarLabel',
  variant: 'tabBarLabel',
};
export const TabBarLabel = { args: tabBarLabelProps };
