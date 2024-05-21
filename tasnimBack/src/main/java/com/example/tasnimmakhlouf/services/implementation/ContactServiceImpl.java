package com.example.tasnimmakhlouf.services.implementation;

import java.util.List;

import com.example.tasnimmakhlouf.repository.ContactRepository;
import com.example.tasnimmakhlouf.services.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.tasnimmakhlouf.entities.Contact;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {


    private final ContactRepository contactrepository;

    public Contact addContact(Contact contact) {
        return contactrepository.save(contact);
    }

    public List<Contact> getAllContacts() {
        return contactrepository.findAll();
    }


    public void deleteContact(Long id) {
        contactrepository.deleteById(id);
    }

    public Contact getByContact(Long id) {
        return contactrepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));
    }


}
