import { Toggle } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Atoms/Toggles',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;


export const Default = {
  args: {
    labelOn: "on",
    labelOff: "off"
  },
};

