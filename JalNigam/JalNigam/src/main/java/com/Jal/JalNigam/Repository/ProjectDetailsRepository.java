package com.Jal.JalNigam.Repository;
import com.Jal.JalNigam.Modal.ProjectDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectDetailsRepository extends JpaRepository<ProjectDetails, Long> {
    List<ProjectDetails> findByPiu(String piu);

}
