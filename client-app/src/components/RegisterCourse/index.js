import React, { Component } from 'react'

import api from '../../services/api'

export default class RegisterCourse extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      language: '',
      price: '',
      teacher: ''
    }
  }

  keepInputTitle = e => {
    this.setState({ title: e.target.value })
  }
  keepInputLanguage = e => {
    this.setState({ language: e.target.value })
  }
  keepInputPrice = e => {
    this.setState({ price: e.target.value })
  }
  keepInputTeacher = e => {
    this.setState({ teacher: e.target.value })
  }

  createCourse = e => {
    e.preventDefault()
    api.createCourse(
      this.state.title,
      this.state.language,
      this.state.price,
      this.state.teacher
    )
    this.setState({ title: '' })
    this.setState({ language: '' })
    this.setState({ price: '' })
    this.setState({ teacher: '' })
  }

  render () {
    return (
      <div className='jumbotron'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4' />
            <div className='col-sm-4 text-center'>
              <form className='form-signin' onSubmit={this.createCourse}>
                <h1 className='h3 mb-3 font-weight-normal'>Course Register</h1>
                <input
                  type='text'
                  id='inputTitle'
                  className='form-control'
                  placeholder='Title'
                  required=''
                  autoFocus=''
                  onChange={this.keepInputTitle}
                  value={this.state.title}
                />
                <input
                  type='text'
                  id='inputLanguage'
                  className='form-control'
                  placeholder='Language'
                  required=''
                  onChange={this.keepInputLanguage}
                  value={this.state.language}
                />
                <input
                  type='text'
                  id='inputPrice'
                  className='form-control'
                  placeholder='Price'
                  required=''
                  onChange={this.keepInputPrice}
                  value={this.state.price}
                />
                <input
                  type='text'
                  id='inputTeacher'
                  className='form-control'
                  placeholder='Teacher'
                  required=''
                  onChange={this.keepInputTeacher}
                  value={this.state.teacher}
                />
                <button className='btn btn-lg btn-primary btn-block'>
                  Regist the course
                </button>
              </form>
            </div>
            <div className='col-sm-4' />
          </div>
        </div>
      </div>
    )
  }
}
