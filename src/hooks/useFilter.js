import React from 'react';
import { useState } from 'react';

const useFilter = (dataArray) => {
    const [ query, setQuery ] = useState('')
    const [ filteredResults, setFilteredResults ] = useState(dataArray)
    
        React.useMemo( () => {        
                const results = dataArray.filter( filterElement => {
                return filterElement.name.toLowerCase().includes(query.toLocaleLowerCase());
            })

            setFilteredResults(results)
    
        }, [dataArray, query])

    return {query, filteredResults, setQuery}
}

export default useFilter;