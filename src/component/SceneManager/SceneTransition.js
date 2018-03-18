import React, { Component } from 'react'

import { SceneContainer, SceneA, SceneB } from './styled-components'

const TRANSITION_TIME = 800
const TRANSITION_TIME_S = '0.8s'

class SceneTransition extends Component {
  state = {
    scenes: {
      A: null,
      B: null,
    },
    inView: null,
    transition: null,
    transitioning: false,
  }

  componentWillMount() {
    const { activeScene } = this.props
    const inView = 'A'
    this.setState({
      scenes: {
        [inView]: activeScene,
      },
      inView,
      transition: 'entry',
    })
  }

  componentWillReceiveProps(nextProps) {
    const { inView } = this.state
    const { activeSceneName: previousSceneName } = this.props
    const { activeScene: nextScene, activeSceneName: nextSceneName } = nextProps
    // if the scene has changed then transition to it
    if (previousSceneName !== nextSceneName) {
      const transition = nextSceneName === 'TimerDashboard' ? 'forward' : 'back'
      const nextInView = inView === 'A' ? 'B' : 'A'
      this.setState({
        scenes: {
          ...this.state.scenes,
          [nextInView]: nextScene,
        },
        transition,
        transitioning: true,
      })
      // transition complete
      setTimeout(() => {
        this.setState({
          scenes: {
            ...this.state.scenes,
            [inView]: null,
          },
          inView: nextInView,
          transitioning: false,
        })
      }, TRANSITION_TIME)
    }
  }

  render() {
    const { scenes, transition, inView, transitioning } = this.state
    return (
      <SceneContainer>
        <SceneA
          transitionTime={TRANSITION_TIME_S}
          transition={transition}
          inView={inView}
          transitioning={transitioning}
        >
          {scenes.A}
        </SceneA>
        <SceneB
          transitionTime={TRANSITION_TIME_S}
          transition={transition}
          inView={inView}
          transitioning={transitioning}
        >
          {scenes.B}
        </SceneB>
      </SceneContainer>
    )
  }
}

export default SceneTransition
