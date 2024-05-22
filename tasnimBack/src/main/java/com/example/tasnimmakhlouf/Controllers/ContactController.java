package com.example.tasnimmakhlouf.Controllers;

import com.example.tasnimmakhlouf.Auth.ContactRequest;
import com.example.tasnimmakhlouf.entities.Categories;
import com.example.tasnimmakhlouf.entities.Contact;
import com.example.tasnimmakhlouf.services.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/contacts")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @GetMapping("/")
    private ResponseEntity<List<Contact>> getAllContacts() {
        return ResponseEntity.ok(contactService.getAllContacts());
    }
    @PostMapping("/")
    private ResponseEntity<Contact> addContact(@RequestBody ContactRequest contact) {
        contactService.addContact(contact);
        return ResponseEntity.ok(contactService.addContact(contact));
    }
    @PatchMapping("/edit")
    private Contact updateContact(@RequestBody ContactRequest contact) {
        return contactService.updateContact(contact);
    }
    @GetMapping("/get-all-contacts")
    private ResponseEntity<Page<Contact>> getAllContactsPage(Pageable pageable) {
        return ResponseEntity.ok(contactService.getAllContactsPage(pageable));
    }

    @GetMapping("/{id}")
    private ResponseEntity<Contact> findContact(@PathVariable("id") Long id) {
        return ResponseEntity.ok(contactService.getByContact(id));
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Void> deleteContact(@PathVariable("id") Long id) {
        contactService.deleteContact(id);
        return ResponseEntity.ok().build();
    }

}
