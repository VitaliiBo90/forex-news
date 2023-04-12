import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Stack, Button } from 'react-bootstrap';

export function Header() {
  return (
    <Stack direction="horizontal" gap={2}>
      <Button className="ms-auto" as="a" variant="primary">
        Sign In
      </Button>
      <Button as="a" variant="success">
        Sign Up
      </Button>
    </Stack>
  );
}
