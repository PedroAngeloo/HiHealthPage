import "../styles/buttons.css";

interface IButtonProps {
    text: string;
    secondary?: boolean;
    buttonClassName?: string; // Adiciona a propriedade buttonClassName
    style?: React.CSSProperties; // Permite passar estilos inline
    onClick?: () => void; // Adiciona a propriedade onClick se for necessário
}

export default function Button({ text, secondary, buttonClassName = '', style, onClick }: IButtonProps) {
    return (
        <button 
            className={`${secondary ? "btn-secondary" : "btn-primary"} ${buttonClassName}`} 
            style={style} 
            onClick={onClick}
        >
            {text}
        </button>
    );
}
