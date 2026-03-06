import { useState } from "react";
import AddNoteButton from "./widgets/AddNoteButton/AddNoteButton";
import AppBar from "./widgets/AppBar/AppBar";
import Modal from "./widgets/Modal/Modal";
import NoteList from "./widgets/NoteList/NoteList";
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const [showModal, setShowModal] = useState(false);
  //Все заметки
  const [notes, setNotes] = useState([
    // {
    //   id: "1",
    //   title: "Заголовок",
    //   descr: "Заметка",
    //   date: "28.02.2026",
    // },
  ]); // Пустой массив по умолчанию
  // Получение данных с инпута
  const [noteTitle, setNoteTitile] = useState("");
  const [noteDescr, setNoteDescr] = useState("");
  const [editMode, setEditMode] = useState();
  const [editNotedId, setEditNotedId] = useState("");
  const showEditModeDialog = (id) => {
    setShowModal(true);
    setEditMode(true);
    console.log(id);
    if (id) {
      setEditNotedId(id);
    }
  };
  const addNote = () => {
    const note = {
      id: uuidv4(),
      title: noteTitle,
      descr: noteDescr,
      // date: new Date().toLocaleDateString('ru-RU'), // выводит только месяц число и год
      date: Date(),
    };
    setNotes([...notes, note]);
    closeModal();
  };
  const loadNote = () => { };
  const removeNote = (id) => {
    const remove = setNotes(notes.filter(note => note.id !== id)) // отфильтровать по айди, чтобы удалить если айди не совпадает
    console.log(id)
  };
  const editNote = () => {
    if (editNotedId) {
      const index = notes.findIndex((note) => note.id === editNotedId);
      console.log(index);
    }
  };
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      // чтобы очистить информацию с задержкой при закрытии
      setNoteTitile(""); // чтобы очистить инпут в модалке заголовка
      setNoteDescr(""); // чтобы очистить инпут в модалке описание
      setEditMode(false);
    }, 500);
  };
  return (
    <>
      <AppBar />
      <NoteList
        showEditModeDialog={showEditModeDialog}
        removeNote={removeNote}
        notes={notes}
        editNote={editNote} />
      <Modal
        showModal={showModal}
        editNote={editNote}
        addNote={addNote}
        editMode={editMode}
        closeModal={closeModal}
        noteTitle={noteTitle}
        setNoteTitile={setNoteTitile}
        noteDescr={noteDescr}
        setNoteDescr={setNoteDescr}
      />
      <AddNoteButton setShowModal={setShowModal} />
    </>
  );
};

export default App;
