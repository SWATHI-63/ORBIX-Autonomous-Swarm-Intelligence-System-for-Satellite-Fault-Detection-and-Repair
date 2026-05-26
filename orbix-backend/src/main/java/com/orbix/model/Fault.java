package com.orbix.model;

public class Fault {
    private String id;
    private String target;
    private String severity;
    private String time;
    private String status;

    public Fault(String id, String target, String severity, String time, String status) {
        this.id = id;
        this.target = target;
        this.severity = severity;
        this.time = time;
        this.status = status;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getTarget() { return target; }
    public void setTarget(String target) { this.target = target; }
    public String getSeverity() { return severity; }
    public void setSeverity(String severity) { this.severity = severity; }
    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
