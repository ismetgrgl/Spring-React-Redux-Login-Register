package org.ismetg.repository;

import org.ismetg.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findOptionalByUsernameAndPassword (String username, String password);

    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);
}
