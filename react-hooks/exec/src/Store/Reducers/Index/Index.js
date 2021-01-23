export default function Reducer(state, action) {
    switch (action.type) {
        case "add2ToNumber":
            return { ...state, number: state.number + 2 }
        case "multi7ToNumber":
            return { ...state, number: state.number * 7 }
        case "split25ToNumber":
            return { ...state, number: state.number / 25 }
        case "convertToInteger":
            return { ...state, number: parseInt(state.number) }
        case "addValue":
            return { ...state, number: state.number + action.value }
        case "login":
            return { ...state, user: { name: action.payload } }
        default:
            return { ...state }
    }
}