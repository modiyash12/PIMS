package com.Jal.JalNigam.Service;

import com.Jal.JalNigam.Modal.PiuModal;
import com.Jal.JalNigam.Repository.PiuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class PiuService {

    @Autowired
    private PiuRepository piuRepository;

    public List<PiuModal> getAllPius() {
        return piuRepository.findAll();
    }

    public Optional<PiuModal> getPiuById(Long id) {
        return piuRepository.findById(id);
    }

    public PiuModal updatePiu(PiuModal piu) {
        return piuRepository.save(piu);
    }

    public PiuModal createPiu(PiuModal piu) {
        return piuRepository.save(piu);
    }

    public void deletePiu(Long id) {
        piuRepository.deleteById(id);
    }
}
