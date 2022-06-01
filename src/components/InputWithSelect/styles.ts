import styled from 'styled-components'
import { WHITE, BLACK } from '../../base/colours'
import { mediaQueries } from '../../base/breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mediaQueries('ts')`
    flex-direction: row;
  `}
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries('ts')`
    flex-direction: row;
  `}
`

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 5px;

  ${mediaQueries('ts')`
    margin-bottom: 0px;
  `}
`

export const Select = styled.select`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right #fff;
  appearance: none;
  background-position-x: calc(100% - 15px);
  background-size: 10px;

  ${mediaQueries('ts')`
  width: 200px;
  margin-bottom: 0px;
`}
`
