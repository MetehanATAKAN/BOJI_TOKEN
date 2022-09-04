const initialState={
  language:''
}
const LanguageSwitch=(state=initialState,action)=>{
    switch (action.type) {
        case "CHANGELANGUAGE":
            return {
               ...state,language:action.payload
            }; 
        default:
            return state
    }
}

export default LanguageSwitch