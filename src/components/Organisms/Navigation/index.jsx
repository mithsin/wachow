import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

export const Navigation = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { shopId } = useParams();

    // console.log('dav, location--->: ', location.pathname)

    React.useEffect(()=> {
        console.log('dav,shopId--->: ', shopId)

        if(shopId){
            console.log('dav,shopId--->: ', shopId)
        }
    },[shopId])

    const previousPage = () => {
        navigate(`/shop/${shopId}`); 
    }

    return(
        <div>
            <button onClick={previousPage}> {'<'} </button>
            {children}
        </div>
    )
}

export default Navigation;