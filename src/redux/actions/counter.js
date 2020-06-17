export const increaseCounter = () => {
  return {
    type: 'INCREASE'
  }
}

export const decreaseCounter = () => {
  return {
    type: 'DECREASE'
  }
}

export const resetCounter = () => {
  return {
    type: 'RESET'
  }
}

export const addTask = ( task ) => {
  return {
    type: 'ADD',
    task
  }
}

export const deleteTask = ( i ) => {
  return {
    type: 'DELETE',
    i
  }
}

export const showHide = () => {
  return {
    type: 'MODAL'
  }
}