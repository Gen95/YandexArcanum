import { State } from ".."

type Action = {
  type: 'SET_REPO',
  repoName: string
}

export function reducer(state: State = {}, action: Action) {
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