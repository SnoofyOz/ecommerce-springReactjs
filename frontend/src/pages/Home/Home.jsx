import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/v1/products') // Sử dụng đường dẫn API của bạn
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center mt-5">Loading...</p>;
    }

    if (error) {
        return <p className="text-center mt-5 text-danger">Error: {error.message}</p>;
    }

    return (
        <>
            {/* Hero Section */}
            <Container className="text-center my-5">
                <div className="p-5 text-white bg-secondary rounded-3">
                    <h1 className="display-4">Chào mừng đến với Website của chúng tôi!</h1>
                    <p className="lead">
                        Chúng tôi cung cấp các giải pháp công nghệ tiên tiến nhất để giúp bạn thành công.
                    </p>
                    <hr className="my-4" />
                    <p>
                        Khám phá các dịch vụ và sản phẩm của chúng tôi.
                    </p>
                    <Button variant="primary" size="lg">Tìm Hiểu Thêm</Button>
                </div>
            </Container>

            {/* Content Section */}
            <Container className="my-5">
                <h2 className="text-center mb-4">Các Sản Phẩm Nổi Bật</h2>
                <Row className="g-4">
                    {products.map(product => (
                        <Col md={4} key={product.id}>
                            <Card>
                                <Card.Img variant="top" src={`https://placehold.co/60x50?text=${product.name}`} alt={product.name} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                        <br />
                                        <strong>Giá: {product.price.toLocaleString()} VNĐ</strong>
                                    </Card.Text>
                                    <Button variant="primary">Mua ngay</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Home;