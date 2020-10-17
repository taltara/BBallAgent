const initialState = {
    
}

export default function MainReducer(state = initialState, action) {
    switch (action.type) {
        case 'ACTIVE_TAB':
            console.log('REDUCER - ACTIVE_TAB', action.activeTab)
            return {
                ...state,
                activeTab: action.activeTab
            }
        default:
            return state;
    }
}