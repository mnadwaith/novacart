import React, { useState, useEffect } from 'react';

import QuickDisplay from './QuickDisplay'

const url = 'http://localhost:9110/catagories'

const QuickSearch = () => {

    const [quickSearch, setQuickSearch] = useState()

    useEffect(() => {
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setQuickSearch(data)
            })
    }, [])

    return (
        <>
            <h3 className='my-3 mx-3'>Quick Search</h3>

            <div class="row mx-3">
                <QuickDisplay searchData={quickSearch} />
            </div>
        </>
    )
}

export default QuickSearch