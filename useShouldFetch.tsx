import React from 'react';

const useShouldFetch = (ref: any) => {
    const [shouldFetch, setShouldFetch] = React.useState<boolean>(false);

    const observer = new IntersectionObserver(([entry]) => {
        if (shouldFetch == false) {
            if (entry.isIntersecting) setShouldFetch(true);
        }
    });

    React.useEffect(() => {
        observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, []);

    return shouldFetch;
}

export default useShouldFetch;
