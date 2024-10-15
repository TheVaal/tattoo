import './App.css';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Gallery = ({ handler })=> {

    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };
    return (
        <>
            <Carousel responsive={responsive}>

                <div className='gallery-item'>
                    <img src={require('./img/gallery/color.PNG')} alt="color tattoo" onClick={()=>handler(require('./img/gallery/color.PNG'))}></img>
                    <p>COLOR TATTOO</p>
                </div>

                <div className='gallery-item'>
                    <img src={require('./img/gallery/realism.PNG')} alt="realism tattoo" onClick={()=>handler(require('./img/gallery/realism.PNG'))}></img>
                    <p>REALISM TATTOO</p>
                </div>
    
            
            <div className='gallery-item'>
                <img src={require('./img/gallery/trashpolka.PNG')} alt="realism tattoo" onClick={()=>handler(require('./img/gallery/trashpolka.PNG'))}></img>
                <p>TRASH POLKA TATTOO</p>
            </div>
            
            
            <div className='gallery-item'>
                <img src={require('./img/gallery/blackngrey.PNG')} alt="color tattoo" onClick={()=>handler(require('./img/gallery/blackngrey.PNG'))}></img>
                <p>BLACK'n'GREY TATTOO</p>
            </div>

            <div className='gallery-item'>
                <img src={require('./img/gallery/watercolor2.PNG')} alt="realism tattoo" onClick={()=>handler(require('./img/gallery/watercolor2.PNG'))}></img>
                <p>WATERCOLOR TATTOO</p>
            </div>
             
            <div className='gallery-item'>
                <img src={require('./img/gallery/japanese.PNG')} alt="japanese tattoo" onClick={()=>handler(require('./img/gallery/japanese.PNG'))}></img>
                <p>JAPANESE TATTOO</p>
            </div>              
            <div className='gallery-item'>
                <img src={require('./img/gallery/neotrad.PNG')} alt="color tattoo" onClick={()=>handler(require('./img/gallery/neotrad.PNG'))}></img>
                <p>NEO-TRADITIONAL TATTOO</p>
            </div>
            <div className='gallery-item'>
                <img src={require('./img/gallery/bgrealism.PNG')} alt="realism tattoo" onClick={()=>handler(require('./img/gallery/bgrealism.PNG'))}></img>
                <p>BLACK AND GREY REALISM</p>
            </div>
            <div className='gallery-item'>
                <img src={require('./img/gallery/realisticblackandwhitetattoo.PNG')} alt="REALISTIC BLACK AND WHITE TATTOO" onClick={()=>handler(require('./img/gallery/realisticblackandwhitetattoo.PNG'))}></img>
                <p>REALISTIC BLACK AND WHITE TATTOO</p>
            </div>
            <div className='gallery-item'>
                <img src={require('./img/gallery/japanesetrad.PNG')} alt="JAPANESE TRADITIONAL tattoo" onClick={()=>handler(require('./img/gallery/japanesetrad.PNG'))}></img>
                <p>JAPANESE TRADITIONAL TATTOO</p>
            </div>
            <div className='gallery-item'>
                <img src={require('./img/gallery/neotrad2.PNG')} alt="realism tattoo" onClick={()=>handler(require('./img/gallery/neotrad2.PNG'))}></img>
                <p>NEO-TRADITIONAL TATTOO</p>
            </div>
            
            </Carousel>
        </>
    )
}

export default Gallery;