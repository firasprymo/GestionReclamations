package com.example.tasnimmakhlouf.services.implementation;

import java.util.List;
import java.util.Optional;

import com.example.tasnimmakhlouf.Auth.ContactRequest;
import com.example.tasnimmakhlouf.entities.Utilisateur;
import com.example.tasnimmakhlouf.repository.ContactRepository;
import com.example.tasnimmakhlouf.services.ContactService;
import com.example.tasnimmakhlouf.services.UtilisateurService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Component;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.tasnimmakhlouf.entities.Contact;

@Service
@RequiredArgsConstructor
@Slf4j
public class ContactServiceImpl implements ContactService {


    private final ContactRepository contactRepository;
    private final UtilisateurService utilisateurService;

    public Contact addContact(ContactRequest contact) {
        try {
       Utilisateur utilisateur= utilisateurService.getByUtilisateur(contact.getUserId());

            Contact contactFinal = Contact.builder()
                    .user(utilisateur)
                    .name(contact.getName())
                    .email(contact.getEmail())
                    .phone(contact.getPhone())
                            .build();
          return   contactRepository.save(contactFinal);
        } catch (Exception e) {
            log.warn("Exception" + e);
            throw new IllegalArgumentException("");
        }
    }

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    public Page<Contact> getAllContactsPage(Pageable pageable) {
        return contactRepository.findAll(pageable);
    }


    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }

    public Contact getByContact(Long id) {
        return contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));
    }

    @Override
    public Contact updateContact(ContactRequest  contact) {
        Utilisateur utilisateur= utilisateurService.getByUtilisateur(contact.getUserId());

        Optional<Contact> contactOptional = contactRepository.findById(contact.getId());
        if (contactOptional.isPresent()) {
            Contact contactFinal = contactOptional.get();
            contactFinal.setEmail(contact.getEmail());
            contactFinal.setName(contact.getName());
            contactFinal.setPhone(  contact.getPhone());
            contactFinal.setUser(utilisateur);
            return contactRepository.save(contactFinal);
        } else {
            // Supplier not found, you may choose to throw an exception or handle it accordingly.
            throw new UsernameNotFoundException("Categories with ID " + contact.getId() + " not found.");
        }
    }

}
