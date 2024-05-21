package com.example.tasnimmakhlouf.services;

import java.util.List;

import com.example.tasnimmakhlouf.entities.Notification;

public interface NotificationService {

	Notification addNotification(Notification notification) ;
	List <Notification> getAllNotifications();
	void deleteNotification(Long id);
}
