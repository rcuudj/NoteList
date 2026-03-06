const NoteListOptions = ({ handleShowList, isList }) => {
    return (
        <div className="note__list-options container">
            <h2>Все заметки</h2>
            <button onClick={() => handleShowList()}>
                {isList ? 'Сетка' : 'Список'}
            </button>
        </div>
    );
}

export default NoteListOptions;