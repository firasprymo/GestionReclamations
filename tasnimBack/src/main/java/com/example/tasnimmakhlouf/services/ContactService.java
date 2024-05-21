package com.example.tasnimmakhlouf.services;

import java.util.List;

import com.example.tasnimmakhlouf.entities.Contact;

public interface ContactService {
    Contact addContact(Contact contact);

    List<Contact> getAllContacts();

    void deleteContact(Long id);

    Contact getByContact(Long id);

}
