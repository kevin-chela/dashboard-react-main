import React, { useContext, useEffect,  useReducer } from 'react';
import listOrderData from '../data/order'

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import reducer from '../reducer/reducer'

const url = "https://dashboard.developers.co.ke/list"

const url1 = "https://dashboard.developers.co.ke/register"


const AppContext = React.createContext()

const initialState = {

  clients: listOrderData,

}

export function useGlobalContext() {
    return useContext(AppContext);
}

export default function ContextProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState)


  const fetchData = async () => {
    const response = await fetch(url)
    const clients = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: clients })
  }

  useEffect(() => {

    console.log(url)

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

    

