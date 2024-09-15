package com.Jal.JalNigam.Controller;
import com.Jal.JalNigam.Modal.PiuModal;
import com.Jal.JalNigam.Service.PiuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pius")
public class PiuController {

    @Autowired
    private PiuService piuService;

    @GetMapping("/")
    public ResponseEntity<List<PiuModal>> getAllPius() {
        List<PiuModal> pius = piuService.getAllPius();
        return ResponseEntity.ok(pius);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PiuModal> getPiuById(@PathVariable Long id) {
        Optional<PiuModal> piu = piuService.getPiuById(id);
        return piu.map(p -> new ResponseEntity<>(p, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PiuModal> updatePiu(@PathVariable Long id, @RequestBody PiuModal piuDetails) {
        Optional<PiuModal> piuOptional = piuService.getPiuById(id);
        if (piuOptional.isPresent()) {
            PiuModal existingPiu = piuOptional.get();
            existingPiu.setPiuId(piuDetails.getPiuId());
            existingPiu.setPiuName(piuDetails.getPiuName());
            PiuModal updatedPiu = piuService.updatePiu(existingPiu);
            return new ResponseEntity<>(updatedPiu, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<PiuModal> createPiu(@RequestBody PiuModal piu) {
        try {
            PiuModal createdPiu = piuService.createPiu(piu);
            return new ResponseEntity<>(createdPiu, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePiu(@PathVariable Long id) {
        try {
            piuService.deletePiu(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
