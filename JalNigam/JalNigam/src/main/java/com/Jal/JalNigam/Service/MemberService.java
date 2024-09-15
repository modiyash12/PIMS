package com.Jal.JalNigam.Service;
import com.Jal.JalNigam.Modal.MemberModal;
import com.Jal.JalNigam.Modal.PiuModal;
import com.Jal.JalNigam.Repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    public List<MemberModal> getAllForms() {
        return memberRepository.findAll();
    }

    public MemberModal updateMember(MemberModal member) {
        return memberRepository.save(member);
    }

    public Optional<MemberModal> getFormById(Long id) {
        return memberRepository.findById(id);
    }

    public MemberModal createForm(MemberModal userForm) {
        return memberRepository.save(userForm);
    }

    public void deleteForm(Long id) {
        memberRepository.deleteById(id);
    }
}
