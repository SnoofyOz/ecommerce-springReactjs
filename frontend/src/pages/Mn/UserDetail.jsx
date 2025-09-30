import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Spinner, Alert, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setUser(null);
        setError(null);
        setLoading(true);

        fetch(`http://localhost:8080/v1/users/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (!data || Object.keys(data).length === 0) {
                    setError("Không tìm thấy người dùng với ID này.");
                    setUser(null);
                } else {
                    setUser(data);
                }
                setLoading(false);
            })
            .catch(e => {
                console.error("Fetch error:", e);
                setError("Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại.");
                setLoading(false);
            });
    }, [id]);

    const formatDate = (dateString) => {
        if (!dateString) return 'Chưa rõ';
        try {
            // Chỉ hiển thị giờ/phút/giây cho footer, còn ngày tháng dùng cho thông tin khác
            return new Date(dateString).toLocaleDateString('vi-VN', {
                year: 'numeric', month: 'long', day: 'numeric'
            });
        } catch {
            return dateString;
        }
    };

    // --- Xử lý trạng thái tải (Loading State) ---
    if (loading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="grow" variant="primary" role="status">
                    <span className="visually-hidden">Đang tải chi tiết người dùng...</span>
                </Spinner>
                <p className="mt-3 text-muted">Đang tải dữ liệu...</p>
            </Container>
        );
    }

    // --- Xử lý trạng thái lỗi và không tìm thấy ---
    if (error || !user) {
        return (
             <Container className="mt-5">
                <Alert variant={error ? "danger" : "warning"} className="text-center">
                    <h4>{error ? "Lỗi!" : "Không tìm thấy!"}</h4>
                    <p>{error || "Thông tin người dùng không khả dụng."}</p>
                </Alert>
            </Container>
        );
    }

    // --- Hiển thị chi tiết người dùng (Success State) ---
    return (
        <Container className="my-5">
            <h2 className="mb-4 text-center text-primary">Chi tiết Người Dùng</h2> 

            <Row className="justify-content-center"> 
                <Col md={8} lg={6}>
                    <Card className="shadow-lg border-0">
                        {/* HEADER CARD: Căn giữa */}
                        <Card.Header as="h4" className="bg-primary text-white py-3 text-center">
                            Chi tiết
                        </Card.Header>
                        
                        <Card.Body>
                            <ListGroup variant="flush">
                                {/* Dùng Grid (Row/Col) bên trong ListGroup.Item để kiểm soát khoảng cách */}
                                
                                {/* Username */}
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs={4} className="fw-bold text-start">Username:</Col>
                                        <Col xs={8} className="text-start">{user.username}</Col>
                                    </Row>
                                </ListGroup.Item>

                                {/* ID Người dùng */}
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs={4} className="fw-bold text-start">ID:</Col>
                                        <Col xs={8} className="text-start text-muted">{user.id}</Col>
                                    </Row>
                                </ListGroup.Item>

                                {/* Email */}
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs={4} className="fw-bold text-start">Email:</Col>
                                        <Col xs={8} className="text-start">{user.email || 'Chưa cập nhật'}</Col>
                                    </Row>
                                </ListGroup.Item>

                                {/* Các trường thông tin khác (giữ nguyên Flexbox để căn đều 2 bên nếu bạn muốn) */}
                                {user.fullName && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col xs={4} className="fw-bold text-start">Họ Tên:</Col>
                                            <Col xs={8} className="text-start">{user.fullName}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                                {user.joinDate && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col xs={4} className="fw-bold text-start">Ngày tham gia:</Col>
                                            <Col xs={8} className="text-start">{formatDate(user.joinDate)}</Col>
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

export default UserDetail;