import { useEffect } from 'react';

export default function Dashboard() {

    useEffect(() => {
        document.title = 'Dashboard';
      }, []);

    return (

        <div className="bg-gray-background">
            
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">

                {/* Timeline */}
                {/* Sidebar */}

                I am a Dashboard

            </div>

      </div>
    )
}