import React from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';
import Accordion from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Accordion stories',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const ClosedAccordion = Template.bind({});

ClosedAccordion.args = {
    titleValue: 'Closed accordion',
    listValue: ['One', 'Two', 'Three'],
    collapsed: true,
    collapse: action('click uncollapse')
};


export const OpenedAccordion = Template.bind({});

    OpenedAccordion.args = {
        titleValue: 'Opened accordion',
        listValue: ['One', 'Two', 'Three'],
        collapsed: false,
        collapse: action('click collapse')
    };