import React from 'react'

export default function EditableLevelCell({ value, isEditing, onValueChange }) {
  return isEditing ? (
    <div className='p-2'>
        <input 
        type="text" 
        value={value}
        onChange={(e) => onValueChange(e.target.value)} 
        />
    </div>
  ) : (
    <div className="p-2">{ value }</div>
  );
}
