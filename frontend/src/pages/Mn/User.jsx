import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [newUser, setNewUser] = useState({ username: '', password: '', email: '' });
    const [editingUser, setEditingUser] = useState({ id: null, username: '', password: '', email: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        setLoading(true);
        fetch('http://localhost:8080/v1/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa user này không?")) {
            fetch(`http://localhost:8080/v1/users/${id}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete user');
                }
                fetchUsers();
                alert("Xóa user thành công!");
            })
            .catch(error => {
                alert(`Lỗi: ${error.message}`);
            });
        }
    };
    
    const handleAddUser = () => {
        if (!newUser.username || !newUser.password || !newUser.email) {
            alert('Vui lòng điền đầy đủ thông tin user.');
            return;
        }

        fetch('http://localhost:8080/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add user');
            }
            return response.json();
        })
        .then(() => {
            fetchUsers();
            setShowAddModal(false);
            setNewUser({ username: '', password: '', email: '' });
            alert("Thêm user thành công!");
        })
        .catch(error => {
            alert(`Lỗi: ${error.message}`);
        });
    };

    const handleEditClick = (user) => {
        // Gán dữ liệu của user đang sửa vào state
        setEditingUser({ ...user });
        setShowEditModal(true);
    };

    const handleUpdateUser = () => {
        if (!editingUser.password || !editingUser.email) {
            alert('Vui lòng điền đầy đủ thông tin user.');
            return;
        }
    
        fetch(`http://localhost:8080/v1/users/${editingUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: editingUser.username,
                password: editingUser.password,
                email: editingUser.email
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update user');
            }
            // Backend có thể trả về phản hồi rỗng nên không cần parse JSON
            return response.text(); 
        })
        .then(() => {
            fetchUsers();
            setShowEditModal(false);
            alert("Sửa user thành công!");
        })
        .catch(error => {
            alert(`Lỗi: ${error.message}`);
        });
    };

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">User Management</h2>
            <Button variant="success" className="mb-3" onClick={() => setShowAddModal(true)}>
                Thêm mới User
            </Button>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Button variant="warning" size="sm" className="me-2" onClick={() => handleEditClick(user)}>Sửa</Button>
                                <Link to={`/users/${user.id}`}>
                                    <Button variant="info" size="sm" className="me-2">Xem</Button>
                                </Link>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>Xóa</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
            {/* Modal thêm mới user */}
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={newUser.username}
                                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                value={newUser.password}
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleAddUser}>
                        Lưu user
                    </Button>
                </Modal.Footer>
            </Modal>
            
            {/* Modal sửa user */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Sửa user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={editingUser.username}
                                disabled // Tên người dùng không được sửa
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                value={editingUser.password}
                                onChange={(e) => setEditingUser({ ...editingUser, password: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                value={editingUser.email}
                                onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleUpdateUser}>
                        Cập nhật
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default UserList;