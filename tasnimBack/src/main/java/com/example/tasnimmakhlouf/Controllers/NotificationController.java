package com.example.tasnimmakhlouf.Controllers;

import java.util.List;

import com.example.tasnimmakhlouf.services.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tasnimmakhlouf.entities.Notification;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/notifications")
@RequiredArgsConstructor
public class NotificationController {
	private final NotificationService notificationService;

	@GetMapping("/")
	private List<Notification> getAllNotifications()
	{
		return notificationService.getAllNotifications();
	}
	@PostMapping("/")
	private Notification createNotification(@RequestBody Notification notification)
	{
	return notificationService.addNotification(notification);
	}
	
  
}
