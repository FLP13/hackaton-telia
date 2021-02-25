


function TimelinePart({index, name}) {
    const color = ['blue', 'red', 'green', 'yellow', 'purple'];

    const styling = {
        flex: '1',
        backgroundColor: color[index],
        color: 'white',
        height: '30px'
    }
    
    return (
        <div style={styling}>
            <p>{name} 25 min</p>
        </div>
    )
}

export default TimelinePart;