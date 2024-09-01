import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container className="text-center py-5">
      <h1>404 Error</h1>
      <Button variant="success" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </Container>
  );
};
