import React from "react"

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch(/api/vans)` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 * 3. You may get an error saying "console.groupCollapsed is not
 *    a function". You can ignore it for now.
 */

export default function Vans() {
    const [vans, setVans] = React.useState([])

    React.useEffect(function() {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    const vanElements = vans.map(function(van) {
        return <div key={van.id} className="van-item">
                    <img src={van.imageUrl}/>
                    <h4>{van.name}</h4>
                    <p>${van.price}/day</p>
                    <button className={van.type}>{van.type}</button>
                </div>
    })

    return (
        <>
        <div className="vans-header">
            <h2>Explore our van options</h2>
            <div className="filters-div">
                <button>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
                <h3>Clear filters</h3>
            </div>
        </div>
        <div className="van-list">
            {vanElements}
        </div>
        </>
    )
}