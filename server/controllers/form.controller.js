import Form from '../models/form.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'

const create = async (req, res) => {
  const form = new Form(req.body)
  try {
    await form.save()
    return res.status(200).json({
      message: "Successfully signed up!"
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

/**
 * Load form and append to req.
 */
const formByID = async (req, res, next, id) => {
  try {
    let form = await Form.findById(id)
    if (!form)
      return res.status('400').json({
        error: "form not found"
      })
    req.form = form
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve form"
    })
  }
}

const read = (req, res) => {
  return res.json(req.form)
}

const list = async (req, res) => {
  try {
    let forms = await Form.find().select('name email updated created')
    res.json(forms)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const update = async (req, res) => {
  try {
    let form = req.form
    form = extend(form, req.body)
    form.updated = Date.now()
    await form.save()
    form.hashed_password = undefined
    form.salt = undefined
    res.json(form)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const remove = async (req, res) => {
  try {
    let form = req.form
    let deletedForm = await form.remove()
    deletedForm.hashed_password = undefined
    deletedForm.salt = undefined
    res.json(deletedForm)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

export default {
  create,
  formByID,
  read,
  list,
  remove,
  update
}
