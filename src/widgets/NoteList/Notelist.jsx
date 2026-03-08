import NoteListItem from "./NoteListItem";
import './NoteList.css';
import NoteListOptions from "./NoteListOption";
import { useState } from "react";

const NoteList = ({ showEditModeDialog, notes, removeNote, length }) => {

    const [isList, setIsList] = useState(false);

    const handleShowList = () => {
        setIsList(prev => !prev);
    }

    return (
        <>
            <NoteListOptions
                handleShowList={handleShowList}
                isList={isList}
                length={length}
            />
            <div className={`note__list container ${isList ? 'list' : ''}`}>
                {notes.map((note) => (
                    <NoteListItem
                        key={note.id}
                        showEditModeDialog={showEditModeDialog}
                        note={note}
                        removeNote={removeNote}
                    />
                ))}
            </div>
        </>
    );
}

export default NoteList;