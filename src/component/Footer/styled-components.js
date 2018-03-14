import styled from 'styled-components'

import {
  primary,
  subtextOnPrimary,
} from '../../module/colors'

export const FooterContainer = styled.div`
  position: relative;
  background-color: ${primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${subtextOnPrimary};
  min-height: 90px;
  font-size: 0.8em;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 700px) {
    min-height: 40px;
  }  
`

export const FooterDateContainer = styled.div`
`