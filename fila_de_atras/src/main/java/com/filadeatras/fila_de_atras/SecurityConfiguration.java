package com.filadeatras.fila_de_atras;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	@Autowired
    public UserRepositoryAuthenticationProvider authenticationProvider;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	
    	// Public pages
        http.authorizeRequests().antMatchers("/").permitAll();
        http.authorizeRequests().antMatchers("/index").permitAll();
        http.authorizeRequests().antMatchers("/login").permitAll();
        http.authorizeRequests().antMatchers("/singnup").permitAll();
        http.authorizeRequests().antMatchers("/postIndex").permitAll();
        http.authorizeRequests().antMatchers("/error").permitAll();
        http.authorizeRequests().antMatchers("/user/{username}").permitAll();
        http.authorizeRequests().antMatchers("/search").permitAll();
        http.authorizeRequests().antMatchers("/post/{id}").permitAll();
        http.authorizeRequests().antMatchers("/bestPost").permitAll();
        http.authorizeRequests().antMatchers("/tag/funny").permitAll();
        http.authorizeRequests().antMatchers("/tag/movies").permitAll();
        http.authorizeRequests().antMatchers("/tag/anime").permitAll();
        http.authorizeRequests().antMatchers("/tag/wtf").permitAll();
        http.authorizeRequests().antMatchers("/tag/savage").permitAll();
        
        http.authorizeRequests().antMatchers("/user/{username}/{id}/up-vote").permitAll();
        http.authorizeRequests().antMatchers("/user/{username}/{id}/down-vote").permitAll();
        http.authorizeRequests().antMatchers("/post/{id}/down-vote").permitAll();
        http.authorizeRequests().antMatchers("/post/{id}/up-vote").permitAll();
        http.authorizeRequests().antMatchers("/index/{id}/down-vote").permitAll();
        http.authorizeRequests().antMatchers("/index/{id}/up-vote").permitAll();

        // Private pages (all other pages)
        http.authorizeRequests().antMatchers("/users/addPost").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/addPost").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/uploadPost").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/addComment").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/reportedPostPage/{id}").hasAnyRole("USER");
        
        
        http.authorizeRequests().antMatchers("/mensaje/nuevo").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/mensajes").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/mensajes/{username}").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/mensajes/eliminados/movido/{id}").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/mensajes/eliminados").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/mensajes/eliminado/{id}").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/mensajes/enviado/{id}").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/mensajes/{username}/enviado").hasAnyRole("USER");
        
        http.authorizeRequests().antMatchers("/headerimg/{fileName}").permitAll();
        http.authorizeRequests().antMatchers("/avatarimg/{fileName}").permitAll();
        
        http.authorizeRequests().antMatchers("/profile/delete/post/{id}").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/settings").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/settings-notifications").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/settings-password").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/edit-profile").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/profile").hasRole("USER");
        http.authorizeRequests().antMatchers("/followers").hasRole("USER");
        http.authorizeRequests().antMatchers("/following").hasRole("USER");
        http.authorizeRequests().antMatchers("/myPosts").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/changeHeader").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/users/changeHeader").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/uploadHeader").hasAnyRole("USER");;
        http.authorizeRequests().antMatchers("/changeAvatar").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/users/changeAvatar").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/uploadAvatar").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/profile/post/{id}/up-vote").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/profile/post/{id}/down-vote").hasAnyRole("USER");
        
        http.authorizeRequests().antMatchers("/profile/delete/post/{id}").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/user/{username}/unfollow").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/user/{username}/follow").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/follow/{username}").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/unfollow/{username}").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/uploadProfileNewData/{id}").hasAnyRole("USER");
          
        http.authorizeRequests().antMatchers("/reports-users").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/reports-posts").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/reports-comments").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/falseReportPost/{id}").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/falseReportUser/{id}").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/falseReportComment/{id}").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/deleteReportPost/{id}").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/deleteReportUser/{id}").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/deleteReportComment/{id}").hasAnyRole("ADMIN");
        
        
        //        
        http.csrf().disable();
        http.headers().frameOptions().sameOrigin();

        //Login form
        http.formLogin().loginPage("/login");
        http.formLogin().usernameParameter("username");
        http.formLogin().passwordParameter("password");
        http.formLogin().defaultSuccessUrl("/index");
        http.formLogin().failureUrl("/loginerror");
        
        // Logout
        http.logout().logoutUrl("/logout");
        http.logout().logoutSuccessUrl("/");
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth)
            throws Exception {
        // Database authentication provider
        auth.authenticationProvider(authenticationProvider);
    	//auth.inMemoryAuthentication().withUser("user").password("pass").roles("USER");
    }

    
}
