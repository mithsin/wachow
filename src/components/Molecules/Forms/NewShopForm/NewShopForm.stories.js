import { NewShopForm } from './index';
import { Provider } from 'react-redux';
import { store } from "store/store";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Form/NewShopForm',
  component: NewShopForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
};

export default meta;

export const Default = {}
