const CheckListItem = ({ value, checked, onChange }) => {
    return (
      <label className="inline-flex items-center my-1">
        <input
          type="checkbox"
          className="form-checkbox text-blue-600 accent-green-800 border-2 border-black"
          checked={checked}
          onChange={onChange}
        />
        <span className="ml-2 leading-7 font-medium">{value}</span>
      </label>
    );
  };
  
  export default CheckListItem;