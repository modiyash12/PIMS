package com.Jal.JalNigam.Repository;

import com.Jal.JalNigam.Modal.ZoneModal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZoneRepository extends JpaRepository<ZoneModal, Long> {
}