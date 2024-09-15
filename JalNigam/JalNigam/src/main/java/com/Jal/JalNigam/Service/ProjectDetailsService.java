package com.Jal.JalNigam.Service;

import com.Jal.JalNigam.Modal.ProjectDetails;
import com.Jal.JalNigam.Repository.ProjectDetailsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectDetailsService {

    @Autowired
    private ProjectDetailsRepository projectDetailsRepository;

    public ProjectDetails createProject(ProjectDetails projectDetails) {
        return projectDetailsRepository.save(projectDetails);
    }

    public List<ProjectDetails> getAllProjects() {
        return projectDetailsRepository.findAll();
    }

    public Optional<ProjectDetails> getProjectById(Long id) {
        return projectDetailsRepository.findById(id);
    }

    public List<ProjectDetails> getProjectsByPiu(String piu) {
        return projectDetailsRepository.findByPiu(piu);
    }

    public ProjectDetails updateProject(Long id, ProjectDetails updatedProject) {
        return projectDetailsRepository.findById(id)
                .map(project -> {
                    project.setAgreementNoDate(updatedProject.getAgreementNoDate());
                    project.setProjectName(updatedProject.getProjectName());
                    project.setDistrict(updatedProject.getDistrict());
                    project.setNoOfVillages(updatedProject.getNoOfVillages());
                    project.setSource(updatedProject.getSource());
                    project.setCapacityOfWaterTreatmentPlant(updatedProject.getCapacityOfWaterTreatmentPlant());
                    project.setProjectPopulation(updatedProject.getProjectPopulation());
                    project.setNoOfHousehold(updatedProject.getNoOfHousehold());
                    project.setProjectCost(updatedProject.getProjectCost());
                    project.setProjectCostAfterVariation(updatedProject.getProjectCostAfterVariation());
                    project.setFundingAgency(updatedProject.getFundingAgency());
                    project.setProjectDuration(updatedProject.getProjectDuration());
                    project.setProjectStartDate(updatedProject.getProjectStartDate());
                    project.setProjectCompletionDate(updatedProject.getProjectCompletionDate());
                    project.setExpectedCompletionDate(updatedProject.getExpectedCompletionDate());
                    project.setAgencyName(updatedProject.getAgencyName());
                    project.setManagerName(updatedProject.getManagerName());
                    project.setManagerContact(updatedProject.getManagerContact());
                    project.setFinancialProgress(updatedProject.getFinancialProgress());
                    project.setPhysicalProgress(updatedProject.getPhysicalProgress());
                    project.setProjectStatus(updatedProject.getProjectStatus());
                    project.setWaterSupplyStartDate(updatedProject.getWaterSupplyStartDate());
                    return projectDetailsRepository.save(project);
                })
                .orElseThrow(() -> new EntityNotFoundException("Project with ID " + id + " not found"));

    }

    public void deleteProject(Long id) {
        projectDetailsRepository.deleteById(id);
    }
}
