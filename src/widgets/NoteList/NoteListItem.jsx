const NoteListItem = ({ note, showEditModeDialog, removeNote }) => {
    return (
        <div className="note__list-item">
            <h2>{note.title}</h2>
            <span>{note.date}</span>
            <p>{note.descr}</p>

            <div className="note__list-item-options">
                <button onClick={() => showEditModeDialog(note.id)}>
                    <span>РЕДАКТИРОВАТЬ</span>
                </button>
                <button onClick={() => removeNote(note.id)}>
                    <span>УДАЛИТЬ</span>
                </button>

            </div>
        </div>
    );
}

export default NoteListItem;