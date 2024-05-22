package com.example.tasnimmakhlouf.WebConfig;

import org.springframework.http.MediaType;
import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.constraints.NotNull;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	private final JwtService jwtService;
	private final UserDetailsService userDetailsService;

    public JwtAuthenticationFilter(JwtService jwtService, UserDetailsService userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }

    @Override
	protected void doFilterInternal(@NotNull HttpServletRequest request, @NotNull HttpServletResponse response,
			@NotNull FilterChain filterChain) throws ServletException, IOException {
		response.addHeader("Access-Control-Allow-Headers", "*");
		response.addHeader("Access-Control-Expose-Headers", "*");
		response.addHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS,DELETE,PUT,PATCH");
		if (request.getMethod().equals("OPTIONS")) {
			response.setStatus(HttpServletResponse.SC_OK);

		} else if (request.getServletPath().contains("/api/v1/auth")
				|| request.getRequestURI().equals("/api/v1/services-types/")) {
			filterChain.doFilter(request, response);
			return;

		} else {
			try {

				final String authHeader = request.getHeader(SecurityConstants.HEADER_STRING);

				final String jwt;
				final String userEmail;
				if (authHeader == null || !authHeader.startsWith(SecurityConstants.TOKEN_PREFIX)) {
					filterChain.doFilter(request, response);
					return;
				}
				jwt = authHeader.substring(7);
				userEmail = jwtService.extractUsername(jwt);
				if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
					UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
					if (jwtService.isTokenValid(jwt, userDetails)) {
						UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
								userDetails, null, userDetails.getAuthorities());
						authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
						SecurityContextHolder.getContext().setAuthentication(authToken);
					}
				}
				filterChain.doFilter(request, response);
			} catch (Exception e) {
				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
				response.setContentType(MediaType.APPLICATION_JSON_VALUE);
				String errorMessage = "Invalid or expired token auth";
				response.getWriter().write("{\"message\": \"" + errorMessage + "\"}");
			}
		}

	}
}
