import { useState, useMemo } from 'react';

const useFilter = (dataArray) => {
    const [query, setQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState(dataArray);

    useMemo(() => {
        const results = dataArray.filter((filterElement) => {
            return (
                filterElement.title
                    .toLowerCase()
                    .includes(query.toLowerCase()) ||
                filterElement.description
                    .toLowerCase()
                    .includes(query.toLowerCase())
            );
        });

        setFilteredResults(results);
    }, [dataArray, query]);

    return { query, filteredResults, setQuery };
};

export default useFilter;
