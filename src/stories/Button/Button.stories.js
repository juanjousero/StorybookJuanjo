import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const Primary = {
  args: {
    label: 'Primary Button',
    backgroundColor: 'rgba(68, 68, 68, 1)',
    color: 'rgba(243, 243, 243, 1)',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    color: 'rgba(68, 68, 68, 1)',
    backgroundColor: 'rgba(243, 243, 243, 1)',
    border: '1px solid rgba(68, 68, 68, 1)'
  },
};

export const Full = {
  args: {
    label: 'Full Button',
    size: 'full',
  },
};
