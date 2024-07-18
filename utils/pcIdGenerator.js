// Generate a unique ID.
// IDs are auto-incremented, starting at 0 (just like auto-incrementing database keys).
// Normally, this would be done by the database, but we don't have a database.
// Also, the first ID generated will be 6 because our test data already has IDs 0, 1, 2, and 3.

let pcId = 4;

function generatePCId() {
  pcId += 1;
  return pcId;
}

export default generatePCId;
