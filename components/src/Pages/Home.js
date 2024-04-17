import React from 'react';
import { HomePage, HomeWrapper } from './HomeStyled';
import homeData from './HomeData';
import HomeCard from './HomeCard';

const Home = () => {
    
  return (
    <>
     <HomePage>
        <div className='container'>
            <header id='header'>
                <h1><span>React Components</span></h1>
                <a href='https://github.com/kyrios12'>
                    github.com/kyrios12
                </a>
            </header>
            <HomeWrapper>
                {
                 homeData.map((currValue)=>{
                    return(
                        <HomeCard key = {currValue.id} {...currValue} title = {currValue.title}>
                            
                        </HomeCard>
                    )
                 })
                }
            </HomeWrapper>
            <footer id='footer'>
              <p>Built by | <a href='https://github.com/kyrios12'>Abdul Azeez</a></p>
            </footer>
        </div>
     </HomePage>
    </>
  )
}

export default Home