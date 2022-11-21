import React, {useState} from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';
import Accordion from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Accordion stories',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const ClosedAccordion = Template.bind({});

ClosedAccordion.args = {
    titleValue: 'Closed accordion',
    listValue: [
        {id:0, title:'Gold', value:'500'},
        {id:1, title:'Silver', value:'200'},
        {id:2, title:'Bronze', value:'300'},
    ],
    collapsed: true,
    collapse: action('click uncollapse')
};


export const OpenedAccordion = Template.bind({});

OpenedAccordion.args = {
    titleValue: 'Opened accordion',
    listValue: [
        {id:0, title:'Gold', value:'500'},
        {id:1, title:'Silver', value:'200'},
        {id:2, title:'Bronze', value:'300'},
    ],
    collapsed: false,
    collapse: action('click collapse')
};


export const ControlledAccordion = ()=> {
    const [col, setCol]=useState(false)
    return <Accordion titleValue={'Controlled Accordion'} listValue={[
        {id:0, title:'Gold', value:'500'},
        {id:1, title:'Silver', value:'200'},
        {id:2, title:'Bronze', value:'300'},
    ]} collapsed={col} collapse={()=>setCol(!col)}
    clicked={action(`clicked on some cost value`)}/>
}
