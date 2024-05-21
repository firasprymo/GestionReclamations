package com.example.tasnimmakhlouf.services.implementation;

import java.util.List;

import com.example.tasnimmakhlouf.repository.NotificationRepository;
import com.example.tasnimmakhlouf.services.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tasnimmakhlouf.entities.Notification;

@Service
@RequiredArgsConstructor
public class NotificationServiceImpl implements NotificationService {


    private final NotificationRepository notificationrepository;

    public Notification addNotification(Notification notification) {
        return notificationrepository.save(notification);
    }

    public List<Notification> getAllNotifications() {
        return notificationrepository.findAll();
    }


    public void deleteNotification(Long id) {
        notificationrepository.deleteById(id);
    }
}
