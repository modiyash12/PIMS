package com.Jal.JalNigam.Controller;

import com.Jal.JalNigam.Modal.ZoneModal;
import com.Jal.JalNigam.Modal.ZoneModal;
import com.Jal.JalNigam.Service.ZoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/zones")
public class ZoneController {

    @Autowired
    private ZoneService zoneService;

    @GetMapping("/")
    public ResponseEntity<List<ZoneModal>> getAllPius() {
        List<ZoneModal> pius = zoneService.getAllZones();
        return ResponseEntity.ok(pius);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ZoneModal> getPiuById(@PathVariable Long id) {
        Optional<ZoneModal> piu = zoneService.getZoneById(id);
        return piu.map(p -> new ResponseEntity<>(p, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ZoneModal> updatePiu(@PathVariable Long id, @RequestBody ZoneModal piuDetails) {
        Optional<ZoneModal> piuOptional = zoneService.getZoneById(id);
        if (piuOptional.isPresent()) {
            ZoneModal existingPiu = piuOptional.get();
            existingPiu.setZoneId(piuDetails.getZoneId());
            existingPiu.setZoneName(piuDetails.getZoneName());
            ZoneModal updatedPiu = zoneService.updateZone(existingPiu);
            return new ResponseEntity<>(updatedPiu, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<ZoneModal> createPiu(@RequestBody ZoneModal piu) {
        try {
            ZoneModal createdPiu = zoneService.createZone(piu);
            return new ResponseEntity<>(createdPiu, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePiu(@PathVariable Long id) {
        try {
            zoneService.deleteZone(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
