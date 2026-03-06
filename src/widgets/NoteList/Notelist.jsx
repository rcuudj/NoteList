import NoteListItem from "./NoteListItem";
import './NoteList.css';
import NoteListOptions from "./NoteListOptions";
import { useState } from "react";

const NoteList = ({ showEditModeDialog, notes, }) => {

    const [isList, setIsList] = useState(false);

    const handleShowList = () => {
        setIsList(prev => !prev);
    }

    return (
        <>
            <NoteListOptions handleShowList={handleShowList} isList={isList} />
            <div className={`note__list container ${isList ? 'list' : ''}`}>
                {notes.map((note) => (
                    <NoteListItem
                        key={note.id}
                        showEditModeDialog={showEditModeDialog}
                        note={note}
                    />
                ))}
            </div>
        </>
    );
}

export default NoteList;