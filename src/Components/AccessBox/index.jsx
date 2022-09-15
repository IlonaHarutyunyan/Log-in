export const AccessBox = ({text,backgroundColor,color,height,width}) =>{
    return(
        <div
            style={{
                backgroundColor: backgroundColor ? backgroundColor : 'black',
                color: color ? color : 'black',
                height : height ? height : '0',
                width : width ? width : '0'
            }}
        >
            <h4>{text}</h4>
        </div>
    )
}