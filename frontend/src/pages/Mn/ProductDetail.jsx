import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Spinner, Alert, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Reset state trước khi fetch
        setProduct(null);
        setError(null);
        setLoading(true);

        fetch(`http://localhost:8080/v1/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (!data || Object.keys(data).length === 0) {
                    setError("Không tìm thấy sản phẩm với ID này.");
                    setProduct(null);
                } else {
                    setProduct(data);
                }
                setLoading(false);
            })
            .catch(e => {
                console.error("Fetch error:", e);
                setError("Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại.");
                setLoading(false);
            });
    }, [id]);

    // Hàm tiện ích để định dạng tiền tệ
    const formatCurrency = (amount) => {
        if (amount === undefined || amount === null) return 'N/A';
        return amount.toLocaleString('vi-VN') + ' VNĐ';
    };

    // --- Xử lý trạng thái tải (Loading State) ---
    if (loading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="grow" variant="primary" role="status">
                    <span className="visually-hidden">Đang tải chi tiết sản phẩm...</span>
                </Spinner>
                <p className="mt-3 text-muted">Đang tải dữ liệu...</p>
            </Container>
        );
    }

    // --- Xử lý trạng thái lỗi và không tìm thấy ---
    if (error || !product) {
        return (
             <Container className="mt-5">
                <Alert variant={error ? "danger" : "warning"} className="text-center">
                    <h4>{error ? "Lỗi!" : "Không tìm thấy!"}</h4>
                    <p>{error || "Thông tin sản phẩm không khả dụng."}</p>
                </Alert>
            </Container>
        );
    }

    // --- Hiển thị chi tiết sản phẩm (Success State) ---
    return (
        <Container className="my-5">
            {/* Tiêu đề chung: Căn giữa */}
            <h2 className="mb-4 text-center text-primary">Chi tiết Sản phẩm</h2> 

            {/* CARD: Khối Card căn giữa màn hình */}
            <Row className="justify-content-center"> 
                <Col md={8} lg={6}>
                    <Card className="shadow-lg border-0">
                        {/* HEADER CARD: Căn giữa, hiển thị tên sản phẩm hoặc tiêu đề chung */}
                        <Card.Header as="h4" className="bg-primary text-white py-3 text-center">
                            {product.name || "Chi tiết Sản phẩm"}
                        </Card.Header>
                        
                        <Card.Body>
                            {/* Danh sách chi tiết */}
                            <ListGroup variant="flush">
                                
                                {/* Tên Sản phẩm (Nếu tên không nằm ở Header) */}
                                {product.name && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col xs={4} className="fw-bold text-start">Tên sản phẩm:</Col>
                                            <Col xs={8} className="text-start">{product.name}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                {/* ID Sản phẩm */}
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs={4} className="fw-bold text-start">ID:</Col>
                                        <Col xs={8} className="text-start text-muted">{product.id}</Col>
                                    </Row>
                                </ListGroup.Item>

                                {/* Giá */}
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs={4} className="fw-bold text-start">Giá:</Col>
                                        <Col xs={8} className="text-start text-danger">{formatCurrency(product.price)}</Col>
                                    </Row>
                                </ListGroup.Item>

                                {/* Mô tả */}
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs={12} className="fw-bold text-start mb-2">Mô tả:</Col>
                                        <Col xs={12} className="text-start text-muted">{product.description || 'Không có mô tả chi tiết.'}</Col>
                                    </Row>
                                </ListGroup.Item>
                                
                                {/* Thêm các trường khác nếu có, ví dụ: category, stock, createdDate */}
                                {product.stock && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col xs={4} className="fw-bold text-start">Tồn kho:</Col>
                                            <Col xs={8} className="text-start">{product.stock.toLocaleString()}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;