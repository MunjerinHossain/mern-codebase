import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {create} from './api-form.js'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {Link} from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}))

export default function Signup() {
  const classes = useStyles()
  const [values, setValues] = useState({
    name: '',
    contact: '',
    email: '',
    occupation:'',
    error: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const clickSubmit = () => {
    const form = {
      name: values.name || undefined,
      contact: values.contact || undefined,
      email: values.email || undefined,
      occupation: values.occupation || undefined
    }
    create(form).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error})
      } else {
        setValues({ ...values, error: '', open: true})
        console.log('form', data);
      }
    })
  }

    return (<div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Sign Up
          </Typography>
          <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
          <TextField id="contact" type="contact" label="Contact" className={classes.textField} value={values.password} onChange={handleChange('contact')} margin="normal"/>
          <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal"/><br/>
          <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label" color="primary">Occupation</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.occupation}
                onChange={handleChange('occupation')}
              >
                <MenuItem value={'Student'}>Student</MenuItem>
                <MenuItem value={'Job'}>Job</MenuItem>
                <MenuItem value={'HouseWife'}>HouseWife</MenuItem>
                <MenuItem value={'Business'}>Business</MenuItem>
                <MenuItem value={'Retired'}>Retired</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
              </Select>
            </FormControl>
          <br/> {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}</Typography>)
          }
        </CardContent>
        <CardActions>
        <Link to="/certificate">
        <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
          </Link>
        </CardActions>
      </Card>
      <Dialog open={values.open} disableBackdropClick={true}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New account successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/certificate">
            <Button color="primary" autoFocus="autoFocus" variant="contained">
              Sign In
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
    )
}