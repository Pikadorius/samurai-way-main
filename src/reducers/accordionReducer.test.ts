import {accordionReducer, collapseAccordion} from './accordionReducer';
import {StateType} from '../Components/Accordion/UncontrolledAccordion';

let state:StateType;
beforeEach(()=>{
    state={
        collapsed: false
    }
})


test('reducer should change value to true', ()=>{
    const newState = accordionReducer(state, collapseAccordion(!state.collapsed))

    expect(newState.collapsed).toBe(true)
})

test('reducer should throw error because action type is incorrect', ()=>{
    expect(()=>{accordionReducer(state, {type: 'FAKE_TYPE'})}).toThrowError()
})