package com.HShift.Controllers;

import com.HShift.Model.User;
import com.HShift.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "/user/", method = RequestMethod.GET)
    public ResponseEntity<List<User>> listAllUsers() {
        List<User> users = userRepository.findAllUsers();
        if (users.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    // -------------------Retrieve Single User------------------------------------------

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getUser(@PathVariable("id") long id) {
        System.out.println("Fetching User with id " + id);
        User user = userRepository.findOne(id);
        if (user == null) {
            System.out.println("User with id " + id + "not found.");
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    // -------------------Create a User-------------------------------------------

    @RequestMapping(value = "/user/", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody User user) {
        System.out.println("Creating User");

        if (userRepository.findByEmail(user.getEmail())!= null) {
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
        userRepository.save(user);

        return new ResponseEntity<String>(HttpStatus.CREATED);
    }

    // ------------------- Update a User ------------------------------------------------

    @RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateUser(@PathVariable("id") long id, @RequestBody User user) {

        User currentUser = userRepository.findOne(id);

        if (currentUser == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        currentUser.setFirstName(user.getFirstName());
        currentUser.setLastName(user.getLastName());
        currentUser.setEmail(user.getEmail());

        userRepository.save(currentUser);
        return new ResponseEntity<User>(currentUser, HttpStatus.OK);
    }

    // ------------------- Delete a User-----------------------------------------

    @RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteUser(@PathVariable("id") long id) {

        User user = userRepository.findOne(id);
        if (user == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        userRepository.delete(id);
        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }

}
