const initialState = { token: null }

function connexion(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'CONNEXION':
            nextState = {
                ...state,
                token : action.value
            }
            return nextState || state

        case 'DECONNEXION':{
            nextState = {
                ...state,
                token : action.value
            }
            return nextState || state
        }

        default:
            return state
    }
}

export default connexion