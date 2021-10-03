/* eslint-disable @typescript-eslint/naming-convention */
import { IonButton, IonicModule } from '@ionic/angular';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

export default {
  title: 'Ionic/Button',
  component: IonButton,
  argTypes: {
    fill: {
      options: [ 'solid', 'outline', 'clear' ],
      control: { type: 'inline-radio' }
    },
    color: {
      options: [ 'primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark' ],
      control: { type: 'select' }
    },
    mode: {
      options: [ 'ios', 'md' ],
      control: { type: 'inline-radio' }
    },
    expand: {
      options: [ 'undefine', 'block', 'full' ],
      control: { type: 'inline-radio' }
    },
    shape: {
      options: [ 'round' ],
      control: { type: 'inline-check' }
    },
    size: {
      options: [ 'default', 'large', 'small' ],
      control: { type: 'inline-radio' }
    },

  },
  decorators: [
    moduleMetadata({
      imports: [IonicModule.forRoot()],
    }),
  ],
} as Meta;


const Template: Story<IonButton> = (args: IonButton) => ({
  props: args,
  template: `<ion-button appButton>{{label}}</ion-button>`,
});

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  label: 'Button',
  fill: 'solid',
  color: 'primary',
  mode: 'md',
  expand: 'undefine',
  shape: 'undefine',
  size: 'default',
};


const Template2: Story<IonButton> = (args: IonButton) => ({
  props: args,
  template: `<ion-button>你好</ion-button><ion-button>你好你好</ion-button>`,
});

export const Two = Template2.bind({});
Two.args = {

};
