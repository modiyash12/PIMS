package com.Jal.JalNigam.Repository;

import com.Jal.JalNigam.Modal.MemberModal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<MemberModal, Long> {
}
