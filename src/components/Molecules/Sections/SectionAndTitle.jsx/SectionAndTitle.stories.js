import React from 'react';
import { SectionAndTitle } from './index';
// import { Provider } from 'react-redux';
import { Authenticator } from "@aws-amplify/ui-react";
import {  persistor, store } from "store/store";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Molecules/Sections',
  component: SectionAndTitle,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;


const Template = (props) => {

  return(
    <SectionAndTitle>
      <h1>
        this is storybook for header and footer
      </h1>
    </SectionAndTitle>
  )
}

export const Default = Template.bind({})
