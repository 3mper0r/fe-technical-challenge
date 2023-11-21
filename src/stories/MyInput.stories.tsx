
import { Meta } from '@storybook/react'
import MyInput from './MyInput';

export default {
  title: 'Component/MyInput',
  component: MyInput,
} satisfies Meta<typeof MyInput>


// export const Default = () => <MyInput className={}/>;

export const OnHover = () => <MyInput className="onHover" />;

export const OnError = () => <MyInput className="onError" />;

export const OnFocus = () => <MyInput className="onFocus" />;

export const OnErrorAndFocus = () => <MyInput className="onErrorAndFocus"/>
export const Default = {}