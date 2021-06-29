export const LangReducer = (state = "en", action) => {
    switch (action.type) {
        case "SET_LANG":
            return ["en", "mm"].includes(action.lang) ? action.lang : state;
        default:
            return state;
    }
}; // website language -> supports "en", "mm".

export const ThemeReducer = (state = "dark", action) => {
    switch (action.type) {
        case "SET_THEME":
            return ["dark", "light"].includes(action.theme)
                ? action.theme
                : state;
        default:
            return state;
    }
}; // website appearence -> supports "light", "dark"
