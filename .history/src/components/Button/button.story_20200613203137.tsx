import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './yk-button'

const defaultBtn = () => (<Button onClick={action('clicked')}>123</Button>);

console.log(defaultBtn)