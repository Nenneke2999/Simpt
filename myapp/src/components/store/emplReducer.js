const defaultState = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Neena'},
    {id: 3, name: 'Steven'}
]

export const emplReducer = (state = defaultState, action) => {
    console.log(state)
    switch (action.type){
        case 'ADD_EMPL':
            return [...state, {id: Date.now(), name: action.payload}]
        case 'ADD_EMPL_LIST':
            let empl_list = action.payload.map(elem => ({id: elem.id, name: elem.name}))
            return [...state, ...empl_list]
        default:
            return state    
    }
}