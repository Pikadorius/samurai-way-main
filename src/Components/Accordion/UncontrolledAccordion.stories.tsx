import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import UncontrolledAccordion from './UncontrolledAccordion';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/UncontrolledAccordion stories',
    component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;



//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;

export const ClosedUncAccordion = Template.bind({});

ClosedUncAccordion.args = {
    titleValue: 'Closed accordion',
    listValue:[]
};


export const OpenedUncAccordion = Template.bind({});

OpenedUncAccordion.args = {
    titleValue: 'Opened accordion',
    listValue: ['One', 'Two', 'Three']
};