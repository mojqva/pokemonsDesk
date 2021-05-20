import { navigate } from 'hookrouter'
import React from 'react'
import { LinkEnum } from '../../routes'

const NotFound = () => {
    return (
        <div>
            <div> 404 Not Found </div>
            <button 
                type="button"
                onClick = {() => navigate(LinkEnum.HOME)}
            >
                Return
            </button>
        </div>
    )
}

export default NotFound