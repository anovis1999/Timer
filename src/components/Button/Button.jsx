const Button = ({children, onClick}) => (
    <button onClick={onClick}>
        {children}
    </button>
);

export {Button};
