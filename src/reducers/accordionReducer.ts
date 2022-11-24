export const accordionReducer = (state:boolean, action:ActionType)=>{
    switch (action.type) {
        case 'TOGGLE_COLLAPSED': {
            return action.payload.collapsed;
        }
        default: return state
    }
}


type ActionType=ReturnType<typeof collapseAccordionAC>
export const collapseAccordionAC=(collapsed: boolean)=>{
    return {
        type: "TOGGLE_COLLAPSED",
        payload: {
            collapsed
        }
    } as const
}