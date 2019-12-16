export default function (state, action)
{
    if (!state)
  
    return {
        msg:"initialized"
    };
    const {type,payload} = action;
    switch (type) {
        case "testRD_yes":
            return
            {   ...state,
                
            };
            break

        default:
            return state;
            break;
    }
}