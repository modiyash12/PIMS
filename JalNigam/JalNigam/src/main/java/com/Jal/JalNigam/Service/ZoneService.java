package com.Jal.JalNigam.Service;

import com.Jal.JalNigam.Modal.PiuModal;
import com.Jal.JalNigam.Modal.ZoneModal;
import com.Jal.JalNigam.Repository.ZoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ZoneService {

    @Autowired
    private ZoneRepository zoneRepository;

    public List<ZoneModal> getAllZones() {
        return zoneRepository.findAll();
    }

    public Optional<ZoneModal> getZoneById(Long id) {
        return zoneRepository.findById(id);
    }

    public ZoneModal createZone(ZoneModal zone) {
        return zoneRepository.save(zone);
    }

    public ZoneModal updateZone(ZoneModal zone) {
        return zoneRepository.save(zone);
    }

    public void deleteZone(Long id) {
        zoneRepository.deleteById(id);
    }
}
