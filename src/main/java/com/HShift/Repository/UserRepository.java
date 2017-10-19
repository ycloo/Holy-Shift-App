package com.HShift.Repository;

import java.util.List;

import com.HShift.Model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRepository extends PagingAndSortingRepository<User, Long> {

    List<User> findByEmail(@Param("email") String email);

    @Query("select u from User u")
    List<User> findAllUsers();

}