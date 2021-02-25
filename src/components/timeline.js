import TimelinePart from './timelinePart';

function Timeline({participants}) {

    return(
    <div style={{display: 'flex'}}>
        {
            participants.map((participant,i) => {
                return (
                    <>
                <TimelinePart key={i} index={i} name={participant} />
                {
                    i !== participants.length-1 && <p>OK </p>
                }
                </>
                )
            })
        }
    </div>
    )
}

export default Timeline;