import React from 'react'
import "../css/Home.css"
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-bg'>
        <section className='home'>
            <div className='container'>
                <article>
                    <h4 className='home-h4'>SO YOU WANT TO TRAVEL</h4>
                    <span className='home-span'>SPACE</span>
                    <p className='home-p'>
                        Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
                    </p>
                </article>
                <div className='btn'>
                    <Link to='/destination' style={{textDecoration: 'none', color: 'black'}}>
                        <button className='home-btn'>
                            Explore
                        </button>
                    </Link>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Home