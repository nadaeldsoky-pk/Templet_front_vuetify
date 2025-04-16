<template>
    <v-navigation-drawer :model-value="drawer"  :rail="true"
    :expand-on-hover="true" @update:model-value="$emit('update:drawer', $event)" app clipped width="280">
        <div class="pa-4">
            <v-img :src="logo" max-width="150" max-height="100" contain></v-img>
        </div>
        
        <!-- User Name moved here, right after the logo -->
        <div class="px-0 py-2">
            <v-list-item prepend-icon="mdi-account-circle">
                <v-list-item-title>User Name</v-list-item-title>
            </v-list-item>
        </div>

        <v-list nav>
            <!-- Default -->
            <v-expansion-panels flat>
                <v-expansion-panel>
                    <v-text-field
  prepend-inner-icon="mdi-magnify"
  hide-details
  variant="outlined"
  density="compact"
  placeholder="Search..."
  class="w-100 mr-3"
  bg-color="grey-lighten-4"
>  <template v-slot:append-inner>
    <span class="text-caption grey--text" style="color: #0000001A;">⌘/</span>
  </template>
</v-text-field>
                    <v-expansion-panel-title px-0>
                        
                        <v-list-item-icon>
                            <v-icon>mdi-view-dashboard</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Default</v-list-item-title>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list>
                            <v-expansion-panels flat>
                                <v-expansion-panel>
                                    <v-expansion-panel-title>
                                        <v-list-item-title>Users Management</v-list-item-title>
                                    </v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <v-list>
                                            <v-list-item 
                                                to="/employees"
                                                :class="{ 'active-item': $route.path === '/employees' }"
                                            >
                                                <v-list-item-title>Employees</v-list-item-title>
                                            </v-list-item>

                                            <v-list-item 
                                                to="/roles"
                                                :class="{ 'active-item': $route.path === '/roles' }"
                                            >
                                                <v-list-item-title>Roles</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>

                            <v-list-item 
                                to="/teams" 
                                :class="{ 'active-item': $route.path === '/teams' }"
                            >
                                <v-list-item-title>Teams</v-list-item-title>
                            </v-list-item>

                            <v-list-item 
                                to="/permissions"
                                :class="{ 'active-item': $route.path === '/permissions' }"
                            >
                                <v-list-item-title>Permissions</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>

            <!-- eCommerce -->
            <v-expansion-panels flat>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <v-list-item-icon>
                            <v-icon>mdi-cart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>eCommerce</v-list-item-title>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list>
                            <v-expansion-panels flat>
                                <v-expansion-panel>
                                    <v-expansion-panel-title>
                                        <v-list-item-title>eCommerce</v-list-item-title>
                                    </v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <v-list>
                                            <v-list-item 
                                                to="/ecommerce"
                                                :class="{ 'active-item': $route.path === '/ecommerce' }"
                                            >
                                                <v-list-item-title>eCommerce</v-list-item-title>
                                            </v-list-item>

                                            <v-list-item 
                                                to="/roles"
                                                :class="{ 'active-item': $route.path === '/roles' }"
                                            >
                                                <v-list-item-title>Roles</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>

                            <v-list-item 
                                to="/teams"
                                :class="{ 'active-item': $route.path === '/teams' }"
                            >
                                <v-list-item-title>Teams</v-list-item-title>
                            </v-list-item>

                            <v-list-item 
                                to="/permissions"
                                :class="{ 'active-item': $route.path === '/permissions' }"
                            >
                                <v-list-item-title>Permissions</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>

            <!-- Other Pages -->
            <v-list-item to="/projects" prepend-icon="mdi-briefcase" :class="{ 'active-item': $route.path === '/projects' }">
                <v-list-item-title>Projects</v-list-item-title>
            </v-list-item>

            <v-list-item to="/courses" prepend-icon="mdi-book-open-variant" :class="{ 'active-item': $route.path === '/courses' }">
                <v-list-item-title>Online Courses</v-list-item-title>
            </v-list-item>

            <v-list-item to="/profile" prepend-icon="mdi-account" :class="{ 'active-item': $route.path === '/profile' }">
                <v-list-item-title>User Profile</v-list-item-title>
            </v-list-item>

            <v-list-item to="/account" prepend-icon="mdi-account-cog" :class="{ 'active-item': $route.path === '/account' }">
                <v-list-item-title>Account</v-list-item-title>
            </v-list-item>

            <v-list-item to="/corporate" prepend-icon="mdi-office-building" :class="{ 'active-item': $route.path === '/corporate' }">
                <v-list-item-title>Corporate</v-list-item-title>
            </v-list-item>

            <v-list-item to="/blog" prepend-icon="mdi-post" :class="{ 'active-item': $route.path === '/blog' }">
                <v-list-item-title>Blog</v-list-item-title>
            </v-list-item>

            <v-list-item to="/social" prepend-icon="mdi-account-group" :class="{ 'active-item': $route.path === '/social' }">
                <v-list-item-title>Social</v-list-item-title>
            </v-list-item>
        </v-list>

        <!-- Removed the user name from here -->
    </v-navigation-drawer>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
    name: "Sidebar",
    props: {
        drawer: Boolean,
    },
    emits: ["update:drawer"],
    data: () => ({
        logo,
    }),
};
</script>

<style>
.v-expansion-panel-text .v-list-item.active-item {
  border-radius: 8px !important;
  padding: 5px 10px !important;
  margin: 5px 0 !important;
  background-color: #6e3894 !important;
  color: white !important;
}
.active-item {
    background-color: #6e3894 !important;
    color: white !important;
    border-radius: 8px !important;
}
.v-expansion-panel-title {
    padding: 16px 8px !important;
}
.v-expansion-panel-text {
    border-left: 1px solid #cccccc;
}
.v-expansion-panel-text__wrapper {
    padding: 8px 0px 16px 18px !important;
}
</style>