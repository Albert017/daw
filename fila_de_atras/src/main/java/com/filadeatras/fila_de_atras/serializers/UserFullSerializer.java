package com.filadeatras.fila_de_atras.serializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import com.filadeatras.fila_de_atras.models.Post;
import com.filadeatras.fila_de_atras.models.User;

import java.io.IOException;

/**
 * Created by Jakub on 02/04/2017.
 */
public class UserFullSerializer extends StdSerializer<User> {

    public UserFullSerializer() {
        this(null);
    }

    public UserFullSerializer(Class<User> t) {
        super(t);
    }

    @Override
    public void serialize(User user, JsonGenerator jgen, SerializerProvider serializerProvider) throws IOException, JsonProcessingException {

        jgen.writeStartObject();
        jgen.writeNumberField("id", user.getId());
        jgen.writeStringField("username",user.getUsername());
        jgen.writeStringField("userEmail",user.getUserEmail());
        jgen.writeStringField("userBiography",user.getUserBiography());
        jgen.writeStringField("userLocation",user.getUserLocation());
        jgen.writeStringField("userLink",user.getUserLink());
        jgen.writeBooleanField("report",user.getReport());
        jgen.writeFieldName("roles");
            jgen.writeStartArray();
            for(String role: user.getRoles()){
                jgen.writeString(role);
            }
            jgen.writeEndArray();
        //Following
        jgen.writeFieldName("userFollowing");
            jgen.writeStartArray();
            for(User usu: user.getUserFollowing()){
                jgen.writeStartObject();
                    jgen.writeNumberField("id",usu.getId());
                    jgen.writeStringField("username",usu.getUsername());
                jgen.writeEndObject();
            }
            jgen.writeEndArray();
        //Followers
        jgen.writeFieldName("userFollowers");
            jgen.writeStartArray();
            for(User usu: user.getUserFollowers()){
                //TODO maybe put in a func to write basic user data.
                jgen.writeStartObject();
                    jgen.writeNumberField("id",usu.getId());
                    jgen.writeStringField("username",usu.getUsername());
                jgen.writeEndObject();
            }
            jgen.writeEndArray();
        //Posts
        jgen.writeFieldName("userPosts");
            jgen.writeStartArray();
                for(Post post: user.getUserPosts()) {
                    jgen.writeStartObject();
                        jgen.writeNumberField("id", post.getId());
                        jgen.writeStringField("postTitle", post.getPostTitle());
                        jgen.writeStringField("postTag", post.getPostTag());
                    jgen.writeEndObject();
                }
            jgen.writeEndArray();
        jgen.writeEndObject();
    }
}
