package com.orbix.controller;

import com.orbix.model.Fault;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/faults")
public class FaultController {

    private List<Fault> faults = new ArrayList<>();

    public FaultController() {
        faults.add(new Fault("F-102", "Sat-Alpha", "Critical", "10:04:12", "Unresolved"));
        faults.add(new Fault("F-103", "Sat-Beta", "Moderate", "09:42:01", "Assigned"));
        faults.add(new Fault("F-104", "Sat-Delta", "Low", "08:15:33", "Resolved"));
        faults.add(new Fault("F-105", "Sat-Gamma", "High", "07:50:11", "In Progress"));
    }

    @GetMapping
    public List<Fault> getFaults() {
        return faults;
    }
}
