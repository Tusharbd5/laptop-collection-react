import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <section className='question'>
            <div className='half-width'>
                <h2>How React works?</h2>
                <p><b>Answer: </b>
                    React is a libaray of JavaScript. It mainly works for creating JavaScript code lookalike a html code. Mainly it creates a virtual dom for injecting a html code as a JavaScript code without reloading the page. Thats-why react works faster and more efficient way. It matches the differences between virtual dom and browser dom, the update the differences. For this reason it works very fast.</p>
            </div>
            <div className='half-width'>
                <h2>Differences Between props and state?</h2>
                <p>
                    <b>Answer: </b>
                    Props is the attribute of a component, which we can pass with props in another component and we can work with state inside a component. State is the value of a component. We can send attributes like array, function etc in props but state is the number of rendering dependency of a component.
                </p>
            </div>
        </section>
    );
};

export default Questions;