import {DragEvent,FC} from 'react'
import classNames from 'classnames'

export interface DragProps{
  onFile:(file:File) => void;
}