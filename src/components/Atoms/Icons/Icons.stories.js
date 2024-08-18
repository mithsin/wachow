import React from 'react';
import { 
  PlusIcon,
  SortDown,
  MinusIcon,
  HomeIcon,
  HeartIcon,
  HeartCirclePlusIcon,
  FileIcon,
  UniversityIcon,
  UserIcon,
  ListAltIcon,
  StarIcon,
  XMarkIcon,
  EllipsisVerticalIcon,
  SearchLocationIcon,
  SearchIcon 
} from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/Atoms/Icons',
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;

const Template = (props) => {
  return(
    <div>
      <div>
        <PlusIcon size="2x"/>
        <div>PlusIcon</div>
      </div>
      <div>
        <SortDown size="2x"/>
        <div>SortDown</div>
      </div>
      <div>
        <MinusIcon size="2x"/>
        <div>MinusIcon</div>
      </div>
      <div>
        <HomeIcon size="2x"/>
        <div>HomeIcon</div>
      </div>
      <div>
        <FileIcon size="2x"/>
        <div>FileIcon</div>
      </div>
      <div>
        <UniversityIcon size="2x"/>
        <div>UniversityIcon</div>
      </div>
      <div>
        <UserIcon size="2x"/>
        <div>UserIcon</div>
      </div>
      <div>
        <ListAltIcon size="2x"/>
        <div>ListAltIcon</div>
      </div>
      <div>
        <StarIcon size="2x"/>
        <div>StarIcon</div>
      </div>
      <div>
        <XMarkIcon size="2x"/>
        <div>XMarkIcon</div>
      </div>
      <div>
        <SearchLocationIcon size="2x"/>
        <div>SearchLocationIcon</div>
      </div>
      <div>
        <SearchIcon size="2x"/>
        <div>SearchIcon</div>
      </div>
      <div>
        <EllipsisVerticalIcon size="2x"/>
        <div>EllipsisVerticalIcon</div>
      </div>
      <div>
        <HeartIcon size="2x"/>
        <div>HeartIcon</div>
      </div>
      <div>
        <HeartCirclePlusIcon size="2x"/>
        <div>HeartCirclePlusIcon</div>
      </div>      
    </div>
  )
}

export const Default = Template.bind({})
