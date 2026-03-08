import "./Modal.css";
import ModalInput from "./Modalnput";

const Modal = ({
  showModal,
  editMode,
  closeModal,
  noteTitle,
  setNoteTitile,
  noteDescr,
  setNoteDescr,
  addNote,
  editNote,
}) => {
  return (
    <div
      className={`modal ${showModal ? "active" : ""}`}>
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        <h3>{editMode ? "Изменить заметку" : "Добавить заметку"}</h3>
        <ModalInput
          title={"Заголовок"}
          placeholder={"Заголовок"}
          value={noteTitle}
          onChange={setNoteTitile} />
        <ModalInput
          title={"Заметка"}
          placeholder={"Заметка"}
          value={noteDescr}
          onChange={setNoteDescr} />
        <div className="modal__dialog-actions">
          <button onClick={() => closeModal()}>
            <span>Отмена</span>
          </button>
          {editMode ? (
            <button onClick={() => editNote()}>
              <span>Изменить</span>
            </button>
          ) : (
            <button onClick={() => addNote()}>
              <span>Добавить</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
