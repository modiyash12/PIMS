package com.Jal.JalNigam.Controller;

import com.Jal.JalNigam.Modal.MemberModal;
import com.Jal.JalNigam.Service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/forms")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @GetMapping
    public ResponseEntity<List<MemberModal>> getAllMembers() {
        List<MemberModal> members = memberService.getAllForms();
        return ResponseEntity.ok(members);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MemberModal> getMemberById(@PathVariable Long id) {
        Optional<MemberModal> members = memberService.getFormById(id);
        return members.map(p -> new ResponseEntity<>(p, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MemberModal> updateMember(@PathVariable Long id, @RequestBody MemberModal memberDetails) {
        Optional<MemberModal> memberOptional = memberService.getFormById(id);
        if (memberOptional.isPresent()) {
            MemberModal existingMember = memberOptional.get();

            MemberModal updatedmember = memberService.updateMember(existingMember);
            return new ResponseEntity<>(updatedmember, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<MemberModal> createMember(@RequestBody MemberModal member) {
        try {
            MemberModal createdMember = memberService.createForm(member);
            return new ResponseEntity<>(createdMember, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMember(@PathVariable Long id) {
        try {
            memberService.deleteForm(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
