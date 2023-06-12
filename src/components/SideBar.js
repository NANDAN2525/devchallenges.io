import React from 'react'
import classes from './SideBar.module.css'
// import devlogo from '../assets/devchallenges.png'

function SideBar(props) {
  return (
    <div className={classes.SideBar}>
  
      {/* <img src={devlogo}  alt='devlogo'/></span> */}
       <p className={classes.heading} >Dev<strong style={{color:'black'}}>challenges.io</strong></p>
       <p className={classes.colortext}>Color</p>
       <p className={classes.typography}>Typography</p>
       <p className={classes.spacestext}>Spaces</p>
       <p className={classes.buttonstext}>Buttons</p>
       <p className={classes.Inputstext}>Inputs</p>
       <p className={classes.Gridtxt}>Grid</p>
    </div>
  )
}


export default SideBar
