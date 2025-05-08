<!-- src/views/Employees.vue -->
<template>
  <div class="employees">
   <v-container fluid>
    
    <div class="d-flex align-center mb-6">
      <h1 class="text-h4 mr-2">Employees</h1>
      <v-chip small class="text-main" style="font-weight: 500 !important;
font-size: 12px !important;
line-height:18px !important;">{{ currentTabData.length }}</v-chip>
      <v-spacer></v-spacer>
      <v-btn class="mr-2 btn-export " outlined elevation="0">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.08146 10.2908L8.08146 2.26343" stroke="#0E2354" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.0254 8.33896L8.08139 10.291L6.13739 8.33896" stroke="#0E2354" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.5061 5.00024H12.2121C13.7521 5.00024 15 6.21235 15 7.70892L15 11.2989C15 12.7911 13.7551 14.0002 12.2189 14.0002L3.78865 14.0002C2.24865 14.0002 1 12.7874 1 11.2916L1 7.70083C1 6.20941 2.24562 5.00024 3.78108 5.00024H4.49395" stroke="#0E2354" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        Export
      </v-btn>
      <v-btn class="add-btn"dark>
        <v-icon left class="icon-add mr-2">mdi-plus</v-icon>
        New Employee
      </v-btn>
    </div>

    <v-tabs v-model="activeTab" class="custom-tabs mb-3 position-relative under-line">
      <v-tab>All Employees</v-tab>
      <v-tab>Teams</v-tab>
      <v-tab>Roles</v-tab>
    </v-tabs>
    <v-card-text class="px-0">

<v-row align="center" justify="center mb-2">
  <v-col cols="12">
    <v-text-field
    v-model="search"
    density="compact"
    variant="outlined"
    placeholder="Search Employee by name, role, ID or any related keywords"
    prepend-inner-icon="mdi-magnify"
    hide-details
    class="search-field"
  >
    <template v-slot:append-inner>
<v-btn variant="text" class="filter-btn text-capitalize text-black " style=" border: solid 1px #EAECF0 ; height: 30px;">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Filter
      </v-btn>
      <span class="red-dot"></span>
      <v-btn icon class="icon-btn custom-icon" style="background-color: #efefef !important;"  elevation="0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M9 17.5H19M9 12.5H19M9 7.5H19M5.00195 17.5V17.502L5 17.502V17.5H5.00195ZM5.00195 12.5V12.502L5 12.502V12.5H5.00195ZM5.00195 7.5V7.502L5 7.50195V7.5H5.00195Z" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </v-btn>
      <v-btn icon class="icon-btn custom-icon"  elevation="0">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<path d="M18.3333 7.60002V3.81669C18.3333 2.64169 17.8 2.16669 16.475 2.16669H13.1083C11.7833 2.16669 11.25 2.64169 11.25 3.81669V7.59169C11.25 8.77502 11.7833 9.24169 13.1083 9.24169H16.475C17.8 9.25002 18.3333 8.77502 18.3333 7.60002Z" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3333 16.975V13.6083C18.3333 12.2833 17.8 11.75 16.475 11.75H13.1083C11.7833 11.75 11.25 12.2833 11.25 13.6083V16.975C11.25 18.3 11.7833 18.8333 13.1083 18.8333H16.475C17.8 18.8333 18.3333 18.3 18.3333 16.975Z" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75008 7.60002V3.81669C8.75008 2.64169 8.21675 2.16669 6.89175 2.16669H3.52508C2.20008 2.16669 1.66675 2.64169 1.66675 3.81669V7.59169C1.66675 8.77502 2.20008 9.24169 3.52508 9.24169H6.89175C8.21675 9.25002 8.75008 8.77502 8.75008 7.60002Z" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75008 16.975V13.6083C8.75008 12.2833 8.21675 11.75 6.89175 11.75H3.52508C2.20008 11.75 1.66675 12.2833 1.66675 13.6083V16.975C1.66675 18.3 2.20008 18.8333 3.52508 18.8333H6.89175C8.21675 18.8333 8.75008 18.3 8.75008 16.975Z" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </v-btn>
    </template>
  </v-text-field>
</v-col>

</v-row>


<div class="employees ">
<!-- Tab 1: All Employees -->
<div v-if="activeTab === 0" class="employee-table">
  <!-- Table Header -->
  <div class="table-header">
    <div class="header-cell name-cell">
      <v-checkbox
v-model="selectAll"
label="Name"
:indeterminate="isIndeterminate"
@change="toggleSelectAll"
></v-checkbox>
      </div>
    <div class="header-cell id-cell">Employee ID</div>
    <div class="header-cell role-cell">Role</div>
    <div class="header-cell status-cell">Status</div>
    <div class="header-cell teams-cell">Teams</div>
    <div class="header-cell actions-cell"></div>
  </div>

  <!-- Table Rows -->
  <div v-for="(employee, index) in filteredEmployees" :key="employee.id" class="table-row">
    <!-- Name Cell -->
    <div class="cell name-cell">
      <v-checkbox
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
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
    Previous
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
    Next
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  </button>
</div>
</div>
</v-card-text>
   </v-container>

   
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
h1{
  font-weight: 500 !important;
  font-size: 24px !important ;
  line-height: 28px !important;
  color:#101828 !important;
}
.text-main{
color: #43235C;
}
.btn-export{
border: 1px solid #E6E7EC;
border-radius: 8px;
width: 100px;
height: 44px;
text-transform: capitalize !important;
}
.add-btn{
background-color: #43235C;
text-transform: capitalize !important;
height: 44px;
width: 159px;
color: #ffffff;
}
.icon-add{
display: flex;
justify-content: center;
align-items: center;
border: 1px dashed #ffffff;
border-radius: 50%;
width: 20px;
height: 20px;
}
.employees {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.employee-table {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  width: 100%;
}

/* Header styling */
.table-header {
  display: flex;
  background-color: #F9FAFB;
  padding: 12px 0;
  border-bottom: 1px solid #EAECF0;
}

.header-cell {
  text-align: start !important;
  font-size: 12px;
  font-weight: 500;
  color: #667085;
  padding: 0 16px;
}

/* Column widths */
.name-cell { flex: 1.5; min-width: 200px; }
.id-cell { flex: 1; min-width: 150px; }
.role-cell { flex: 1; min-width: 150px; }
.status-cell { flex: 0.7; min-width: 100px; }
.teams-cell { flex: 1; min-width: 150px; }
.actions-cell { flex: 0.3; min-width: 50px; text-align: right; }

/* Row styling */
.table-row {
  display: flex;
  border-bottom: 1px solid #EAECF0;
  padding: 12px 0;
  align-items: center;
}

.table-row:hover {
  background-color: #F9FAFB;
}

.cell {
  padding: 0 16px;
}

/* Avatar styling */
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin-right: 12px;
}

.name-cell {
  display: flex;
  align-items: center;
}

.employee-info {
  display: flex;
  flex-direction: column;
}

.employee-name {
  font-size: 14px;
  font-weight: 500;
  color: #101828;
}

.employee-email {
  font-size: 12px;
  color: #667085;
}

/* Role styling */
.role-title {
  font-size: 14px;
  font-weight: 500;
  color: #101828;
}

.role-type {
  font-size: 12px;
  color: #667085;
}

/* Status badges */
.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 4px;
}

.active {
  background-color: #ECFDF3;
  color: #027A48;
}

.active .status-dot {
  background-color: #12B76A;
}

.inactive {
  background-color: #FEF3F2;
  color: #B42318;
}

.inactive .status-dot {
  background-color: #F04438;
}

/* Team badges */
.teams-container {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.team-badge {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.team-marketing {
  background-color: #EFF8FF;
  color: #175CD3;
}

.team-design {
  background-color: #FDF2FA;
  color: #C11574;
}

.team-product {
  background-color: #F0F9FF;
  color: #026AA2;
}

.team-engineering {
  background-color: #EFF8FF;
  color: #175CD3;
}

.level-badge {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background-color: #F2F4F7;
  color: #344054;
}

/* Action button */
.action-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #667085;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  margin-top: 16px;
}

.pagination-button {
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 14px;
  color: #344054;
  cursor: pointer;
}

.prev svg {
  margin-right: 8px;
}

.next svg {
  margin-left: 8px;
}

.page-numbers {
  display: flex;
  align-items: center;
  gap: 2px;
}

.page-number {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  font-size: 14px;
  color: #667085;
  cursor: pointer;
}

.page-number.active {
  background-color: #F9F5FF;
  border-color: #D6BBFB;
  color: #7F56D9;
}

.page-ellipsis {
  color: #667085;
  padding: 0 4px;
}
.table-header{
    min-height: 47px !important;
    height: 32px !important;
    padding: 8px !important;
    font-size: 14px !important;
    vertical-align: middle;
    align-items: center;
}
.v-checkbox{
    transform: scale(0.8);
    min-height: 55px !important;
    height: 55px !important;
    font-size: 14px !important;
}
.custom-tabs{
  border-bottom: 1px solid #EAECF0;
  ;
}
.custom-tabs .v-tab {
  text-transform: capitalize;
}
.custom-tabs .v-tab.v-tab--selected {
  color: #43235C !important;
  font-weight: 500 !important;
  /* border-bottom: 2px solid #43235C !important;  */
}
::v-deep(.v-tab__slider) {
  height: 3px !important;
}
.custom-icon{
  border: 1px solid #EAECF0;
  border-radius: 8px !important;
  width: 33px;
  height: 30px;
  margin:3px;
  border-radius: 0px;
}
.outlined-icon {
  color: white; 
  -webkit-text-stroke: 1px black; 
}
.v-tab {
    padding: 10px 0 !important;
}
.under-line::after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--gray-200);
}
</style>