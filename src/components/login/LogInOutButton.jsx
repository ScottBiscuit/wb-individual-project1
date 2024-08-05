import React from 'react'

// export default function LogInOutButton({ onLogout }) {
//     return (
//       <form onSubmit={onLogout}>
//         <button type="submit">Log Out</button>
//       </form>
//     );
//   }
  import { useEffect, useState } from 'react';
  import Button from 'react-bootstrap/Button';
  
  export default function LogInOutButton({ onLogout }) {

    return (
      <form onSubmit={onLogout}>
      <Button
        variant="outline-light"
        type='submit'
      >Log Out
      </Button>
      </form>
    );
  }
