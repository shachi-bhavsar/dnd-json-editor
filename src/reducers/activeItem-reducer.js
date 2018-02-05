export default function (state={}, action) {
    switch (action.type){
        case 'Item_selected' :
            return action.payload;
        default :
            return state;
    }

}