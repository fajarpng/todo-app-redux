const initialState = {
    value: 0,
    show : false,
    list: []
  }
  
const counter = (state=initialState, action) => {
  switch(action.type){
    case 'INCREASE': {
      return {
        ...initialState,
        value: state.value+1
      }
    }
    case 'DECREASE': {
      return {
        ...state,
        value: state.value-1
      }
    }
    case 'RESET': {
      return {
        ...state,
        value: 0
      }
    }
    case 'MODAL': {
      return {
        ...state,
        show: !state.show
      }
    }
    case 'ADD': {
      const list = state.list
      list.push(action.task)
      return {
        ...state,
        list
      }
    }
    case 'DELETE': {
      const list = state.list
      list.splice(action.i, 1)
      return {
        ...state,
        list
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}
  
  export default counter