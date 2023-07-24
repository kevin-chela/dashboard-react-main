import React, { useContext, useEffect,  useReducer, useState } from 'react';
import listClientsData from '../data/clients'

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import reducer from '../reducer/reducer'

//Loading

import ReactLoading from "react-loading";

const url = "https://dashboard.developers.co.ke/list"


const AppContext = React.createContext()

const initialState = {

 clients: listClientsData

}



export function useGlobalContext() {
    return useContext(AppContext);
}

export default function ContextProvider({ children }) {

const [loading, setLoading] = useState(true);

const [state, dispatch] = useReducer(reducer, initialState)


  const fetchData = async () => {
    const response = await fetch(url)
    const clients = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: clients })
  }

  useEffect(() => {

    console.log(url)

    {loading && <div className='text-center, alignItem: center' style={{position: 'absolute', zIndex: '1000', marginLeft: '120px', marginTop: '180px'}}><ReactLoading
          type="spinningBubbles"
          color="#ADD8E6"
          height={100}
          width={50} 
        /></div> }

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

    

