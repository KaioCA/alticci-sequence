package com.api.alticci.controller;

import com.api.alticci.dto.SequenceDTO;
import com.api.alticci.service.SequenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/alticci", produces="application/json")
@CrossOrigin(origins = "*")
public class AlticciController {

    @Autowired
    private SequenceService sequenceService;

    @GetMapping("/{n}")
    public long a(@Valid SequenceDTO sequenceDTO) {
        Long result = sequenceService.a(sequenceDTO.getN());
        return result;
    }
}
