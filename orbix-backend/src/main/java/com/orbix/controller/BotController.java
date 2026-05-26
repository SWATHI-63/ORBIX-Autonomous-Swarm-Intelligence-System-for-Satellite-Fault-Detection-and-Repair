package com.orbix.controller;

import com.orbix.model.Bot;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bots")
public class BotController {

    private List<Bot> bots = new ArrayList<>();

    public BotController() {
        bots.add(new Bot("Bot-01", "Scout", 85, "Patrol Sector 4"));
        bots.add(new Bot("Bot-02", "Repair", 42, "Fixing Sat-Alpha"));
        bots.add(new Bot("Bot-03", "Relay", 95, "Comm Relay Mode"));
        bots.add(new Bot("Bot-04", "Heavy", 12, "Returning to Base"));
    }

    @GetMapping
    public List<Bot> getBots() {
        return bots;
    }

    @PostMapping("/{id}/override")
    public Bot overrideBot(@PathVariable String id) {
        Optional<Bot> botOpt = bots.stream().filter(b -> b.getId().equals(id)).findFirst();
        if (botOpt.isPresent()) {
            Bot bot = botOpt.get();
            if (bot.getTask().contains("Manual")) {
                bot.setTask("Awaiting Directions...");
            } else {
                bot.setTask("Manual Override Initiated...");
            }
            return bot;
        }
        throw new RuntimeException("Bot not found");
    }
}
