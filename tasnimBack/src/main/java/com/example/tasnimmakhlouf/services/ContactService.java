package com.example.tasnimmakhlouf.services;

import java.util.List;

import com.example.tasnimmakhlouf.Auth.ContactRequest;
import com.example.tasnimmakhlouf.entities.Categories;
import com.example.tasnimmakhlouf.entities.Contact;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ContactService {
    Contact addContact(ContactRequest contact);
    Contact updateContact(ContactRequest contact);

    List<Contact> getAllContacts();
    Page<Contact> getAllContactsPage(Pageable pageable);

    void deleteContact(Long id);

    Contact getByContact(Long id);

}
