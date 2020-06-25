import React, { Component } from 'react'
import Axios from 'axios'
import Company from '../../../api/company'
import RemoveMask from '../../../validations/RemoveMask';
import { makeStyles, TextField, Paper, Grid, InputLabel, Box, Button } from '@material-ui/core';


const apiCompany = new Company()
const rmvMask = new RemoveMask()


export class companyAddress extends Component {
    render() {
        const useStyles = makeStyles((theme) => ({
            root: {
              flexGrow: 1,
              '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
              }
            },
            paper: {
              padding: theme.spacing(2),
              margin: 'auto',
              marginTop: 100,
              maxWidth: 800,
              minHeight: 500
            },
          }));

          const classes = useStyles()

        return (
            <div>
                
            </div>
        )
    }
}

export default companyAddress

