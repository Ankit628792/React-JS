
const calcNumber = (state=1, action) => {
    switch (action.type) {
        case 'MULTIPLY':
            return state*action.payload
        case 'DIVIDE':
            if(state>1){
                return state/action.payload
            }
            else{
                return state
            }
    
        default:
            return state;
    }
}
export default calcNumber
