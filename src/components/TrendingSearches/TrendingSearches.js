import React, { useState, useEffect } from 'react'
import getTrendingTerms from 'services/getTrendingTerms'
import Category from 'components/Category'

export default function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(function () {
        const controller = new AbortController()
        getTrendingTerms({ signal: controller.signal })
            .then(setTrends)
            .catch(err => console.log(err))

        return () => controller.abort()
    }, [])

    return <Category name='Trends' options={trends} />
}