import React, { useContext, useEffect,  useReducer } from 'react';
import listOrderData from '../data/order'

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import reducer from '../reducer/reducer'

const url = "https://kevin-chela.github.io/manhattan_desert_api/list_orders.json"

const AppContext = React.createContext()

const initialState = {
  listOrders: listOrderData,

}

export function useGlobalContext() {
    return useContext(AppContext);
}

export default function ContextProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState)


  const fetchData = async () => {
    const response = await fetch(url)
    const listorders = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: listorders })
  }

  // const addEmployee = (item) =>{
  //   dispatch({
  //       type: 'ADD_EMPLOYEE',
  //       payload: item
  //   });
  // }

  // const assignTask = (item) =>{
  //     dispatch({
  //         type: 'ASSIGN_TASK',
  //         payload: item
  //     });
  // }
  // const remove = (id) => {
  //   dispatch({ type: 'REMOVE', payload: id })
  // }

  // const fetchData1 = async () => {
  //   const response = await fetch(url)
  //   const task = await response.json()
  //   dispatch({ type: 'DISPLAY_ITEM', payload: task })
  // }
 
  useEffect(() => {

    fetchData()

  }, [])

  return (
    <AppContext.Provider
      value={{

        ...state,
       
      }}
    >
      {children}
    </AppContext.Provider>
  )
  }

// Typechecking props of the SoftAlert
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

    

