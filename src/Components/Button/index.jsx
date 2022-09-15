export const Button = ({onButtonClick,text,backgroundColor,border,borderRadius,padding,margin,color,height,width,cursor}) =>{
    return(
        <button
            onClick = {onButtonClick}
            style = {{
                backgroundColor: backgroundColor ? backgroundColor : 'transparent',
                border : border ? border : "none",
                borderRadius : borderRadius ? borderRadius : '0',
                color : color ? color : 'white',
                padding : padding ? padding : '0',
                margin : margin ? margin : '0',
                height : height ? height : '0',
                width : width ? width : '0',
                cursor : cursor ? cursor : '',
            }}
        >
            {text}</button>
    )
}