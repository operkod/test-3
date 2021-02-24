import React from "react"
import ReactSlider from "react-slider"

const ProgressBlock = () => {
  const [valueSlider, setValueSlider] = React.useState(255)
  const myRef = React.useRef()

  const handleValueSlider = (value) => {
    setValueSlider(Math.floor((255 / 100) * (100 - value)))
  }
  React.useEffect(() => {
    myRef.current.slider.style.backgroundColor = `rgb(255,${valueSlider},${valueSlider})`
  }, [valueSlider])
  return (
    <ReactSlider
      ref={myRef}
      className="progress"
      thumbClassName="progress-bar"
      trackClassName="progress-track"
      onChange={handleValueSlider}
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
  )
}
export default ProgressBlock
