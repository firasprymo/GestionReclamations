package com.example.tasnimmakhlouf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tasnimmakhlouf.entities.Notification;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

}
