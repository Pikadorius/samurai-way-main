import React, {useState} from 'react';
import OnOff2 from "./OnOff2";
import {action} from "@storybook/addon-actions";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Components/OnOff2',
    component: OnOff2
} as ComponentMeta<typeof OnOff2>;

export const OnOff2Controlled = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff2 on={value} onChange={setValue}/>
}

const Template: ComponentStory<typeof OnOff2> = (args) => <OnOff2 {...args} />;

export const OffMode = Template.bind({})
OffMode.args = {
    on: false,
}

export const OnMode = Template.bind({})
OnMode.args = {
    on: true,
}

