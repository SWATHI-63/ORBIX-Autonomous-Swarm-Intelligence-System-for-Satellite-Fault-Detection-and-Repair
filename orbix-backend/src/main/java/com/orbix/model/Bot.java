package com.orbix.model;

public class Bot {
    private String id;
    private String type;
    private int energy;
    private String task;

    public Bot(String id, String type, int energy, String task) {
        this.id = id;
        this.type = type;
        this.energy = energy;
        this.task = task;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public int getEnergy() { return energy; }
    public void setEnergy(int energy) { this.energy = energy; }
    public String getTask() { return task; }
    public void setTask(String task) { this.task = task; }
}
