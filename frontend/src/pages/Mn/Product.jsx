import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Form, FormControl, Modal, Spinner, InputGroup, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });
    const [editingProduct, setEditingProduct] = useState({ id: null, name: '', description: '', price: '' });
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    // Hàm định dạng tiền tệ
    const formatCurrency = (amount) => {
        if (amount === undefined || amount === null || isNaN(amount)) return 'N/A';
        return Number(amount).toLocaleString('vi-VN') + ' VNĐ';
    };

    const fetchProducts = () => {
        setLoading(true);
        setError(null);
        fetch('http://localhost:8080/v1/products')
            .then(response => {
                if (!response.ok) throw new Error("Không thể tải danh sách sản phẩm.");
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
                setIsSearching(false);
            })
            .catch(e => {
                console.error("Fetch Error:", e);
                setError(e.message);
                setLoading(false);
            });
    };

    const handleSearch = () => {
        if (!searchTerm.trim()) {
            fetchProducts();
            return;
        }

        setLoading(true);
        setError(null);
        setIsSearching(true);
        fetch(`http://localhost:8080/v1/products/search?name=${searchTerm}`)
            .then(response => {
                if (!response.ok) throw new Error("Không tìm thấy sản phẩm phù hợp.");
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(e => {
                console.error("Search Error:", e);
                setError(e.message);
                setProducts([]);
                setLoading(false);
            });
    };

    const handleReset = () => {
        setSearchTerm('');
        fetchProducts();
    };

    const handleDelete = (id) => {
        if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) return;
        
        fetch(`http://localhost:8080/v1/products/${id}`, { method: 'DELETE' })
            .then(response => {
                if (!response.ok) throw new Error('Không thể xóa sản phẩm. Vui lòng kiểm tra API.');
                fetchProducts(); 
                alert("Xóa sản phẩm thành công! ✅");
            })
            .catch(error => alert(`Lỗi xóa: ${error.message}`));
    };

    const handleSaveNewProduct = () => {
        if (!newProduct.name || !newProduct.description || !newProduct.price) {
            alert('Vui lòng điền đầy đủ thông tin sản phẩm.');
            return;
        }
        
        const payload = { ...newProduct, price: Number(newProduct.price) };

        fetch('http://localhost:8080/v1/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })
        .then(response => {
            if (!response.ok) return response.json().then(err => { throw new Error(err.message || 'Lỗi thêm sản phẩm từ Server.'); });
            return response.json();
        })
        .then(() => {
            fetchProducts();
            setShowAddModal(false);
            setNewProduct({ name: '', description: '', price: '' });
            alert("Thêm sản phẩm thành công! ✨");
        })
        .catch(error => alert(`Lỗi thêm: ${error.message}`));
    };

    const handleUpdateProduct = () => {
        if (!editingProduct.name || !editingProduct.description || !editingProduct.price) {
            alert('Vui lòng điền đầy đủ thông tin sản phẩm.');
            return;
        }
        
        const payload = {
            name: editingProduct.name,
            description: editingProduct.description,
            price: Number(editingProduct.price) 
        };

        fetch(`http://localhost:8080/v1/products/${editingProduct.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })
        .then(response => {
            if (!response.ok) return response.json().then(err => { throw new Error(err.message || 'Lỗi cập nhật từ Server.'); });
            return response.json().catch(() => ({}));
        })
        .then(() => {
            fetchProducts();
            setShowEditModal(false);
            alert("Sửa sản phẩm thành công! 📝");
        })
        .catch(error => alert(`Lỗi cập nhật: ${error.message}`));
    };

    const handleEditClick = (product) => {
        setEditingProduct({ ...product, price: String(product.price) }); 
        setShowEditModal(true);
    };

    // --- RENDER ---
    
    if (loading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="grow" variant="primary" role="status">
                    <span className="visually-hidden">Đang tải dữ liệu...</span>
                </Spinner>
                <p className="mt-3 text-primary">Đang tải danh sách sản phẩm...</p>
            </Container>
        );
    }
    
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4 text-primary fw-bold">Quản lý Sản phẩm</h2>

            {/* Thanh tìm kiếm và Thêm mới */}
            <Row className="mb-4 align-items-center">
                <Col md={6}>

                </Col>
                <Col md={6} className="text-end mt-3 mt-md-0">
                    <Button variant="success" onClick={() => setShowAddModal(true)}>
                        Thêm mới Sản phẩm
                    </Button>
                </Col>
            </Row>
            
            {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
            
            {isSearching && !loading && (
                <Alert variant="info" className="text-center">
                    Tìm thấy **{products.length}** kết quả cho từ khóa: **"{searchTerm}"**
                </Alert>
            )}

            {/* Bảng dữ liệu */}
            <div className="table-responsive shadow-sm">
                <Table striped bordered hover className="align-middle">
                    <thead className="table-primary">
                        <tr>
                            <th className="text-center" style={{ minWidth: '200px' }}>#ID</th>
                            <th>Tên sản phẩm</th>
                            <th>Mô tả</th>
                            {/* Đã sửa: Căn giữa cột Giá */}
                            <th className="text-center">Giá</th> 
                            <th className="text-center" style={{ width: '200px' }}>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map(product => (
                                <tr key={product.id}>
                                    {/* Sửa: Hiển thị đầy đủ ID */}
                                    <td className="text-center text-muted" style={{ 
                                        wordBreak: 'break-all', // Cho phép ngắt dòng nếu ID quá dài
                                        fontSize: '0.85rem' // Giảm cỡ chữ để chứa được nhiều hơn
                                    }}>
                                        {product.id}
                                    </td>
                                    <td className="fw-bold">{product.name}</td>
                                    <td className="text-truncate" style={{ maxWidth: '250px' }}>
                                        {product.description || 'Không có mô tả'}
                                    </td>
                                    {/* Đã sửa: Căn giữa nội dung cột Giá */}
                                    <td className="text-center text-danger fw-bold"> 
                                        {formatCurrency(product.price)}
                                    </td>
                                    <td className="text-center">
                                        <div className="d-flex justify-content-center">
                                            <Button variant="warning" size="sm" className="me-2" onClick={() => handleEditClick(product)}>Sửa</Button>
                                            <Link to={`/products/${product.id}`} className="me-2">
                                                <Button variant="info" size="sm">Xem</Button>
                                            </Link>
                                            <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>Xóa</Button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center text-muted py-3">
                                    {isSearching ? "Không tìm thấy sản phẩm nào." : "Chưa có sản phẩm nào được tạo."}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>

            {/* Modals (giữ nguyên) */}
            
            {/* Modal Thêm mới sản phẩm */}
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton className="bg-success text-white">
                    <Modal.Title>✨ Thêm mới sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="newName">
                            <Form.Label>Tên sản phẩm (*)</Form.Label>
                            <FormControl
                                type="text"
                                placeholder="Nhập tên sản phẩm"
                                value={newProduct.name}
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="newDescription">
                            <Form.Label>Mô tả</Form.Label>
                            <FormControl
                                as="textarea"
                                rows={3}
                                placeholder="Nhập mô tả chi tiết"
                                value={newProduct.description}
                                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="newPrice">
                            <Form.Label>Giá (*)</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type="number"
                                    placeholder="0"
                                    value={newProduct.price}
                                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                />
                                <InputGroup.Text>VNĐ</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>Đóng</Button>
                    <Button variant="success" onClick={handleSaveNewProduct}>Lưu sản phẩm</Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Sửa sản phẩm */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton className="bg-warning text-dark">
                    <Modal.Title>📝 Sửa sản phẩm: {editingProduct.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <FormControl type="text" value={editingProduct.id} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="editName">
                            <Form.Label>Tên sản phẩm</Form.Label>
                            <FormControl type="text" value={editingProduct.name} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="editDescription">
                            <Form.Label>Mô tả</Form.Label>
                            <FormControl
                                as="textarea"
                                rows={3}
                                value={editingProduct.description}
                                onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="editPrice">
                            <Form.Label>Giá</Form.Label>
                             <InputGroup>
                                 <FormControl
                                     type="number"
                                     value={editingProduct.price}
                                     onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                                 />
                                 <InputGroup.Text>VNĐ</InputGroup.Text>
                             </InputGroup>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>Đóng</Button>
                    <Button variant="warning" onClick={handleUpdateProduct}>Cập nhật</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ProductList;