export { Button };

interface ButtonProps {
    text: string;
    className: string;
    onClick: MouseEvent ;
}

function Button({text, className, onClick} : ButtonProps){
    const defaultClassNames: string = "btn"; 

    return (
        <button className={`${defaultClassNames} ${className}`} onClick={(e) => {
            e.stopPropagation();
            onClick(e);
        }}>{text}</button>
    )
}