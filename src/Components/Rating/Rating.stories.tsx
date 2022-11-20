import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Rating, {RatingValueType} from './Rating';
import {action} from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Rating',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const NoRating = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoRating.args = {
    rating: 0,
    changeRating: action('clicked stars')
};

export const Rating1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating1.args = {
    rating: 1,
    changeRating: action('clicked stars')
};

export const Rating2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating2.args = {
    rating: 2,
    changeRating: action('clicked stars')
};

export const Rating3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating3.args = {
    rating: 3,
    changeRating: action('clicked stars')
};

export const Rating4 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating4.args = {
    rating: 4,
    changeRating: action('clicked stars')
};

export const Rating5 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating5.args = {
    rating: 5,
    changeRating: action('clicked stars')
};


const Template2: ComponentStory<typeof Rating> = (args) => {
    const [rate, setRate]=useState<RatingValueType>(1)
    return <Rating rating={rate} changeRating={setRate} />
};

export const ContrRating = Template2.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ContrRating.args = {
};
