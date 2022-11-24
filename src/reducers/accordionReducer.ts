export const accordionReducer = (state:boolean, action:ActionType)=>{
    switch (action.type) {
        case 'COLLAPSE_ACCORDI0N': {
            return action.payload;
        }
        default: return state
    }
}


type ActionType=ReturnType<typeof collapseAccordionAC>
export const collapseAccordionAC=(collapsed: boolean)=>{
    return {
        type: "COLLAPSE_ACCORDI0N",
        payload: collapsed
    } as const
}