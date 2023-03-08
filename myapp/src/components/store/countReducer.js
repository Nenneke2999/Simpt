const defaultState = 0

export const countReducer = (state = defaultState, action) => {
    switch (action.type){
        case 'INCR':
            return state + 1
        case 'DECR':
            return state - 1
        default:
            return state
    }
}