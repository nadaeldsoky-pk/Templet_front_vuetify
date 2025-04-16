<template>
   
   <div class="employees">
        <!-- Tab 1: All Employees -->
        <div v-if="activeTab === 0" class="employee-table">
          <!-- Table Header -->
          <div class="table-header">
            <div class="header-cell name-cell">
              <v-checkbox
              class="datatable-checkbox"
  v-model="selectAll"
  label="Name"
  :indeterminate="isIndeterminate"
  @change="toggleSelectAll"
></v-checkbox>
              </div>
            <div class="header-cell id-cell">Employee ID</div>
            <div class="header-cell role-cell">Role <v-icon
        class="ml-1"
        color="#667085"
        v-bind="attrs"
        v-on="on"
        size="15"
      >
        mdi-help-circle-outline
      </v-icon></div>
            <div class="header-cell status-cell">Status</div>
            <div class="header-cell teams-cell">Teams</div>
            <div class="header-cell actions-cell"></div>
          </div>

          <!-- Table Rows -->
          <div v-for="(employee, index) in filteredEmployees" :key="employee.id" class="table-row">
            <!-- Name Cell -->
            <div class="cell name-cell">
              <v-checkbox
              class="datatable-checkbox"
  v-model="selectedEmployees"
  :value="employee.id"
  @change="updateSelectAll"
>
  <template v-slot:label>
    <div class="avatar" :style="{ backgroundColor: getAvatarColor(employee.name) }">
      {{ getInitials(employee.name) }}
    </div>
  </template>
</v-checkbox>
              
              <div class="employee-info">
                <div class="employee-name">{{ employee.name }}</div>
                <div class="employee-email">{{ employee.email }}</div>
              </div>
            </div>

            <!-- ID Cell -->
            <div class="cell id-cell">{{ employee.id }}</div>

            <!-- Role Cell -->
            <div class="cell role-cell">
              <div class="role-title">{{ employee.role }}</div>
              <div class="role-type">{{ employee.position }}</div>
            </div>

            <!-- Status Cell -->
            <div class="cell status-cell">
              <div class="status-badge" :class="employee.status === 'Active' ? 'active' : 'inactive'">
                <span class="status-dot"></span>
                {{ employee.status }}
              </div>
            </div>

            <!-- Teams Cell -->
            <div class="cell teams-cell">
              <div class="teams-container">
                <span 
                  v-for="(team, teamIndex) in employee.teams" 
                  :key="teamIndex" 
                  class="team-badge"
                  :class="`team-${team.toLowerCase()}`"
                >
                  {{ team }}
                </span>
                <span v-if="employee.level" class="level-badge">+{{ employee.level }}</span>
              </div>
            </div>

            <!-- Actions Cell -->
            <div class="cell actions-cell">
              <button class="action-button">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Tab 2: Teams -->
        <div v-if="activeTab === 1" class="employee-table">
          <!-- Table Header -->
          <div class="table-header">
            <div class="header-cell name-cell">Team Name</div>
            <div class="header-cell id-cell">Department</div>
            <div class="header-cell role-cell">Team Lead</div>
            <div class="header-cell status-cell">Status</div>
            <div class="header-cell teams-cell">Members</div>
            <div class="header-cell actions-cell"></div>
          </div>

          <!-- Table Rows -->
          <div v-for="(team, index) in filteredTeams" :key="index" class="table-row">
            <!-- Name Cell -->
            <div class="cell name-cell">
              <div class="avatar" :style="{ backgroundColor: getAvatarColor(team.name) }">
                {{ getInitials(team.name) }}
              </div>
              <div class="employee-info">
                <div class="employee-name">{{ team.name }}</div>
                <div class="employee-email">{{ team.code }}</div>
              </div>
            </div>

            <!-- Department Cell -->
            <div class="cell id-cell">{{ team.department }}</div>

            <!-- Team Lead Cell -->
            <div class="cell role-cell">
              <div class="role-title">{{ team.lead }}</div>
              <div class="role-type">{{ team.leadTitle }}</div>
            </div>

            <!-- Status Cell -->
            <div class="cell status-cell">
              <div class="status-badge" :class="team.active ? 'active' : 'inactive'">
                <span class="status-dot"></span>
                {{ team.active ? 'Active' : 'Inactive' }}
              </div>
            </div>

            <!-- Members Cell -->
            <div class="cell teams-cell">
              <div class="teams-container">
                <span class="level-badge">{{ team.memberCount }} Members</span>
              </div>
            </div>

            <!-- Actions Cell -->
            <div class="cell actions-cell">
              <button class="action-button">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Tab 3: Roles -->
        <div v-if="activeTab === 2" class="employee-table">
          <!-- Table Header -->
          <div class="table-header">
            <div class="header-cell name-cell">Role</div>
            <div class="header-cell id-cell">Department</div>
            <div class="header-cell role-cell">Level</div>
            <div class="header-cell status-cell">Status</div>
            <div class="header-cell teams-cell">Assigned</div>
            <div class="header-cell actions-cell"></div>
          </div>

          <!-- Table Rows -->
          <div v-for="(role, index) in filteredRoles" :key="index" class="table-row">
            <!-- Role Name Cell -->
            <div class="cell name-cell">
              <div class="avatar" :style="{ backgroundColor: getAvatarColor(role.roleTitle) }">
                {{ getInitials(role.roleTitle) }}
              </div>
              <div class="employee-info">
                <div class="employee-name">{{ role.roleTitle }}</div>
                <div class="employee-email">{{ role.code }}</div>
              </div>
            </div>

            <!-- Department Cell -->
            <div class="cell id-cell">{{ role.department }}</div>

            <!-- Level Cell -->
            <div class="cell role-cell">
              <div class="role-title">Level {{ role.level }}</div>
              <div class="role-type">{{ role.experienceRequired }}</div>
            </div>

            <!-- Status Cell -->
            <div class="cell status-cell">
              <div class="status-badge" :class="role.isActive ? 'active' : 'inactive'">
                <span class="status-dot"></span>
                {{ role.isActive ? 'Active' : 'Inactive' }}
              </div>
            </div>

            <!-- Assigned Cell -->
            <div class="cell teams-cell">
              <div class="teams-container">
                <span 
                  v-for="(skill, skillIndex) in role.requiredSkills" 
                  :key="skillIndex" 
                  class="team-badge"
                  :class="`team-${getSkillClass(skill)}`"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Actions Cell -->
            <div class="cell actions-cell">
              <button class="action-button">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="pagination">
          <button class="pagination-button prev">
            <v-icon left>mdi-arrow-left</v-icon>
            <span class="ml-2">Previous</span>
          </button>
          <div class="page-numbers">
            <button class="page-number active">1</button>
            <button class="page-number">2</button>
            <button class="page-number">3</button>
            <span class="page-ellipsis">...</span>
            <button class="page-number">8</button>
            <button class="page-number">9</button>
            <button class="page-number">10</button>
          </div>
          <button class="pagination-button next">
            <span class="mr-2">Next</span>
            <v-icon left>mdi-arrow-right</v-icon>
          </button>
        </div>
      </div>
  </template>
  <script>
  export default {
    name: 'Employees',
    data() {
      return {
        search: '',
        loading: false,
        page: 1,
        viewType: 0,
        activeTab: 0,
        selectAll: false,
        selectedEmployees: [],
        
        // Tab 1: Employee data
        employees: [
          { 
            name: 'Tanner Finsha', 
            email: 'TannerFinsha@gmail.com', 
            id: '#23454GH6J7YT6', 
            role: 'Product Designer',
            position: 'Full-time', 
            status: 'Active', 
            teams: ['Marketing', 'Design'],
            level: '1'
          },
          { 
            name: 'Emelia Winner', 
            email: 'EmeliaWinner@gmail.com', 
            id: '#23454GH6J7YT6', 
            role: 'Product Designer',
            position: 'Full-time', 
            status: 'Active', 
            teams: ['Product', 'Design'],
            level: '1'
          },
          { 
            name: 'Tassy Omah', 
            email: 'TassyOmah@gmail.com', 
            id: '#23454GH6J7YT6', 
            role: 'Product Designer',
            position: 'Associate', 
            status: 'Inactive', 
            teams: ['Product']
          },
          { 
            name: 'James Muriel', 
            email: 'JamesMuriel@glysen.france', 
            id: '#23454GH6J7YT6', 
            role: 'Product Designer',
            position: 'Full-time', 
            status: 'Inactive', 
            teams: ['Engineering', 'Design']
          },
          { 
            name: 'Emelia Winner', 
            email: 'EmeliaWinner@gmail.com', 
            id: '#23454GH6J7YT6', 
            role: 'Frontend Engineer',
            position: 'Part-time', 
            status: 'Inactive', 
            teams: ['Product', 'Design'],
            level: '3'
          },
          { 
            name: 'Tassy Omah', 
            email: 'TassyOmah@gmail.com', 
            id: '#23454GH6J7YT6', 
            role: 'Backend Engineer',
            position: 'Part-time', 
            status: 'Active', 
            teams: ['Engineering', 'Design']
          },
          { 
            name: 'James Muriel', 
            email: 'JamesMuriel@glysen.france', 
            id: '#23454GH6J7YT6', 
            role: 'Backend Engineer',
            position: 'Part-time', 
            status: 'Active', 
            teams: ['Product', 'Design'],
            level: '6'
          },
          { 
            name: 'Emelia Winner', 
            email: 'EmeliaWinner@gmail.com', 
            id: '#23454GH6J7YT6', 
            role: 'Sales Specialist',
            position: 'Part-time', 
            status: 'Inactive', 
            teams: ['Product', 'Design'],
            level: '4'
          }
        ],
        
        // Tab 2: Teams data
        teams: [
          {
            name: 'Marketing Team',
            code: 'MKT-001',
            department: 'Marketing',
            lead: 'Sarah Johnson',
            leadTitle: 'Marketing Director',
            active: true,
            memberCount: 12
          },
          {
            name: 'Design Team',
            code: 'DSG-002',
            department: 'Product',
            lead: 'Mike Chen',
            leadTitle: 'Design Manager',
            active: true,
            memberCount: 8
          },
          {
            name: 'Frontend Dev',
            code: 'DEV-003',
            department: 'Engineering',
            lead: 'Alex Morgan',
            leadTitle: 'Frontend Lead',
            active: true,
            memberCount: 6
          },
          {
            name: 'Backend Dev',
            code: 'DEV-004',
            department: 'Engineering',
            lead: 'Jasmine Torres',
            leadTitle: 'Backend Lead',
            active: true,
            memberCount: 7
          },
          {
            name: 'QA Team',
            code: 'QA-005',
            department: 'Engineering',
            lead: 'Robert Smith',
            leadTitle: 'QA Manager',
            active: false,
            memberCount: 5
          },
          {
            name: 'Sales Team',
            code: 'SLS-006',
            department: 'Sales',
            lead: 'Emily Clark',
            leadTitle: 'Sales Director',
            active: true,
            memberCount: 15
          },
          {
            name: 'Customer Support',
            code: 'SUP-007',
            department: 'Operations',
            lead: 'David Kim',
            leadTitle: 'Support Manager',
            active: true,
            memberCount: 10
          },
          {
            name: 'Data Science',
            code: 'DS-008',
            department: 'Engineering',
            lead: 'Olivia Wilson',
            leadTitle: 'Data Science Lead',
            active: false,
            memberCount: 4
          }
        ],
        
        // Tab 3: Roles data
        roles: [
          {
            roleTitle: 'Product Designer',
            code: 'PD-001',
            department: 'Product',
            level: '1',
            experienceRequired: '0-2 years',
            isActive: true,
            requiredSkills: ['Design', 'Product']
          },
          {
            roleTitle: 'Senior Designer',
            code: 'PD-002',
            department: 'Product',
            level: '3',
            experienceRequired: '3-5 years',
            isActive: true,
            requiredSkills: ['Design', 'Marketing']
          },
          {
            roleTitle: 'Frontend Engineer',
            code: 'FE-001',
            department: 'Engineering',
            level: '2',
            experienceRequired: '2-3 years',
            isActive: true,
            requiredSkills: ['Engineering', 'Product']
          },
          {
            roleTitle: 'Backend Engineer',
            code: 'BE-001',
            department: 'Engineering',
            level: '2',
            experienceRequired: '2-3 years',
            isActive: true,
            requiredSkills: ['Engineering']
          },
          {
            roleTitle: 'Full Stack Engineer',
            code: 'FSE-001',
            department: 'Engineering',
            level: '4',
            experienceRequired: '5+ years',
            isActive: false,
            requiredSkills: ['Engineering', 'Product']
          },
          {
            roleTitle: 'UX Researcher',
            code: 'UXR-001',
            department: 'Product',
            level: '2',
            experienceRequired: '2-3 years',
            isActive: true,
            requiredSkills: ['Design', 'Marketing']
          },
          {
            roleTitle: 'QA Specialist',
            code: 'QA-001',
            department: 'Engineering',
            level: '1',
            experienceRequired: '0-2 years',
            isActive: true,
            requiredSkills: ['Engineering']
          },
          {
            roleTitle: 'Product Manager',
            code: 'PM-001',
            department: 'Product',
            level: '3',
            experienceRequired: '3-5 years',
            isActive: true,
            requiredSkills: ['Product', 'Marketing']
          }
        ]
      }
    },
    computed: {
      // Get current data based on active tab
      currentTabData() {
        if (this.activeTab === 0) return this.filteredEmployees;
        if (this.activeTab === 1) return this.filteredTeams;
        if (this.activeTab === 2) return this.filteredRoles;
        return [];
      },
      
      // Filtered data for Employees tab
      filteredEmployees() {
        if (!this.search) return this.employees;
        
        return this.employees.filter(employee => {
          return employee.name.toLowerCase().includes(this.search.toLowerCase()) ||
                  employee.id.toLowerCase().includes(this.search.toLowerCase()) ||
                  employee.role.toLowerCase().includes(this.search.toLowerCase()) ||
                  employee.email.toLowerCase().includes(this.search.toLowerCase());
        });
      },
      
      // Filtered data for Teams tab
      filteredTeams() {
        if (!this.search) return this.teams;
        
        return this.teams.filter(team => {
          return team.name.toLowerCase().includes(this.search.toLowerCase()) ||
                  team.department.toLowerCase().includes(this.search.toLowerCase()) ||
                  team.lead.toLowerCase().includes(this.search.toLowerCase()) ||
                  team.code.toLowerCase().includes(this.search.toLowerCase());
        });
      },
      
      // Filtered data for Roles tab
      filteredRoles() {
        if (!this.search) return this.roles;
        
        return this.roles.filter(role => {
          return role.roleTitle.toLowerCase().includes(this.search.toLowerCase()) ||
                  role.department.toLowerCase().includes(this.search.toLowerCase()) ||
                  role.level.toString().includes(this.search.toLowerCase()) ||
                  role.code.toLowerCase().includes(this.search.toLowerCase());
        });
      },
      isIndeterminate() {
        return this.selectedEmployees.length > 0 && this.selectedEmployees.length < this.filteredEmployees.length;
      }
    },
    methods: {
      getInitials(name) {
        return name.split(' ').map(n => n[0]).join('');
      },
      getAvatarColor(name) {
        // Generate more pastel colors like in the image
        const colors = ['#F4ABBA', '#A7C7E7', '#FAC898', '#C1E1C1', '#B19CD9'];
        const charCode = name.charCodeAt(0) + name.charCodeAt(name.length - 1);
        return colors[charCode % colors.length];
      },
      getSkillClass(skill) {
        // Map skills to existing team classes for consistent coloring
        const skillMap = {
          'Design': 'design',
          'Marketing': 'marketing',
          'Product': 'product',
          'Engineering': 'engineering',
          'Sales': 'marketing',
          'Support': 'product'
        };
        
        return skillMap[skill] || 'design';
      },
  
     updateSelectAll() {
      if (this.selectedEmployees.length === this.employees.length) {
        this.selectAll = true;
      } else if (this.selectedEmployees.length > 0) {
        this.selectAll = false;
      }
    },
  
   
    toggleSelectAll() {
      if (this.selectAll) {
        this.selectedEmployees = this.employees.map(emp => emp.id);
      } else {
        this.selectedEmployees = [];
      }
    }
    }
  }
  </script>
 <style scoped>

 

 
 </style>
  
  