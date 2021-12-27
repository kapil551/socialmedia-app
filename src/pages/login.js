import { Link, useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { useContext, useState, useEffect } from 'react';

export default function Login() {
    
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === ''; // validation

    useEffect(
        () => {
            document.title = 'Login - Instagram';
        }, []
    );

    return (
        <div>
            I am a login page
        </div>
    )
}