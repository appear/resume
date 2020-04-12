import styled from 'styled-components'

import Container from './container'
import media from '../shared/media'

export default styled(Container)`
  @media ${media.mo} {
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
    border-radius: 15px;
    margin-bottom: 20px;
    border: 1px solid #fff;
  }
`
