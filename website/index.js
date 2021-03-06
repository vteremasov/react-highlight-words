/**
 * This is the entray point to the documentation/demo/test harness site for react-highlight-words.
 * This target is published to the root of the `gh-pages` branch.
 * @flow
 */
import Application from './Application'
import React from 'react'
import { render } from 'react-dom'
import './index.css'

render(
  <Application/>,
  document.getElementById('root')
)
