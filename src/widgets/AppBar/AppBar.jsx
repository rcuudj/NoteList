import { useState } from 'react';
import './AppBar.css';
import Button from './Button';

const AppBar = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    return (
        <nav className="nav">
            {
                showSearchBar
                    ?
                    <div className="nav__search">
                        <Button type={'back'} onClick={() => setShowSearchBar(false)} />
                        <input type="text" placeholder='Поиск...' />
                        <Button type={'close'} />
                    </div>
                    :
                    <div className="nav__content">
                        <div></div>
                        <h1>Заметки</h1>
                        <Button type={'search'} onClick={() => setShowSearchBar(true)} />
                    </div>
            }
        </nav>
    );
}

export default AppBar;