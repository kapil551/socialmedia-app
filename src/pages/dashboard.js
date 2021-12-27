import { useEffect } from 'react';

import Timeline from '../components/timeline';
import Header from '../components/header';

import useUser from '../hooks/use-user';
import LoggedInUserContext from '../context/logged-in-user';

export default function Dashboard( { user: loggedInUser } ) {

    const { user, setActiveUser } = useUser(loggedInUser?.uid);

    useEffect(() => {
        document.title = 'Dashboard';
      }, []);

    return (

        <LoggedInUserContext.Provider value={{ user, setActiveUser }}>

            <div className="bg-gray-background">
                
                {/* Header */}
                <Header />

                <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">

                    {/* Timeline */}
                    <Timeline />
                    {/* Sidebar */}

                </div>

            </div>

        </LoggedInUserContext.Provider>
    )
}

  