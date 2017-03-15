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

        // Private pages (all other pages)
        http.authorizeRequests().antMatchers("/settings*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/settings-notifications*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/settings-password*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/edit-profile").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/profile").hasRole("USER");
        http.authorizeRequests().antMatchers("/followers").hasRole("USER");
        http.authorizeRequests().antMatchers("/following").hasRole("USER");
        http.authorizeRequests().antMatchers("/myPosts").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/followers").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/following").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/users/addPost").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/mensaje/nuevo").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/mensajes").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/mensajes/*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/mensajes/eliminados/movido/*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/mensajes/eliminados*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/mensajes/enviado*").hasAnyRole("USER");
        
        http.authorizeRequests().antMatchers("/changeHeader").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/users/changeHeader").hasAnyRole("USER")
        http.authorizeRequests().antMatchers("/uploadHeader").hasAnyRole("USER");;
        http.authorizeRequests().antMatchers("/changeAvatar").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/users/changeAvatar").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/uploadAvatar").hasAnyRole("USER");
        
        http.authorizeRequests().antMatchers("/uploadPost").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/profile/delete/post/{id}").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/addComment").hasAnyRole("USER");
        
        
        http.authorizeRequests().antMatchers("/reports-users*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/reports-posts*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/reports-comments*").hasAnyRole("ADMIN");
        
        
        //
        http.authorizeRequests().antMatchers("/user-design-profile*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/user-index*").hasAnyRole("USER");
        
        http.authorizeRequests().antMatchers("/user-postIndex*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/user-profile-followers*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/user-profile-following*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/user-profile-myPosts*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/user-profile*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/user-Settings-notifications*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/user-Settings-password*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/user-Settings*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/user-users*").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/users*").hasAnyRole("USER");
        
        http.authorizeRequests().antMatchers("/admin-addPost*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-design-profile*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-index*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-mensajeNuevo*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-mensajes*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-mensajesConversacion*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-postIndex*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-profile-followers*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-profile-following*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-profile-report-comments*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-profile-report-post*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-profile-users*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-Settings-notifications*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-Settings-password*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/adminSettings*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-users*").hasAnyRole("ADMIN");
        
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
