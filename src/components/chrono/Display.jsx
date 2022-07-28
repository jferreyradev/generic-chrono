const Display = ({ time }) => {
  return (
    <div >
      <span>{time.hours.toString().padStart(2, '0')}</span>
      <span>:{time.min.toString().padStart(2, '0')}</span>
      <span>.{time.sec.toString().padStart(2, '0')}:{time.msec}</span>
    </div>
  )
}

export default Display