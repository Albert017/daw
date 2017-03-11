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

        // Private pages (all other pages)
        http.authorizeRequests().antMatchers("/user-addPost*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-design-profile*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-index*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-mensajeNuevo*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-mensajes*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-mensajesConversacion*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-postIndex*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-profile-followers*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-profile-following*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-profile-myPosts*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-profile*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-Settings-notifications*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-Settings-password*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-Settings*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/user-users*").hasAnyRole("USER_ROLE");
        http.authorizeRequests().antMatchers("/users*").hasAnyRole("USER_ROLE");
        
        http.authorizeRequests().antMatchers("/admin-addPost*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-design-profile*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-index*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-mensajeNuevo*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-mensajes*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-mensajesConversacion*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-postIndex*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-profile-followers*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-profile-following*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-profile-report-comments*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-profile-report-post*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-profile-users*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-Settings-notifications*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-Settings-password*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/adminSettings*").hasAnyRole("ADMIN_ROLE");
        http.authorizeRequests().antMatchers("/admin-users*").hasAnyRole("ADMIN_ROLE");
        
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
    	//auth.inMemoryAuthentication().withUser("user").password("pass").roles("USER_ROLE");
    }

    
}
