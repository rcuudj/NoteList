import search from '../../assets/icons/search.svg';
import close from '../../assets/icons/close.svg';
import back from '../../assets/icons/back.svg';


// props - это способ передачи данных от родительского компонента к дочернему
const Button = ({ type, onClick }) => {

    const icon = type == 'search' ? search : type == 'close' ? close : type == 'back' ? back : search;

    return (
        <button className="button" onClick={onClick}>
            <img src={icon} alt="" />
        </button>
    );
}

export default Button;