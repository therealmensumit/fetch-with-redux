import { useEffect } from "react";
import {
  Card,
  Col,
  Container,
  Figure,
  Row,
  Spinner,
  Stack,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/products";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Products = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // if (state.product.loading) return <p>Loading...</p>;
  return (
    <Container className="py-5">
      <Row className="gy-4">
        <Col xs={12}>
          <h1 className="text-center">Products</h1>
        </Col>
        {product.isLoading ? (
          <Stack
            direction="horizontal"
            gap={3}
            className="justify-content-center">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3">Loading...</p>
          </Stack>
        ) : (
          <>
            {product.data && product.data.length > 0 ? (
              product.data.map((e) => (
                <Col md={6} lg={4} key={e.id}>
                  <Card className="h-100 border-0 shadow rounded-3">
                    <Card.Body>
                      <Figure className="text-center d-block rounded-3 p-3 bg-light">
                        <LazyLoadImage
                          src={e.image}
                          alt={e.title}
                          height={200}
                          wrapperClassName="mix-blend-darken"
                          className="object-fit-contain"
                          effect="blur"
                          wrapperProps={{
                            style: { transitionDelay: "1s" },
                          }}
                        />
                      </Figure>
                      <Card.Title>{e.title}</Card.Title>
                      <Card.Text>{e.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col xs={12} className="text-center">
                <p>No products available.</p>
              </Col>
            )}
          </>
        )}
      </Row>
    </Container>
  );
};
