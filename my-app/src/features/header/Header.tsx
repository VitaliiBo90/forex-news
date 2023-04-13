import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Stack, Button } from 'react-bootstrap';

export function Header() {
  return (
    <Stack direction="horizontal" gap={2}>
      <Button className="ms-auto" variant="primary">
        Sign In
      </Button>
      <Button href="/register" variant="success">
        Sign Up
      </Button>
    </Stack>
  );
}
