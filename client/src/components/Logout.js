import React, { useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
const Logout = () => {

    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        .then((res) => {
            if (res.status === 200) {
                dispatch({type:'USER',payload:false})
                navigate('/login', { replace: true });
            } else {
                const error = new Error(res.statusText);
                throw error;
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }, [navigate]);

    return (
        // You can render something here if needed
        <div>Logging out...</div>
    );
};

export default Logout;
