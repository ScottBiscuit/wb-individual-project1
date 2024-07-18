import React from 'react'
import { Col, Stack } from 'react-bootstrap';

export default function EditableRowModeButtons({ isEditing, onEditClick, onSaveClick, onDeleteClick }) {
  return isEditing ? (
  <Col xs={{ span: 1 }}>
    <Stack gap={0}>
     <button onClick={onSaveClick}>Save</button>
    </Stack>
  </Col>
  ) : (
    <Col xs={{ span: 1 }}>
    <Stack gap={0}>
      <button onClick={onEditClick}>Edit</button>
      <button onClick={onDeleteClick}>Delete</button>
    </Stack>
  </Col>
  );
}
