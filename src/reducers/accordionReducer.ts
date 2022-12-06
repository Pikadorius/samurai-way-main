import {StateType} from '../Components/Accordion/UncontrolledAccordion';

export const accordionReducer = (state: StateType, action: ActionType | any):StateType => {
    switch (action.type) {
        case 'TOGGLE_COLLAPSED': {
            return {...state, collapsed: action.payload.collapsed}
        }
        default:
            return state;
    }
}


type ActionType = ReturnType<typeof collapseAccordion>
export const collapseAccordion = (collapsed: boolean) => {
    return {
        type: "TOGGLE_COLLAPSED",
        payload: {
            collapsed
        }
    } as const
}