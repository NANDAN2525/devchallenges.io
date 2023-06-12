import React from 'react'
import classes from './Footer.module.css'

function Footer() {
  return (
    <div className={classes.Footer}>
      <p className={classes.iconstext}>Icons: https://material.io/resources/icons/?style=round</p>
      <p className={classes.createdtext}>created by N.Nanda - devChallenges.io</p>
    </div>
  )
}

export default Footer