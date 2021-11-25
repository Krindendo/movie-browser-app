import { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"

const StyledRipple = styled.span`
  opacity: 0.3;
  transform: scale(1);
  animation-name: "";
  animation-duration: 550ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`
const StyledRippleChiled = styled.span`
  opacity: 1;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: currentColor;

  opacity: 0;
  animation-name: ${exitKeyframe};
  animation-duration: 550ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`

const enterKeyFrame = keyframes`

0% {
  transform: scale(0);
  opacity: 0.1;
}

100% {
  transform: scale(1);
  opacity: 0.3;
}
`

const exitKeyframe = keyframes`
0% {
  opacity: 1;
}

100% {
  opacity: 0;
}
`

const pulsateKeyframe = keyframes`
0% {
  transform: scale(1);
}

50% {
  transform: scale(0.92);
}

100% {
  transform: scale(1);
}
`

export default function Ripple(props) {
  const [leaving, setLeaving] = useState(false)
  const { pulsate = false, rippleX, rippleY, rippleSize, in: inProp, onExited, timeout } = props
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  }

  if (!inProp && !leaving) {
    setLeaving(true)
  }

  useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout)
      return () => {
        clearTimeout(timeoutId)
      }
    }

    return undefined
  }, [onExited, inProp, timeout])

  return (
    <StyledRipple style={rippleStyles}>
      <StyledRippleChiled />
    </StyledRipple>
  )
}
