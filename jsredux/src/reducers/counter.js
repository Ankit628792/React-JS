const counterNumber = (state= 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state+action.payload
            
        case 'DECREMENT':
            if(state>0){
                return state-action.payload
            }
            else{
                return state;
            }
        default:
            return state
    }
}

export default counterNumber;