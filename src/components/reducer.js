 export const initialState={
  basket:[],
  amount:0,
  user:null
 };


 const reducer=(state,action)=>{

    switch(action.type){
      case "ADD_TO_BASKET":
        return{
          ...state,
          basket:[...state.basket,action.item],
          amount:state.amount+1,
        };
        

      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) =>basketItem.id === action.item.id );
        
          let newBasket = [...state.basket];

          if (index>=0 ){
            newBasket.splice(index,1)

          } else{
            console.warn(
              `cant remove product(id:${action.id}) as its not in the basket`
            )
          }

          return{
            ...state,
            basket:newBasket,
            amount:state.amount-1
          }


        //deletes all items with the same id

        // return{ ...state,basket:state.basket.filter((item)=>{
        //   return item.id !==action.item.id
        // })}


        case "SET_USER":
          return{
            ...state,
            user:action.user
          }

        case "EMPTY_BASKET":
          return{
            ...state,
            amount:0,
            basket:[]
          }

        default:
          return state;
    }
 }
 
 export default reducer;