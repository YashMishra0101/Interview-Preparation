console.log("Working");
// 'use strict'


class TeamInfo {
  constructor(
    teamName,
    teamRole,
    teamSize,
    totalTeams,
    teamsNames,
    totalMembers
  ) {
    this.teamName = teamName;
    this.teamRole = teamRole;
    this.teamSize = teamSize;
    this.totalTeams = totalTeams;
    this.teamsNames = teamsNames;
    this.totalMembers = totalMembers;
  }

  teamInfo() {
    return `Team name is ${this.teamName}, Team role ${this.teamRole} and team size is ${this.teamSize}`;
  }
  totalTeamsInfo() {
    return `We have total ${this.totalTeams} teams, ${this.teamsNames} and total ${this.totalMembers} members`;
  }
}

class FrontendTeam extends TeamInfo {
  constructor(teamName, teamRole, teamSize, currentTasks) {
    super(teamName, teamRole, teamSize,null,null,null);
    this.currentTasks = currentTasks;
  }
  getCurrentTasks() {
    return `Frontend Team is currently working on ${this.currentTasks}`;
  }
}

class BackendTeam extends TeamInfo {
  constructor(teamName, teamRole, teamSize, currentTasks) {
    super(teamName, teamRole, teamSize,null,null,null);
    this.currentTasks = currentTasks;
  }
  getCurrentTasks() {
    return `Backend team is currently working on ${this.currentTasks}`;
  }
}

class TotalTeams extends TeamInfo {
  constructor(totalTeams, teamsNames, totalMembers) {
    super(null,null,null,totalTeams, teamsNames, totalMembers);
  }

  getTotalTeamsInfo() {
    return `${super.totalTeamsInfo()}`;
  }
}

let frontendTeam = new FrontendTeam(
  "Frontend Warrior",
  "Handinling Frontend",
  "12 members",
  "Handling User Info Page and Login Page"
);

let backendTeam = new BackendTeam(
  "Backend Warrior",
  "Handinling Backend",
  "10 members",
  "Handling User DOB issue and Login issue"
);

let totalteams = new TotalTeams(
  "2",
  "Frontend Warrior and Backend Warrior",
  "22"
);

console.log(frontendTeam.teamInfo());
console.log(frontendTeam.getCurrentTasks())

console.log(backendTeam.getCurrentTasks());
console.log(backendTeam.teamInfo());

console.log(totalteams.getTotalTeamsInfo());
