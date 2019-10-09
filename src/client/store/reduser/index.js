
export function reducer(state = {}, action) {
    switch (action.type) {
      case 'SET_REPO':
        return {
            ...state,
            currentRepo: action.repoName 
        }
      default:
        return state
    }
  }