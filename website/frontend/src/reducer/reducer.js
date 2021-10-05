const reducer = (state, action) => {
  if (action.type === "SIGN_IN_USER") {
    const { userName, email, profileImg } = action.payload;
    return { ...state, authenticated: true, userName, email, profileImg,isDropDownOpen:true };
  }
  if (action.type === "SIGN_OUT_USER") {
    return {
      ...state,
      authenticated: false,
      userName: "",
      email: "",
      profileImg: "",
      isDropDownOpen:false,
      previousVisionTestResults:[],
      previousAuralTestResults:[],
      auralTestResult:{},
      visionTestResult:{}
    };
  }
  if(action.type==="Toggle_DropDown"){
    return { ...state,isDropDownOpen:!state.isDropDownOpen};
  }
  if (action.type === "SELECT_OPTION_IN_AURAL_TEST") {
    const {question,ans}=action.payload;
    const modifiedAuralTest=state.auralTestResult;
    modifiedAuralTest[question]=ans;
    return {...state,auralTestResult:{...modifiedAuralTest}}
  }
  if (action.type === "SELECT_OPTION_IN_VISION_TEST") {
    const {question,ans}=action.payload;
    const modifiedVisionTest=state.visionTestResult;
    modifiedVisionTest[question]=ans;
    return {...state,visionTestResult:{...modifiedVisionTest}}
  }
  if (action.type === "SET_PREVIOUS_TESTS_DATA") {
    const {auralTestResults,visionTestResults}=action.payload;
    return {...state,previousAuralTestResults:auralTestResults,previousVisionTestResults:visionTestResults};
  }
  if (action.type === "CLEAR_CURRENT_TESTS_DATA") {
    return {...state,auralTestResult:{},visionTestResult:{}};
  }
  
  return state;
};

export default reducer;
