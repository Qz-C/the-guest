import React from 'react';
import Header from '../../components/Header';
import TimeLine from '../../components/TimeLine'


const MyVisits = () => {
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [isFacility, setIsFacility] = React.useState(true)
    return (
        <>
            {isAdmin === true && isFacility === false ? (
                <>
                    <Header isAdmin={true} isFacility={false} />
                    <TimeLine />
                </>
            ) : isAdmin === false && isFacility === false ? (
                <>
                    <Header isAdmin={false} isFacility={false} />
                    <TimeLine />
                </>

            ) : (
                <>
                    <Header isAdmin={false} isFacility={true} />
                    <TimeLine />
                </>
            )}
        </>
    )
}

export default MyVisits;