package com.Jal.JalNigam.Controller;

import com.Jal.JalNigam.Modal.ProjectDetails;
import com.Jal.JalNigam.Service.ProjectDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/projects")
public class ProjectDetailsController {

    @Autowired
    private ProjectDetailsService projectDetailsService;

    @PostMapping("/")
    public ResponseEntity<ProjectDetails> createProject(@RequestBody ProjectDetails projectDetails) {
        ProjectDetails savedProject = projectDetailsService.createProject(projectDetails);
        return ResponseEntity.ok(savedProject);
    }

    @GetMapping("/")
    public ResponseEntity<List<ProjectDetails>> getAllProjects() {
        List<ProjectDetails> projects = projectDetailsService.getAllProjects();
        return ResponseEntity.ok(projects);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProjectDetails> getProjectById(@PathVariable Long id) {
        Optional<ProjectDetails> project = projectDetailsService.getProjectById(id);
        return project.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/byPiu/{piu}")
    public ResponseEntity<List<ProjectDetails>> getProjectDetailsByPiu(@PathVariable String piu) {
        List<ProjectDetails> projectDetails = projectDetailsService.getProjectsByPiu(piu);
        if (projectDetails.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(projectDetails, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProjectDetails> updateProject(
            @PathVariable Long id, @RequestBody ProjectDetails projectDetails) {
        ProjectDetails updatedProject = projectDetailsService.updateProject(id, projectDetails);
        return ResponseEntity.ok(updatedProject);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        projectDetailsService.deleteProject(id);
        return ResponseEntity.noContent().build();
    }
}
