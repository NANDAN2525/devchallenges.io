import React from 'react';
import classes from './Buttonscomp.module.css';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


function Buttonscomp() {

  return (
    <div className={classes.Buttonscomp}>
    <p className={classes.buttonstext}>Buttons</p>
    <div className={classes.buttoncompp}>
      <div className={classes.combicomp}>
      <p style={{ marginBottom: '20px' }}>&lt;Button /&gt;</p>
      {/* <Button  style={{ backgroundColor: '#E0E0E0' }}>Default</Button>
       */}
       <Button style={{width: "fit-content"}}  sx={{backgroundColor: '#E0E0E0','&:hover': {  bgcolor: '#AEAEAE',},'&:focus': {  bgcolor: '#AEAEAE',},}}>
      Default
    </Button>
      </div>
    </div>
    <div className={classes.buttoncompp2}>
      <div className={classes.combicomp}>
      <p style={{ marginBottom: '20px' }}>&lt;Button variant=”outline” /&gt;</p>
       <Button variant='outlined' sx={{'&:hover': {  bgcolor: '#bdd7f2',},'&:focus': {  bgcolor: '#bdd7f2',},width: "fit-content"}}>
      Default
    </Button>
      </div>
    </div>
    <div className={classes.buttoncompp3}>
      <div className={classes.combicomp}>
      <p style={{ marginBottom: '20px' }}>&lt;Button variant=”text” /&gt;</p>
       <Button variant='text' sx={{'&:hover': {  bgcolor: '#AEAEAE',},'&:focus': {  bgcolor: '#AEAEAE',},width: "fit-content"}}>
      Default
    </Button>
    </div>
    </div>
    <div className={classes.buttoncompp4}>
      <div className={classes.combicomp}>
      <p style={{ marginBottom: '20px' }}>&lt;Button disableShadow  /&gt;</p>
       <Button variant='contained' disableShadow style={{width: "fit-content"}} >Default</Button>
      </div>
    </div>
    <div className={classes.buttoncompp5}>
      <div>
      <p style={{ marginBottom: '20px' }}>&lt;Button disabled /&gt;</p>
       <Button variant='contained'  disabled style={{width: "fit-content"}} >Default</Button>
      </div>
      <div>
      <p style={{ marginBottom: '20px' }}>&lt;Button  variant='text' disabled /&gt;</p>
       <Button variant='text'  disabled  style={{width: "fit-content"}} >Default</Button>
      </div>
    </div>
    <div className={classes.buttoncompp6}>
      <div>
      <p style={{ marginBottom: '20px' }}>&lt;Button startIcon=”local_grocery_store” /&gt;</p>
      <Button variant="contained" startIcon={<ShoppingCartIcon />} style={{ width: "fit-content" }}>Default</Button>
      </div>
      <div>
      <p style={{ marginBottom: '20px' }}>&lt;Button  endIcon="ShoppingBagIcon" /&gt;</p>
       <Button variant='text' endIcon={<ShoppingBagIcon />}  style={{width: "fit-content"}} >Default</Button>
      </div>
    </div>
    <div className={classes.buttoncompp7}>
      <div>
      <p style={{ marginBottom: '20px' }}>&lt;Button  size=”sm” /&gt;</p>
      <Button size='small' variant="contained" style={{ width: "fit-content" }}>Default</Button>
      </div>
      <div>
      <p style={{ marginBottom: '20px' }}>&lt;Button size=”md” /&gt;</p>
       <Button  size='medium' variant='contained'   style={{width: "fit-content"}} >Default</Button>
      </div>
      <div>
      <p style={{ marginBottom: '20px' }}>&lt;Button size=”lg” /&gt;</p>
      <Button size='large' variant="contained"  style={{ width: "fit-content" }}>Default</Button>
      </div>
    </div>

    <div className={classes.buttoncompp8}>
      <div>
      <p style={{ marginBottom: '20px' }}>&lt;Button color=”default” /&gt;</p>
      <Button sx={{'&:hover': {  bgcolor: '#AEAEAE',},'&:focus': {  bgcolor: '#AEAEAE',},}} style={{ width: "fit-content" }}>Default</Button>
      </div>
      <div>
      <p style={{ marginBottom: '20px' }}>&lt;Button color=”primary” /&gt;</p>
       <Button  color='primary'  sx={{'&:hover': {  bgcolor: '#0039CB',},'&:focus': {  bgcolor: '#0039CB',},}} variant='contained'   style={{width: "fit-content"}} >Default</Button>
      </div>
      <div>
      <p style={{ marginBottom: '20px' }}>&lt;Button color=”secondary” /&gt;</p>
      <Button  color='secondary' sx={{'&:hover': {  bgcolor: '#c165d1',},'&:focus': {  bgcolor: '#c165d1',},}} variant="contained"  style={{ width: "fit-content" }}>Default</Button>
      </div>
      <div>
      <p style={{ marginBottom: '20px' }}>&lt;Button color="error" /&gt;</p>
      <Button color ='error' sx={{'&:hover': {  bgcolor: '#9A0007',},'&:focus': {  bgcolor: '#9A0007',},}} variant="contained"  style={{ width: "fit-content" }}>Default</Button>
      </div>
    </div>
    </div>
  )
}

export default Buttonscomp