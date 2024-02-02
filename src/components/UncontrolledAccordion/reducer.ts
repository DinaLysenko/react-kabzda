export type StateType={
    collapsed: boolean
}
export type ActionType= {type: string}
export const CHANGE_COLLAPSED='CHANGE-COLLAPSED'
export const reducer=(state: StateType, action: ActionType):StateType=>{
    switch (action.type) {
        case CHANGE_COLLAPSED: {
            return {...state, collapsed: !state.collapsed}
        }
        default: throw new Error()
    }
}