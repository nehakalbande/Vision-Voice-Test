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
      isDropDownOpen:false
    };
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
  
  return state;
};

export default reducer;
