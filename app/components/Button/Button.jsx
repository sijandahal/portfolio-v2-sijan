import Link from 'next/link';
import './Button.css';

 const Button =({ element = 'button', type, link, target, theme, isEnabled = true, children, onClick }) =>{
    const btnClass = `button ${theme}`;

    const buttonContent = (
        <>
            <span className="border"></span>
            <span className="ripple">
                <span></span>
            </span>
            <span className="title">
                <span data-text={children}>{children}</span>
            </span>
        </>
    );

    if (element === 'link') {
        return (
            <Link href = "/about" className={btnClass} disabled={!isEnabled}>
                
                    {buttonContent}
                </Link>
        );
    }

    return (
        <button className={btnClass} type={type} onClick={onClick} disabled={!isEnabled}>
            {buttonContent}
        </button>
    );
}


export default Button;