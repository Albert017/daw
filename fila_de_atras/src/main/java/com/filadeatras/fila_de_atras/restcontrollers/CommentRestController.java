package com.filadeatras.fila_de_atras.restcontrollers;

import com.fasterxml.jackson.annotation.JsonView;
import com.filadeatras.fila_de_atras.UserComponent;
import com.filadeatras.fila_de_atras.models.Comment;
import com.filadeatras.fila_de_atras.services.CommentService;
import com.filadeatras.fila_de_atras.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Jakub on 03/04/2017.
 */

@RestController
@RequestMapping("/api/comments")
public class CommentRestController {

    @Autowired
    private CommentService commentService;

    @Autowired
    UserComponent userComponent;

    @JsonView(Comment.PostComment.class)
    @RequestMapping(value="/{idCom}", method= RequestMethod.DELETE)
    public ResponseEntity<Comment> postAddComment (@PathVariable long idCom){
        Comment com = commentService.findOne(idCom);
        if (com==null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        commentService.delete(com);
        if (com == null) return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(com,HttpStatus.OK);
    }
}
