const ModalInput = ({ title, placeholder, value, onChange, }) => {
  return (
    <label htmlFor="modal_title">
      <span>{title}</span>
      <input
        id="modal_title"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};
export default ModalInput;
