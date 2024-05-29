export { Select };

function Select({children, className, name}){


    return (
        <select name={name} className={"select select-bordered w-fit max-w-xs" + className}>{children}</select>
    )
}