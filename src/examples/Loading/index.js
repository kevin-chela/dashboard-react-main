import React, { useState } from 'react'

//Loading

import ReactLoading from "react-loading";

const [loading, setLoading] = useState("");

export default function index() {
  return (
    <div>

    {loading && <div className='text-center, alignItem: center' style={{position: 'absolute', zIndex: '1000', marginLeft: '120px', marginTop: '180px'}}><ReactLoading
          type="spinningBubbles"
          color="#ADD8E6"
          height={100}
          width={50} 
        /></div> }

    </div>
  )
}
