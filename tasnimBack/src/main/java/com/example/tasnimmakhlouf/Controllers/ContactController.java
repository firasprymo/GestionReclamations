package com.example.tasnimmakhlouf.Controllers;

import java.util.List;

import com.example.tasnimmakhlouf.services.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tasnimmakhlouf.entities.Contact;

@RestController
@RequestMapping("/api/v1/contacts")
@RequiredArgsConstructor
public class ContactController {

	private final ContactService contactService;

	@GetMapping("/")
	private List<Contact> getAllContacts()
	{
		return contactService.getAllContacts();
	}
	
	@GetMapping("/{id}")
	private Contact findContact(@PathVariable("id") Long id)
	{
	return contactService.getByContact(id);
	}
	
	
	@PostMapping("/")
	private Contact addContact(@RequestBody Contact contact)
	{
	return contactService.addContact(contact);
	}
	

	
	@DeleteMapping("/{id}")
	private void deleteContact(@PathVariable("id") Long id)
	{
		contactService.deleteContact(id);
	}
}
