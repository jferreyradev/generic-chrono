import Display from "./Display"

const StampsTimes = ({ times }) => {
    return (
        <div>
            {
                times.map((t, i) => {
                    return (
                            <Display time={t} key={i} />                        
                    )
                })
            }
        </div>
    )
}

export default StampsTimes