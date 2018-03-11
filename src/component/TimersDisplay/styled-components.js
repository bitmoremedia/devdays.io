import React from 'react'
import styled from 'styled-components'

import {
  primary,
  textOnPrimary,
  subtextOnPrimary,
  subtextOnPrimaryAlt,
  secondary,
} from '../../module/colors'

const maxContentWidth = '1200px'

export const OutOfTimeContainer = styled.div`
  color: ${textOnPrimary};
  font-size: 2em;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  text-align: center;
  background: ${secondary};
`

export const HeaderContainer = styled.div`
  background-color: ${primary};
  display: flex;
  justify-content: center;
`

export const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${maxContentWidth};
`

export const TitleContainer = styled.div`
  min-height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const Title = styled.h1`
  font-size: 3em;
  color: ${textOnPrimary};
  text-transform: uppercase;
`

export const Date = styled.h2`
  font-size: 1.3em;
  color: ${subtextOnPrimary};
  padding-top: 10px;
`

export const HeaderIconContainer = styled.a`
  margin: 20px;
  cursor: pointer;
`

const HeaderIcon = styled.svg`
  transition: fill 0.25s;
  width: ${props => (props.smaller ? '41px;' : '48px;')};
  height: ${props => (props.smaller ? '41px;' : '48px;')};
  fill: ${subtextOnPrimaryAlt};
  ${HeaderIconContainer}:hover & {
    fill: ${subtextOnPrimary};
  }
`

export const HomeIcon = () => (
  <HeaderIcon viewBox="0 0 60 60" smaller>
    <path
      d="M30,0c-0.553,0-1,0.447-1,1v13.292c0,0.553,0.447,1,1,1s1-0.447,1-1V2.018C45.979,2.546,58,14.896,58,30
c0,15.439-12.561,28-28,28S2,45.439,2,30c0-7.46,2.9-14.479,8.166-19.764c0.391-0.392,0.389-1.024-0.002-1.414
C9.772,8.434,9.14,8.434,8.75,8.824C3.107,14.486,0,22.007,0,30c0,16.542,13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z"
    />
    <path
      d="M28.555,33.532C29.223,34.451,30.301,35,31.438,35c0.95,0,1.845-0.371,2.518-1.044c0.737-0.737,1.114-1.756,1.033-2.797
s-0.612-1.99-1.459-2.606l-12.944-9.363c-0.396-0.286-0.945-0.242-1.293,0.104c-0.348,0.348-0.391,0.896-0.104,1.293L28.555,33.532
z"
    />
  </HeaderIcon>
)

export const SettingsIcon = () => (
  <HeaderIcon viewBox="0 0 60 60">
    <path
      d="M53.188,23.518l-3.128-0.602c-1.842-0.354-3.351-1.607-4.035-3.354c-0.686-1.745-0.433-3.69,0.677-5.203l1.964-2.679
c0.292-0.397,0.249-0.949-0.1-1.298l-4.242-4.242c-0.339-0.339-0.871-0.39-1.268-0.121l-2.638,1.786
c-1.552,1.052-3.505,1.231-5.224,0.482c-1.719-0.75-2.916-2.305-3.201-4.158l-0.505-3.282C31.413,0.36,30.994,0,30.5,0h-6
c-0.479,0-0.892,0.34-0.982,0.812l-0.777,4.04c-0.347,1.801-1.565,3.296-3.26,3.997c-1.694,0.704-3.613,0.507-5.131-0.521
L10.944,6.02c-0.397-0.268-0.929-0.218-1.268,0.121l-4.243,4.242c-0.349,0.349-0.391,0.9-0.1,1.299l1.964,2.679
c1.109,1.512,1.362,3.457,0.677,5.203c-0.686,1.745-2.194,2.999-4.036,3.353l-3.128,0.602C0.34,23.608,0,24.021,0,24.5v6
c0,0.493,0.36,0.913,0.848,0.988l3.283,0.505c1.853,0.285,3.408,1.481,4.157,3.2c0.75,1.72,0.57,3.673-0.482,5.226L6.02,43.057
c-0.269,0.396-0.218,0.929,0.121,1.268l4.242,4.242c0.349,0.348,0.899,0.393,1.298,0.1l2.679-1.964
c1.512-1.109,3.457-1.365,5.202-0.677c1.746,0.685,3,2.193,3.354,4.035l0.602,3.128C23.608,53.66,24.021,54,24.5,54h6
c0.494,0,0.914-0.36,0.988-0.848l0.355-2.309c0.292-1.896,1.523-3.465,3.294-4.198c1.771-0.73,3.751-0.495,5.297,0.64l1.884,1.381
c0.399,0.293,0.95,0.248,1.298-0.1l4.242-4.242c0.339-0.339,0.39-0.871,0.121-1.268l-1.786-2.638
c-1.052-1.553-1.232-3.506-0.482-5.225c0.75-1.72,2.304-2.916,4.158-3.201l3.282-0.505C53.64,31.413,54,30.993,54,30.5v-6
C54,24.021,53.66,23.608,53.188,23.518z M52,29.642l-2.435,0.375c-2.535,0.39-4.661,2.026-5.687,4.378
c-1.025,2.351-0.779,5.022,0.66,7.146l1.323,1.954l-3.052,3.052l-1.192-0.874c-2.115-1.551-4.822-1.875-7.246-0.874
c-2.422,1.004-4.107,3.149-4.505,5.741L29.642,52h-4.316l-0.446-2.316c-0.484-2.52-2.2-4.583-4.588-5.521
c-2.385-0.937-5.047-0.589-7.115,0.926l-1.987,1.457l-3.052-3.052l1.324-1.954c1.438-2.123,1.685-4.795,0.659-7.146
c-1.026-2.351-3.152-3.987-5.687-4.377L2,29.642v-4.315l2.317-0.445c2.519-0.484,4.582-2.199,5.52-4.587
c0.937-2.388,0.591-5.048-0.926-7.117L7.454,11.19l3.052-3.052l2.723,1.845c2.077,1.407,4.701,1.675,7.018,0.713
c2.317-0.96,3.984-3.004,4.458-5.468L25.326,2h4.316l0.375,2.435c0.39,2.535,2.027,4.661,4.378,5.687
c2.351,1.026,5.022,0.778,7.146-0.659l1.954-1.323l3.052,3.052l-1.457,1.986c-1.517,2.068-1.863,4.729-0.925,7.117
c0.937,2.388,3,4.103,5.52,4.587L52,25.326V29.642z"
    />
    <path
      d="M27.5,17C21.71,17,17,21.71,17,27.5S21.71,38,27.5,38S38,33.29,38,27.5S33.29,17,27.5,17z M27.5,36
c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5S32.187,36,27.5,36z"
    />
    <path
      d="M27.5,22c-3.033,0-5.5,2.468-5.5,5.5s2.467,5.5,5.5,5.5s5.5-2.468,5.5-5.5S30.533,22,27.5,22z M27.5,31
c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S29.43,31,27.5,31z"
    />
  </HeaderIcon>
)

export const TimePanelsContainerStretch = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
`

export const TimePanelsContainerOuter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export const TimePanelsContainerInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
`

export const TimePanelContainer = styled.div`
  margin: 10px;
`

export const FooterContainer = styled.div`
  position: relative;
  background-color: ${primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${subtextOnPrimary};
  min-height: 40px;
  font-size: 0.8em;
  padding-left: 160px;
  padding-right: 160px;

  a {
    color: #d6d5d5;
    text-decoration: none;
  }
`

export const FooterDateContainer = styled.div`
  position: absolute;
  left: 15px;
  bottom: 14px;
`
