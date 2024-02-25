// URL component
import React, { useState } from 'react'

const URLInput = () => {
    const [ url, setUrl ] = useState( '' )

    const handleInputChange = (event) => {
        setUrl(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // Send to API
        console.log("TODO: Send to API")
    }

    return (
        <div>
            <header class="SITE_HEADER_WRAPPER" tabindex="-1" id="SITE_HEADER_WRAPPER">
                <div id="SITE_HEADER" class="xU8fqS l4oO6c SITE_HEADER wixui-header" tabindex="-1">
                    <section id="comp-l4gn853o" class="comp-l4gn853o CohWsy wixui-column-strip">
                    <div data-testid="colorUnderlay" class="tcElKx i1tH8h"></div>
                    <div data-testid="columns" class="V5AUxf">
                        <div id="comp-l4gn853p" class="comp-l4gn853p YzqVVZ wixui-column-strip__column">
                        <a data-testid="linkElement" href="https://www.nuckstalk.com" target="_self" class="j7pOnl">
                            <img src="https://static.wixstatic.com/media/632f22_79a9ba856ef14ef88fd38405425d76c7~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Small%20Logo%202_edited.jpg" alt="Small Logo 2_edited.jpg" style="width: 110px; height: 110px; object-fit: contain; object-position: center center;" width="110" height="110" />
                        </a>
                        </div>
                    </div>
                    </section>
                </div>
            </header>
            <form onSubmit={handleSubmit}>
                <input 
                  type="text"
                  placeholder="Enter URL"
                  value={url}
                  onChange={handleInputChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default URLInput