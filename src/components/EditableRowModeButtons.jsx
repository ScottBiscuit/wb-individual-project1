import React from 'react'
import { Stack } from 'react-bootstrap';

export default function EditableRowModeButtons({ isEditing, onEditClick, onSaveClick, onDeleteClick }) {
  return isEditing ? (

    <Stack gap={0}>
     <button onClick={onSaveClick}>Save</button>
    </Stack>

  ) : (
    <Stack gap={0}>
      <button onClick={onEditClick}>Edit</button>
      <button onClick={onDeleteClick}>Delete</button>
    </Stack>
  );
}
