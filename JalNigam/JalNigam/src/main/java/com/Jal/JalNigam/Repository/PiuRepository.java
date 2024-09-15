package com.Jal.JalNigam.Repository;

import com.Jal.JalNigam.Modal.PiuModal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PiuRepository extends JpaRepository<PiuModal, Long> {
}
