import {StateType} from '../Components/Accordion/UncontrolledAccordion';

export const accordionReducer = (state: StateType, action: ActionType | any) => {
    switch (action.type) {
        case 'TOGGLE_COLLAPSED': {
            return {...state, collapsed: action.payload}
        }
        default:
            throw new Error('Bad action type')
    }
}


type ActionType = ReturnType<typeof collapseAccordionAC>
export const collapseAccordionAC = (collapsed: boolean) => {
    return {
        type: "TOGGLE_COLLAPSED",
        payload: collapsed
    } as const
}