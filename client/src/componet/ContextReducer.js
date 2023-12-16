import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
   switch(action.type){
    case "ADD":
        
        return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
    
    case "REMOVE":
        let newarr=[...state];
        newarr.splice(action.index,1);
        return newarr;
        
    case "UPDATE":
        let arr =[...state];
        arr.find((food,index)=>{
            if(food.id===action.id){
                arr[index]={...food,qty:parseInt(action.qty)+food.qty,price:action.price+food.price}
            }
            return arr;
        })
        return arr;
      
    default:
        console.log("error in reducer");
   }
}

export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,[])
// state = in this our actual data is present 
// dispatch = it is used to send the data to the state
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>

    )
}

export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);

// why we create there 2 context (dispatch or cart context)
// one context we are created for taking data to the context and another context we are created for sending data from context to another pages.

// here cartStateContext is used to send state data to another pages 
// just simply call that method 

// CartDispatchContext is used to receive data from another pages so that, that data will be used by another pages.


// reducer : reducer alwayes used return.
