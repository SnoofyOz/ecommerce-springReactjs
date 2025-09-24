package com.example.ecommercespringreactjs.repository.database.role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<RoleEntity,String> {
    RoleEntity findByName(ERole name);
}
