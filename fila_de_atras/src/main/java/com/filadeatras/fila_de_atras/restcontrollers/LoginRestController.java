package com.filadeatras.fila_de_atras.restcontrollers;

import com.fasterxml.jackson.annotation.JsonView;
import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.User;
import com.filadeatras.fila_de_atras.services.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;


/**
 * Created by Jakub on 30/03/2017.
 */


@RestController
@RequestMapping("/api")
public class LoginRestController {

    @Autowired
    private UserService serviceUser;

    private static final Logger log = LoggerFactory.getLogger(LoginRestController.class);

    @Autowired
    private UserComponent userComponent;

    @JsonView(User.ViewUser.class)
    @RequestMapping(value = "/logIn", method= RequestMethod.GET)
    public ResponseEntity<User> logInRestController () {
        if (!userComponent.isLoggedUser()) {
            log.info("Not user logged");
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        } else {
            User loggedUser = serviceUser.findOne(userComponent.getLoggedUser().getId());
            log.info("Logged as " + loggedUser.getUsername());
            return new ResponseEntity<>(loggedUser, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/logOut", method= RequestMethod.GET)
    public ResponseEntity<Boolean> logOutRestController (HttpSession session) {
        if (!userComponent.isLoggedUser()) {
            log.info("No user logged");
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        } else {
            session.invalidate();
            log.info("Logged out");
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
    }

}
